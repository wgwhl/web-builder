import { Component, Input, OnInit } from '@angular/core';
import { AppState } from '@core/mobx/AppState';
import { ScreenService } from '@core/service/screen.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent implements OnInit {
  @Input() content: any;
  config: any;
  constructor(
    public appState: AppState,
    private screenService: ScreenService
  ) {}

  ngOnInit(): void {
    if (this.screenService.isPlatformBrowser()) {
      this.config = this.appState?.actions?.download;
    }
  }
}
