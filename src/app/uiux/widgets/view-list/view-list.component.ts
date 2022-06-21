import { formatDate } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
  AfterViewInit,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PageEvent } from '@angular/material/paginator';
import { UserState } from '@core/mobx/user/UserState';
import { DialogService } from '@core/service/dialog.service';
import { FormService } from '@core/service/form.service';
import { NodeService } from '@core/service/node.service';
import { BaseComponent } from '@uiux/base/base.widget';
import { of, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  takeUntil,
  catchError,
} from 'rxjs/operators';

@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewListComponent
  extends BaseComponent
  implements OnInit, AfterViewInit
{
  @Input() content: any;
  form: FormGroup;
  searchEntry: any;
  table: any;
  loading: boolean;
  pager: any;
  noAuth: boolean;
  canShow = false;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private nodeService: NodeService,
    public userState: UserState,
    private cd: ChangeDetectorRef,
    private formService: FormService,
    private dialogService: DialogService
  ) {
    super(userState);
  }

  ngOnInit(): void {
    this.initForm();
    this.getViews();
    this.afterClosedDialog();
  }

  ngAfterViewInit(): void {
    if (!this.content?.emptyHidden) {
      this.canShow = true;
      this.cd.detectChanges();
    }
  }

  initForm(): void {
    if (this.content.form) {
      this.form = this.formService.toFormGroup(this.content.form);
      this.form.valueChanges
        .pipe(
          debounceTime(1000),
          distinctUntilChanged(),
          takeUntil(this.destroy$)
        )
        .subscribe((res) => {
          if (res.start) {
            res.start = formatDate(res.start, 'yyyy-MM-dd', 'en-US');
          }
          if (res.end) {
            res.end = formatDate(res.end, 'yyyy-MM-dd', 'en-US');
          }
          this.getViews(res);
        });
    }
  }

  getViews(options = {}): void {
    this.loading = true;
    const params = this.getApiParams(options);
    this.cd.detectChanges();
    this.nodeService
      .search(this.content.params.apiType, params, this.userState.csrfToken)
      .pipe(
        catchError((error: any) => {
          if (error.status === 403) {
            return of(false);
          }
          return of(error.status);
        })
      )
      .subscribe((res) => {
        if (!res) {
          this.noAuth = true;
          this.loading = false;
          this.cd.detectChanges();
          return;
        }
        if (this.content?.emptyHidden && !res.row.length) {
          this.canShow = false;
          this.cd.detectChanges();
          return;
        }
        this.table = {
          header: this.content.header,
          elements: res.rows,
          classes: this.content?.tableClasses || '',
        };
        this.pager = res.pager;
        this.loading = false;
        this.cd.detectChanges();
      });
  }

  clear(): void {
    this.form.reset();
  }

  afterClosedDialog(): void {
    if (this.dialogService.dialogState$) {
      this.dialogService.dialogState$.subscribe((state) => {
        if (!state) {
          this.getViews();
        }
      });
    }
  }

  onPageChange(page: PageEvent): void {
    this.getViews({
      page: page.pageIndex,
    });
  }
}
