import { Component, Input, OnInit } from '@angular/core';
import { NodeService } from 'src/app/service/node.service';

@Component({
  selector: 'app-dynamic-media-list',
  templateUrl: './dynamic-media-list.component.html',
  styleUrls: ['./dynamic-media-list.component.scss'],
})
export class DynamicMediaListComponent implements OnInit {
  @Input() content: any;
  list: any;
  loading = true;

  constructor(private nodeService: NodeService) {}

  ngOnInit(): void {
    this.getContent();
  }

  getContent(): void {
    this.loading = true;
    const params = [
      'include=category,field_tags,media,media.field_media_image',
      'sort=-changed',
      'jsonapi_include=1',
    ].join('&');
    this.nodeService.getNodes('blog', params).subscribe((res) => {
      this.list = res.data.map((item: any) => {
        const link = this.nodeService.getNodePath(item);
        return {
          title: {
            label: item.title,
            href: link,
          },
          spacer: 'none',
          feature: {
            fullIcon: 'fullscreen',
            openIcon: 'open_in_new',
            link,
            ratios: 'media-16-9',
            img: {
              large: item.media.field_media_image.uri.url,
              normal: item.media.thumbnail.uri.url,
            },
          },
          date: item.changed,
          category: item.category.name,
          body: item.body.summary || item.body.value,
          details: {
            label: '查看更多',
            href: link,
            style: 'style-v1',
            icon: 'open_in_new',
          },
        };
      });
      this.loading = false;
    });
  }
}
