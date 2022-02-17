import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UserState } from './core/mobx/user/UserState';
import { ScreenState } from './core/mobx/screen/ScreenState';
import { MatDrawer } from '@angular/material/sidenav';
import { AppState } from './core/mobx/AppState';
import { BrandingState } from './core/mobx/BrandingStare';
import { ActivatedRoute } from '@angular/router';
import { ScreenService } from '@core/service/screen.service';
import { LoadingService } from '@core/service/loading.service';
import { delay } from 'rxjs/operators';
import { GoogleAnalyticsService } from '@core/service/ga.service';
import { QiDianService } from '@core/service/qidian.service';
import { DialogService } from '@core/service/dialog.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  authenticated: boolean;
  opened: boolean;
  loading = false;
  constructor(
    public userState: UserState,
    public screen: ScreenState,
    public appState: AppState,
    public branding: BrandingState,
    private router: ActivatedRoute,
    private screenService: ScreenService,
    private loadingservice: LoadingService,
    private dialogService: DialogService,
    private googleAnalyticsService: GoogleAnalyticsService,
    private qiDianService: QiDianService
  ) {}

  ngOnInit(): void {
    const config = this.appState.config;
    if (config?.googleAnalytics) {
      const id = config.googleAnalytics.id;
      this.googleAnalyticsService.loadGoogleAnalytics(id);
    }
    if (config?.qidian) {
      const qdConfig = config.qidian;
      this.qiDianService.loadQiDian(qdConfig);
    }
    if (config?.loading) {
      if (!this.appState?.meta?.config?.loading) {
        this.listenToLoading();
      }
    }
    if (config?.dialog?.forceDialog) {
      this.dialogService.forceDialog(this.appState.config.dialog.forceDialog);
    }
  }

  ngAfterViewInit(): void {
    if (this.screenService.isPlatformBrowser()) {
      this.screen.drawer$.subscribe((res) => {
        this.opened = !this.opened;
      });

      this.router.fragment.subscribe((fragment) => {
        if (fragment) {
          this.screenService.scrollToAnchor(fragment);
        }
      });
    }
  }

  updateDrawer(drawer: MatDrawer): void {
    if (this.screenService.isPlatformBrowser()) {
      this.screen.updateDrwer(drawer);
    }
  }

  listenToLoading(): void {
    this.loadingservice.loadingSub.pipe(delay(0)).subscribe((loading) => {
      this.loading = loading;
    });
  }
}
