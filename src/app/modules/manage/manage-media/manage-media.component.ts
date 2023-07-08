import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NodeService } from '@core/service/node.service';
import { ScreenService } from '@core/service/screen.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CORE_CONFIG, MEDIA_ASSETS } from '@core/token/token-providers';
import { ICoreConfig } from '@core/interface/IAppConfig';
import { IManageAssets } from '@core/interface/manage/IManage';
import { ContentState } from '@core/state/ContentState';

@Component({
  selector: 'app-manage-media',
  templateUrl: './manage-media.component.html',
  styleUrls: ['./manage-media.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ManageMediaComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  loading = true;
  destory$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private screenService: ScreenService,
    private nodeService: NodeService,
    private contentState: ContentState,
    @Inject(CORE_CONFIG) public coreConfig: ICoreConfig,
    @Inject(MEDIA_ASSETS) public mediaAssets$: Observable<IManageAssets>
  ) {}

  ngOnInit(): void {}

  getFiles(type = '', params = ''): void {
    this.nodeService
      .fetch(type, params)
      .pipe(takeUntil(this.destory$))
      .subscribe((res) => {
        console.log(res);
      });
  }

  onPageChange(link: string): void {
    this.screenService.gotoTop();
    this.contentState.pageChange$.next(link);
  }

  onSearch(value: any): void {
    this.contentState.mediaAssetsFormChange$.next(value);
  }

  trackByFn(index: number, item: any): number {
    return item.id;
  }
}
