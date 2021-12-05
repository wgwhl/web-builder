import { Component, Input, OnInit } from '@angular/core';
import { UserState } from 'src/app/mobx/user/UserState';
import { NodeService } from 'src/app/core/service/node.service';
import { ScreenService } from 'src/app/core/service/screen.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss'],
})
export class QuestionComponent implements OnInit {
  @Input() content: any;
  comments: any;
  showEditor = false;
  isAsked = false;
  myCommentId = '';
  myCommentContent = '';
  constructor(
    private nodeService: NodeService,
    private userState: UserState,
    private screenService: ScreenService
  ) {}

  ngOnInit(): void {
    this.checkIsAsked();
    this.getComments();
  }

  get entityId(): string {
    return this.content?.params?.relationships?.entity_id?.data?.id || '';
  }

  get entityType(): string {
    return this.content?.params?.attributes?.field_name || '';
  }

  onShowEditor(): void {
    this.showEditor = true;
  }

  onSubmit(state: boolean): void {
    // if success
    if (state) {
      this.checkIsAsked();
      this.getComments();
    }
  }

  checkIsAsked(): void {
    const params = [
      `filter[uid.id]=${this.userState.currentUser.id}`,
      `filter[entity_id.id]=${this.entityId}`,
      `sort=-created`,
      `page[limit]=1`,
    ].join('&');
    const path = this.nodeService.apiUrlConfig.commentGetPath;
    this.nodeService
      .getNodes(path, this.entityType, params)
      .subscribe((res) => {
        if (res.data.length) {
          this.isAsked = true;
          this.showEditor = false;
          this.myCommentId = res.data[0].id;
          this.myCommentContent = res.data[0].attributes.content.processed;
        } else {
          this.isAsked = false;
          this.myCommentId = '';
          this.myCommentContent = '';
        }
      });
  }

  checkQuestion(id: string): void {
    this.screenService.scrollToAnchor(`q-${id}`);
  }

  getComments(): void {
    const params = [
      `filter[entity_id.id]=${this.entityId}`,
      `include=uid,uid.user_picture`,
      `fields[user--user]=name,user_picture`,
      `fields[file--file]=uri,url`,
      `sort=-created`,
      `jsonapi_include=1`,
    ].join('&');
    const path = this.nodeService.apiUrlConfig.commentGetPath;
    this.nodeService
      .getNodes(path, this.entityType, params)
      .subscribe((res) => {
        this.comments = res.data.map((comment: any) => {
          return {
            author: {
              img: {
                src: comment.uid.user_picture.uri.url,
                style: {
                  width: '45px',
                  height: '45px',
                  borderRadius: '3px',
                },
                alt: comment.uid.name,
              },
              title: comment.uid.name,
              subTitle: '用户暂无签名',
            },
            time: comment.changed,
            id: comment.id,
            content: comment.content.processed,
          };
        });
      });
  }
}
