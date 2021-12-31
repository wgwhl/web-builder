import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { NodeService } from '@core/service/node.service';
import { RouteService } from '@core/service/route.service';
import { ScreenService } from '@core/service/screen.service';
import { BaseComponent } from '@uiux/base/base.widget';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dynamic-media-list',
  templateUrl: './dynamic-media-list.component.html',
  styleUrls: ['./dynamic-media-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicMediaListComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  @Input() content: any;
  list: any;
  links: any;
  loading = true;

  subscription = new Subscription();
  constructor(
    public nodeService: NodeService,
    public routerService: RouteService,
    private screenService: ScreenService,
    private cd: ChangeDetectorRef
  ) {
    super(nodeService, routerService);
  }

  ngOnInit(): void {
    if (this.screenService.isPlatformBrowser()) {
      this.getContent();
    }
  }

  getContent(): void {
    const params = [
      `include=${this.getParams(this.content, 'include')}`,
      `sort=${this.getParams(this.content, 'sort')}`,
      'jsonapi_include=1',
      `page[limit]=${this.getParams(this.content, 'limit') || 20}`,
    ].join('&');
    const path = this.nodeService.apiUrlConfig.nodeGetPath;
    const sub$ = this.nodeService
      .getNodes(path, `${this.getParams(this.content, 'type')}`, params)
      .subscribe((res) => {
        this.updateList(res);
      });

    this.subscription.add(sub$);
  }

  updateList(res: any): void {
    this.list = res.data.map((item: any) => {
      const link = this.nodeService.getNodePath(item);
      return {
        title: {
          label: item.title,
          href: link,
        },
        spacer: 'none',
        showImage: this.content.showImage || true,
        feature: {
          fullIcon: 'fullscreen',
          openIcon: 'open_in_new',
          link,
          ratios: this.content.ratios || 'media-16-9',
          img: {
            classes: 'object-fit',
            src: item.media.thumbnail.uri.url,
            alt: item.title,
          },
        },
        date: item.changed,
        category: item.category.name,
        body: item.body.summary || item.body.value,
        details: {
          label: this.content.readMoreLabel || '查看更多',
          href: link,
          style: 'style-v1',
          icon: 'open_in_new',
        },
      };
    });
    this.links = res.links;
    this.loading = false;
    this.cd.detectChanges();
  }

  loadContent(link: string): void {
    this.loading = true;
    const sub$ = this.nodeService.getNodeByLink(link).subscribe((res) => {
      this.updateList(res);
    });

    this.subscription.add(sub$);
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
