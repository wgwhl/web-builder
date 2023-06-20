import { CdkDragDrop } from '@angular/cdk/drag-drop';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostBinding,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import type { ICoreConfig, IPage } from '@core/interface/IAppConfig';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';
import components from './components.json';
import widgets from './widgets.json';
import { BuilderState } from '@core/state/BuilderState';
import { IBuilderComponent, IBuilderWidget } from '@core/interface/IBuilder';
import { BUILDERFULLSCREEN, CORE_CONFIG } from '@core/token/token-providers';
import { UtilitiesService } from '@core/service/utilities.service';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { ScreenState } from '@core/state/screen/ScreenState';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss'],
})
export class BuilderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() content: IPage;
  @LocalStorage('page')
  page: IPage;
  @ViewChild('containerDrawer', { static: false }) containerDrawer: MatDrawer;
  @LocalStorage('builderFullScreen')
  builderFullScreen: boolean;
  components: IBuilderComponent[];
  widgets: IBuilderWidget[];
  panelOpenState = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  mode: 'side' | 'over' | 'push' = 'side';
  constructor(
    private storage: LocalStorageService,
    public builder: BuilderState,
    private utli: UtilitiesService,
    @Inject(CORE_CONFIG) private coreConfig: ICoreConfig,
    @Inject(BUILDERFULLSCREEN) public builderFullScreen$: Observable<boolean>,
    private screenState: ScreenState,
    @Inject(DOCUMENT) private doc: Document,
    private ele: ElementRef
  ) {}

  ngOnInit(): void {
    if (this.coreConfig.builder?.enable) {
      this.content = this.page;
      this.components = components.data;
      this.widgets = widgets.data;
      if (!this.builderFullScreen) {
        this.storage.store('builderFullScreen', false);
      }
      this.builder.animateDisable$.next(true);
    } else {
      this.utli.openSnackbar('请开启 Builder 功能！', 'ok');
    }
  }

  ngAfterViewInit(): void {
    this.storage
      .observe(this.builder.pageKey)
      .pipe(takeUntil(this.destroy$))
      .subscribe((page) => {
        this.content = page;
      });
    this.builder.toolbarDisable$
      .pipe(takeUntil(this.destroy$))
      .subscribe((state) => {
        if (state) {
          this.containerDrawer.close();
        }
      });
    this.screenState
      .mqAlias$()
      .pipe(takeUntil(this.destroy$))
      .subscribe((alia) => {
        if (alia.includes('xs')) {
          this.mode = 'over';
        } else {
          this.mode = 'side';
        }
      });
    this.screenState.scroll$.pipe().subscribe(() => {
      const header = this.doc.querySelector('app-header header');
      if (header) {
        console.log(header.clientHeight);
        this.ele.nativeElement.style.height = `calc(100vh - ${header.clientHeight}px)`;
      }
    });
  }

  onAnimate(): void {
    this.builder.animateDisable$.next(false);
  }

  drop(event: CdkDragDrop<string[]>): void {
    // 预览上下排序组件
    if (event.previousContainer === event.container) {
      this.builder.dropComponent(event);
    } else {
      // 添加组件到指定位置
      this.builder.transferComponet(event);
    }
  }

  ngOnDestroy(): void {
    if (this.destroy$.next) {
      this.destroy$.next(true);
      this.destroy$.unsubscribe();
    }
  }
}
