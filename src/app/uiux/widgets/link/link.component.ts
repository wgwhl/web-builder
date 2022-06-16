import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { ILink } from '@core/interface/widgets/ILink';
import { RouteService } from '@core/service/route.service';
import { UtilitiesService } from '@core/service/utilities.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { LoopWidgetsComponent } from '@uiux/widgets/loop-widgets/loop-widgets.component';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinkComponent implements OnInit {
  @Input() content: ILink;
  classes: any;
  href: string;
  constructor(
    public routeService: RouteService,
    private util: UtilitiesService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (!this.content) {
      return;
    }
    this.getClasses();
  }

  isAbsolute(href: string): boolean {
    return this.routeService.isAbsolute(href);
  }

  nav(event: MouseEvent): any {
    if (this.content.dialog) {
      event.preventDefault();
      event.stopPropagation();
      this.openDialog(this.content.dialog);
      return false;
    }
  }

  openDialog(dialog: any): void {
    const options = {
      width: dialog.width || '800px',
    };
    const config = Object.assign(this.content.dialog?.params || {}, options);
    this.dialog.open(DialogComponent, {
      ...config,
      data: {
        renderInputComponent: LoopWidgetsComponent,
        inputData: {
          content: dialog.data,
        },
      },
    });
  }

  getClasses(): void {
    const obj: any = {};
    if (this.content.classes) {
      obj[this.content.classes] = true;
    }
    if (this.content.href) {
      const type = this.util.getFileType(this.content.href);
      obj[type] = type || false;
    }
    this.classes = obj;
  }
}
