import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { BuilderState } from '@core/state/BuilderState';
import { ScreenState } from '@core/state/screen/ScreenState';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {
  BRANDING,
  BUILDER_CURRENT_PAGE,
  BUILDER_FULL_SCREEN,
} from '@core/token/token-providers';
import { ScreenService } from '@core/service/screen.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '@uiux/widgets/dialog/dialog.component';
import type { IPage } from '@core/interface/IAppConfig';
import { IBranding } from '@core/interface/branding/IBranding';

@Component({
  selector: 'app-builder-toolbar',
  templateUrl: './builder-toolbar.component.html',
  styleUrls: ['./builder-toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderToolbarComponent
  implements OnInit, AfterViewInit, OnDestroy
{
  @Input() builderRightDrawer: MatDrawer;
  destroy$: Subject<boolean> = new Subject<boolean>();
  showNavigate: boolean = false;
  showBranding: boolean = false;

  constructor(
    private storage: LocalStorageService,
    public builder: BuilderState,
    private screenState: ScreenState,
    private screenService: ScreenService,
    private dialog: MatDialog,
    @Inject(BRANDING) public branding$: Observable<IBranding>,
    @Inject(BUILDER_FULL_SCREEN) public builderFullScreen$: Observable<boolean>,
    @Inject(BUILDER_CURRENT_PAGE) public currentPage$: Observable<IPage>
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (this.screenService.isPlatformBrowser()) {
      this.screenState
        .mqAlias$()
        .pipe(takeUntil(this.destroy$))
        .subscribe((alia) => {
          if (alia.includes('xs')) {
            this.builder.fullScreen$.next(true);
            this.builderRightDrawer.close();
          }
        });
    }
  }

  onTitle(event: any): void {
    const {
      target: { textContent },
    } = event;
    if (textContent) {
      this.builder.currentPage.title = textContent;
      this.builder.saveLocalVersions();
    }
  }

  onFullScreen(event: MatSlideToggleChange): void {
    this.storage.store('builderFullScreen', event.checked);
    this.builder.fullScreen$.next(event.checked);
  }

  toggleNavigate(): void {
    this.showNavigate = !this.showNavigate;
    this.builder.previewListDrawer$.next(this.showNavigate);
  }

  onSelectAssets(): void {
    this.dialog.open(DialogComponent, {
      width: '100%',
      data: {
        title: '媒体库',
        disableCloseButton: true,
        inputData: {
          content: {
            type: 'manage-media',
          },
        },
      },
    });
  }

  showRightDrawer(): void {
    this.builder.showRightDrawer = !this.builder.showRightDrawer;
    if (!this.builder.showRightDrawer) {
      this.builderRightDrawer.close();
    }
  }

  onShowBranding(): void {
    this.showBranding = !this.showBranding;
    this.builder.showBranding$.next(this.showBranding);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
