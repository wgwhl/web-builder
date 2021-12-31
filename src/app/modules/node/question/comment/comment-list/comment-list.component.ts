import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { AppState } from '@core/mobx/AppState';
import { NodeService } from '@core/service/node.service';
import { UtilitiesService } from '@core/service/utilities.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentListComponent implements OnInit, OnDestroy {
  @Input() content: any;
  @Input() comments: any;
  @Input() myCommentId: string;
  @Output() submitComment = new EventEmitter();
  loading: boolean;
  showInlineEditor = false;

  subscription = new Subscription();
  constructor(
    private nodeService: NodeService,
    private appState: AppState,
    private utilitiesService: UtilitiesService,
    private cd: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  onUpdateMyQuestion(): void {
    this.showInlineEditor = true;
    this.cd.detectChanges();
  }

  onShow(id: string): boolean {
    return this.showInlineEditor && id === this.myCommentId;
  }

  onCancel(): void {
    this.showInlineEditor = false;
    this.cd.detectChanges();
  }

  onSubmitComment(state: boolean): void {
    if (state) {
      this.showInlineEditor = false;
      this.submitComment.emit(state);
      this.cd.detectChanges();
    }
  }

  onDeleteMyQuestion(id: string): void {
    this.loading = true;
    const sub$ = this.nodeService
      .deleteEntity(`${this.appState.apiUrlConfig.commentGetPath}/comment`, id)
      .subscribe(
        (res) => {
          this.loading = false;
          this.utilitiesService.openSnackbar('您的回答已删除！', '√');
          this.submitComment.emit(true);
        },
        () => {
          this.loading = false;
          this.utilitiesService.openSnackbar('Please check user state.', '√');
        }
      );
    this.subscription.add(sub$);
    this.cd.detectChanges();
  }

  trackByFn(index: number, item: any): number {
    return index;
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
}
