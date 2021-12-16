import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { ScreenState } from '@core/mobx/screen/ScreenState';
import { ScreenService } from '@core/service/screen.service';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent implements OnInit {
  @Input() content: any;
  @HostBinding('class') hostClasses: any;

  constructor(
    public screen: ScreenState,
    private screenService: ScreenService
  ) {}

  ngOnInit(): void {
    if (this.screenService.isPlatformBrowser()) {
      if (this.content.hostClasses) {
        this.hostClasses = this.content.hostClasses;
      }
    }
  }
}
