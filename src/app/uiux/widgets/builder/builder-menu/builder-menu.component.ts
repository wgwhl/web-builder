import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  OnInit,
} from '@angular/core';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { DEBUGANIMATEKEY } from '@core/factory/factory';
import type { IPage } from '@core/interface/IAppConfig';
import { UtilitiesService } from '@core/service/utilities.service';
import { BuilderState } from '@core/state/BuilderState';
import { ContentState } from '@core/state/ContentState';
import { DEBUGANIMATE } from '@core/token/token-providers';
import { map } from 'lodash-es';
import { LocalStorage, LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-builder-menu',
  templateUrl: './builder-menu.component.html',
  styleUrls: ['./builder-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BuilderMenuComponent implements OnInit, AfterViewInit {
  @Input() content: any;
  @Input() showPreview = true;
  @LocalStorage('page')
  page: IPage;
  total: number;
  isDebugAnimate: boolean;

  constructor(
    public contentState: ContentState,
    private builder: BuilderState,
    private util: UtilitiesService,
    private cd: ChangeDetectorRef,
    private storage: LocalStorageService,
    @Inject(DEBUGANIMATE) private bebugAnimate: boolean,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
    this.isDebugAnimate = this.bebugAnimate;
    this.cd.detectChanges();
  }

  ngAfterViewInit(): void {
    this.getTotal();
  }

  getTotal(): void {
    const localPage = this.storage.retrieve(this.builder.pageKey);
    if (localPage) {
      this.total = localPage.body.length;
    } else {
      this.total = 0;
    }
    this.cd.detectChanges();
    this.storage.observe(this.builder.pageKey).subscribe((page) => {
      if (page && page.body) {
        this.total = page.body.length;
      } else {
        this.total = 0;
      }
      this.cd.detectChanges();
    });
  }

  onPreview(): void {
    if (!this.page || this.page.body.length === 0) {
      this.util.openSnackbar('预览页面没有组件，请添加再预览', 'ok');
      return;
    }
    this.contentState.drawerOpened$.next(true);
    this.contentState.drawerContent$.next(this.page);
  }

  onCopy(): void {
    this.util.copy(JSON.stringify(this.page));
    this.util.openSnackbar('已复制页面组件 JSON', 'ok');
  }

  onClear(): void {
    this.builder.initPage();
    this.contentState.drawerOpened$.next(false);
    this.util.openSnackbar('预览页面的组件已清空', 'ok');
  }

  onSubmit(): void {
    this.util.openSnackbar('功能尚未开发，可以手动复制页面 JSON', 'ok');
  }

  onDebugAnimate(event: MatSlideToggleChange): void {
    this.isDebugAnimate = event.checked;
    this.storage.store(DEBUGANIMATEKEY, this.isDebugAnimate);
    this.builder.toolbarDisable$.next(this.isDebugAnimate);
    this.builder.debugeAnimate$.next(this.isDebugAnimate);
    const markers = this.doc.getElementsByClassName('marker-text');
    if (!this.isDebugAnimate) {
      // hidden marker
      map(markers, (marker) => {
        marker.classList.remove('display-block');
        marker.classList.add('display-none');
      });
    } else {
      if (markers.length) {
        map(markers, (marker) => {
          marker.classList.add('display-block');
          marker.classList.remove('display-none');
        });
      }
    }
  }
}
