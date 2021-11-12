import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { BaseComponent } from 'src/app/uiux/base/base.widget';
import { NodeService } from 'src/app/service/node.service';
import { RouteService } from 'src/app/service/route.service';
import { isEmpty, omitBy } from 'lodash';

@Component({
  selector: 'app-tab1v1',
  templateUrl: './tab1v1.component.html',
  styleUrls: ['./tab1v1.component.scss'],
})
export class Tab1v1Component extends BaseComponent implements OnInit {
  @Input() content: any;

  selectedIndex = 0;
  tabs: any[];
  page: number;
  pager: any;
  currentList: any[];
  constructor(
    public nodeService: NodeService,
    public routerService: RouteService,
    private router: ActivatedRoute
  ) {
    super(nodeService, routerService);
  }

  ngOnInit(): void {
    this.router.queryParamMap.subscribe((query: Params) => {
      this.page = query.page || 0;
      const querys = omitBy(
        Object.assign(
          {
            page: this.page,
          },
          query
        ),
        isEmpty
      );
      this.initTab(query);
    });
  }

  initTab(query: Params): void {
    if ('tab' in query) {
      this.selectedIndex = Number(query.tab);
    }
    this.tabs = this.content.tab.elements;
    if (this.selectedIndex < this.tabs.length) {
      const tabQuery = this.tabs[this.selectedIndex].query;
      const apiQuery = Object.assign({}, tabQuery, {
        page: query.page,
      });
      this.nodeSearchByParams('content', {}, apiQuery).subscribe((res) => {
        this.pager = res.pager;
        this.currentList = res.rows.map((item: any) => {
          return {
            link: {
              href: item.url,
              label: item.title,
            },
            more: {
              href: item.url,
              label: '更多',
            },
            date: item.created,
            body: item.body,
          };
        });
      });
    }
  }

  onSelectChange(index: number): void {
    const values = {
      tab: index,
    };
    this.updateList(values);
  }

  onPageChange(page: number): void {
    const values = {
      tab: this.selectedIndex,
      page: page - 1,
    };
    this.updateList(values);
  }

  updateList(values: any): void {
    this.initTab(values);
    this.updateUrl(values);
  }
}
