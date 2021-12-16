import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NodeService } from '@core/service/node.service';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FormService } from '@core/service/form.service';
import { isEmpty, omitBy } from 'lodash';
import { BaseComponent } from '@uiux/base/base.widget';
import { RouteService } from '@core/service/route.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent
  extends BaseComponent
  implements OnInit, OnDestroy
{
  @Input() content: any;

  form: FormGroup;
  options: any[] = [];
  constructor(
    public nodeService: NodeService,
    private router: Router,
    private formService: FormService,
    public routerService: RouteService
  ) {
    super(nodeService, routerService);
  }

  ngOnInit(): void {
    this.initForm(this.content);
  }

  initForm(form: any): void {
    this.form = this.formService.toFormGroup([form]);
    this.onFormChange();
  }

  onFormChange(): void {
    this.form.valueChanges
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((value) => {
        const params = omitBy(
          Object.assign(
            {
              page: '0',
              loading: 0,
            },
            value
          ),
          isEmpty
        );

        this.nodeService
          .search('content', this.getApiParams(params))
          .subscribe((data) => {
            this.options = data.rows.map((item: any) => {
              return {
                label: item.title,
                href: item.url,
              };
            });
          });
      });
  }

  onSelected(data: any): void {
    this.form.reset();
    this.router.navigate([`${data.option.value}`]);
  }

  ngOnDestroy(): void {}

  search(value: any): void {
    this.form.reset();
    this.router.navigate(['search'], { queryParams: value });
  }
}
