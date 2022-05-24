import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
  Inject,
} from '@angular/core';
import { NodeService } from '@core/service/node.service';
import { BaseComponent } from '@uiux/base/base.widget';
import { UserState } from '@core/mobx/user/UserState';
import { switchMap, takeUntil } from 'rxjs/operators';
import { ScreenService } from '@core/service/screen.service';
import { Subject } from 'rxjs';
import { IFlag } from '@core/interface/widgets/IFlag';
import { UtilitiesService } from '../../../../core/service/utilities.service';
import { CORE_CONFIG } from '@core/token/core.config';
import { ICoreConfig } from '@core/mobx/IAppConfig';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlagComponent extends BaseComponent implements OnInit, OnDestroy {
  @Input() content: IFlag;
  config: any;
  flagging = false;

  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private cd: ChangeDetectorRef,
    private screenService: ScreenService,
    private userState: UserState,
    public nodeService: NodeService,
    private utiltiy: UtilitiesService,
    @Inject(CORE_CONFIG) private coreConfig: ICoreConfig
  ) {
    super();
  }

  ngOnInit(): void {
    if (this.screenService.isPlatformBrowser()) {
      this.config = this.coreConfig?.actions?.flag;
      if (this.config?.enable && this.userState.authenticated) {
        this.getFlagging();
      }
    }
  }

  get flaggingParams(): any {
    const params = [
      `filter[uid.id]=${this.userState.currentUser.id}`,
      `filter[entity_id]=${this.getDeepValue(
        this.content,
        'params.entity_id'
      )}`,
    ].join('&');
    return params;
  }

  getFlagging(): void {
    this.nodeService
      .getNodes(
        this.coreConfig.apiUrl.flaggingGetPath,
        this.type,
        this.flaggingParams,
        this.userState.csrfToken
      )
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        if (res.data.length) {
          this.flagging = true;
          this.cd.detectChanges();
        }
      });
  }

  onFlag(): void {
    if (!this.userState.authenticated) {
      this.utiltiy.openSnackbar('请登录，再收藏！', 'x');
      return;
    }
    if (!this.flagging) {
      const data = {
        data: {
          type: this.getParams(this.content, 'type'),
          attributes: {
            entity_type: this.getParams(this.content, 'entity_type'),
            entity_id: this.getParams(this.content, 'entity_id'),
            global: false,
          },
          relationships: {
            flagged_entity: {
              data: {
                type: this.getDeepValue(
                  this.content,
                  'params.relationships.flagged_entity.type'
                ),
                id: this.nodeId,
              },
            },
            uid: {
              data: {
                type: 'user--user',
                id: this.userState.currentUser.id,
              },
            },
          },
        },
      };
      this.nodeService
        .flagging(this.path, JSON.stringify(data), this.userState.csrfToken)
        .pipe(takeUntil(this.destroy$))
        .subscribe((res) => {
          this.flagging = true;
          this.utiltiy.openSnackbar('已添加收藏！', 'x');
          this.cd.detectChanges();
        });
    } else {
      this.nodeService
        .getNodes(
          this.coreConfig.apiUrl.flaggingGetPath,
          this.type,
          this.flaggingParams
        )
        .pipe(
          switchMap((res) => {
            return this.nodeService.deleteFlagging(
              this.path,
              res.data,
              this.userState.csrfToken
            );
          }),
          takeUntil(this.destroy$)
        )
        .subscribe(() => {
          this.flagging = false;
          this.utiltiy.openSnackbar('已取消收藏！', 'x');
          this.cd.detectChanges();
        });
    }
  }

  getPath(type: string): string {
    return `/${type.replace('--', '/')}`;
  }

  get nodeId(): string {
    return this.getDeepValue(
      this.content,
      'params.relationships.flagged_entity.id'
    );
  }

  get path(): string {
    return `/api/v1${this.getPath(this.getParams(this.content, 'type'))}`;
  }

  get type(): string {
    return this.getParams(this.content, 'type').split('--')[1];
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
