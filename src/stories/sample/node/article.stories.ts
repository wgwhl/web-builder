import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
  StoryObj,
  applicationConfig,
} from '@storybook/angular';

import { ArticleComponent } from '@uiux/combs/node/article/article.component';
import { NodeModule } from '@uiux/combs/node/node.module';
import * as MediaListStories from 'src/stories/widgets/media/MediaList.stories';
import * as MeunListStories from 'src/stories/widgets/MeunList.stories';
import { UserModule } from 'src/app/modules/user/user.module';
import { StorysModule, sleep } from '@core/module/storys.module';
import { comments } from './comments.json';
import { formatDate } from '@angular/common';
import { IBaseNode } from '@core/interface/node/INode';
import * as SwiperStories from '@stories/widgets/Swiper.stories';
import { importProvidersFrom } from '@angular/core';
import { MenuListComponent } from '@uiux/widgets/menu-list/menu-list.component';
import { MatIcon } from '@angular/material/icon';
import { DynamicComponentComponent } from '@uiux/widgets/builder/dynamic-component/dynamic-component.component';

const meta: Meta<ArticleComponent> = {
  title: '示例页面/内容类型/普通文章',
  id: 'article',
  component: ArticleComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(StorysModule.forRoot())],
    }),
    moduleMetadata({
      declarations: [...StorysModule.forEntryComponents()],
    }),
    componentWrapperDecorator(
      (story) => `
      <app-dynamic-component [inputs]="content"></app-dynamic-component>
    `,
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: `通用的普遍文章，一般包含标题和内容相关属性信息，还包括文章相关联的数据等等。`,
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<ArticleComponent>;
export const Default: Story = {};
const MediaList: any = MediaListStories.Default.args;
const MenuList: any = MeunListStories.Base.args;
const content: IBaseNode = {
  type: 'article',
  title: '使用 DevTools 对 Angular 前端应用性能分析优化',
  banner: {
    img: {
      src: '../assets/images/16-9/nature-08.jpg',
    },
  },
  meta: [
    {
      icon: 'calendar-range',
      label: formatDate(new Date(), 'yyyy/MM/dd', 'en-US'),
    },
    {
      icon: 'tag-outline',
      label: '前端茶馆',
    },
  ],
  body: '<p>在上一篇文章中，有个知友评论说是要 takeUntil 来管理订阅更加清晰明了，那我们就探探究竟。</p><p>在 Rxjs 中，可以使用 takeUntil 来控制另外一个 Observable 对象数据的产生。使用 takeUntil，上游的数据直接转手给下游，直到takeUntil的参数吐出一个数据或者完结。</p><p>就像一个水龙头开关，一开始是打开的状态，上游的数据一开始直接流到下游，只要 takeUntil 一旦触发吐出数据，水龙头立刻关闭。</p><p>利用这点，可以在订阅时时，在管道中添加 takeUntil，在组件销毁时吐出数据，这样这些订阅就会立刻关闭，也就达到回收内存的作用。</p><p>多理解熟悉 Angular 的内部运行机制，为项目开发带来更好的效益。</p><img src="/assets/images/1-1/business-02.png" /><ul class="list-done"><li>要善于使用 lighthouse 进行检测评分，针对不同问题具体分析；</li><li>多使用 Devtools 分析，查找问题的入口；</li><li>不要在模板中使用函数或者getter，当有大量变更时，会存在很多的性能隐患；</li><p>接下来，会继续针对这个案例继续分析，使项目的 lighthouse 评分更加友好，提供给各位前端开发一些借鉴和交流。</p></ul>',
  sidebar: [
    {
      type: 'media-list',
      ...MediaList.content,
    },
    {
      type: 'menu-list',
      ...MenuList.content,
    },
  ],
};
Default.args = {
  content,
  canAccess: true,
};

export const Comment: Story = {};
Comment.storyName = '带评论';
const comment = {
  ...content,
  params: {
    require_rule: [],
    comment: {
      type: 'comment--comment',
      attributes: {
        entity_type: 'node',
        field_name: 'comment',
        comment_body: {
          format: 'full_html',
        },
      },
      relationships: {
        comment_type: {
          data: {
            type: 'comment_type--comment_type',
            id: '19c33b19-bfdc-4a26-9c64-af6171b123cb',
          },
        },
        entity_id: {
          data: {
            type: 'node--article',
            id: '{{entity_uuid}}',
          },
        },
      },
    },
  },
  editor: {
    action: {
      label: '提交',
    },
    succes: {
      label: '成功发布！',
    },
  },
  actions: [
    {
      type: 'flag',
      label: '收藏',
      icon: {
        name: 'star',
        inline: true,
      },
      params: {
        type: 'flagging--favorite',
        entity_type: 'node',
        entity_id: '1312',
        relationships: {
          flagged_entity: {
            type: 'node--article',
            id: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
          },
        },
      },
    },
    {
      type: 'share',
      button: {
        icon: 'share',
        label: '分享',
      },
      params: {
        url: '/',
      },
    },
    {
      type: 'download',
      label: '下载',
      icon: {
        name: 'file_download',
        inline: true,
      },
      elements: [
        {
          type: 'link',
          label: 'Doc',
          icon: {
            name: 'description',
          },
          href: '#',
        },
        {
          type: 'link',
          label: 'Pdf',
          icon: {
            name: 'picture_as_pdf',
          },
          href: '#',
        },
      ],
    },
  ],
  comment: {
    actions: ['update', 'delete', 'reply', 'quote'],
    title: true,
  },
};
Comment.args = {
  content: comment,
  canAccess: true,
  comments,
};

export const Relate: Story = {};
Relate.storyName = '相关文章';
Relate.args = {
  content: {
    ...content,
    bottom: [SwiperStories.Default?.args?.content],
  },
};
