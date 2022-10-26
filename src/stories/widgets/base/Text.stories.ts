import {
  moduleMetadata,
  componentWrapperDecorator,
  Meta,
  Story,
} from '@storybook/angular';
import { TextComponent } from '@uiux/widgets/text/text.component';
import { StorysModule } from '@core/storys.module';
import { DialogComponent } from '@uiux/widgets/dialog/dialog.component';
import { PlayerComponent } from '@uiux/widgets/media/player/player.component';

export default {
  title: '基础组件/内容/富文本',
  id: 'text',
  component: TextComponent,
  decorators: [
    moduleMetadata({
      entryComponents: [DialogComponent, PlayerComponent],
      declarations: [],
      imports: [StorysModule.forRoot()],
    }),
    componentWrapperDecorator(
      (story) =>
        `<div class="position-relative p-x p-y" style="z-index:1">${story}</div>`
    ),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Base = Template.bind({});
Base.storyName = '基础文本';
Base.args = {
  content: {
    body: '<p><strong>Github</strong> <a href="#">actions</a> 从2019年就<em>免费</em>开放给个人开源项目使用，对于自动化开放测试部署，开发者一定非常的熟悉，如果把中间这项流程做好，不仅节省了大量的人力也大大加快了开发效率，在配置完善的情况下可以提高代码质量。</p><p>查了些文档文章，Github Actions有几个重要的信息如下：</p><ul class="list-done"><li>通过 Docker 隔离</li><li>每个 workflow 独享1核虚拟CPU, 3.75GB内存，包括网络权限和100GB 磁盘</li><li>在 yml 配置文件中可以使用上下文环境变量，比如分支或者不公开变量</li><li>每个workflow 排队和执行时间最多 58 分钟，最多可以包含100个action，每个仓库同一时刻只能运行两个 workflow</li></ul>',
  },
};

export const Title = Template.bind({});
Title.storyName = '带标题风格';
Title.args = {
  content: {
    ...Base.args.content,
    spacer: 'sm',
    title: {
      label:
        '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
      style: 'style-v1',
    },
  },
};

export const Actions = Template.bind({});
Actions.storyName = '带 Actions 风格';
Actions.args = {
  content: {
    ...Base.args.content,
    spacer: 'lg',
    title: {
      label:
        '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
      style: 'style-v1',
    },
    bg: {
      classes: 'bg-shadow bg-fill-width',
    },
    actionsAlign: 'center center',
    actions: [
      {
        type: 'btn',
        mode: 'raised',
        color: 'primary',
        href: '#',
        label: '开始',
      },
      {
        type: 'closeDialog',
        label: 'Ok',
      },
      {
        type: 'btn-animate',
        label: '了解更多',
        href: '#',
        style: 'style-v1',
        icon: 'open_in_new',
      },
    ],
  },
};

export const SearchAction = Template.bind({});
SearchAction.storyName = '搜索';
SearchAction.args = {
  content: {
    ...Base.args.content,
    spacer: 'lg',
    title: {
      label:
        '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
      style: 'style-v1',
    },
    bg: {
      classes: 'bg-shadow bg-fill-width',
    },
    actionsAlign: 'center center',
    actions: [
      {
        type: 'search-action',
        button: {
          label: '搜索',
          color: 'primary',
        },
        form: [
          {
            type: 'select',
            key: 'skill',
            label: '技能',
            options: [
              {
                label: '无',
                value: '',
              },
              {
                label: 'Angular',
                value: 'angular',
              },
              {
                label: 'React',
                value: 'react',
              },
              {
                label: 'Vue',
                value: 'vue',
              },
            ],
          },
          {
            type: 'select',
            key: 'cms',
            label: 'CMS',
            options: [
              {
                label: '无',
                value: '',
              },
              {
                label: 'Drupal',
                value: 'drupal',
              },
              {
                label: 'WP',
                value: 'wp',
              },
              {
                label: 'Joomla',
                value: 'joomla',
              },
            ],
          },
          {
            type: 'input',
            key: 'keys',
            placeholder: '请输入关键词搜索',
            controlType: 'search',
            label: '关键词',
            appearance: 'legacy',
          },
        ],
      },
    ],
  },
};

export const BtnVideoAction = Template.bind({});
BtnVideoAction.storyName = '视频播放';
BtnVideoAction.args = {
  content: {
    ...Base.args.content,
    spacer: 'lg',
    title: {
      label:
        '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
      style: 'style-v1',
    },
    bg: {
      classes: 'bg-shadow bg-fill-width',
    },
    actionsAlign: 'center center',
    actions: [
      {
        type: 'btn-video',
        color: 'primary',
        video: {
          options: {
            controls: true,
            aspectRatio: '16:9',
            poster: '/assets/images/16-9/business-02.jpg',
            sources: [
              { src: '/assets/video/afterglow.mp4', type: 'video/mp4' },
            ],
          },
        },
      },
    ],
  },
};

export const List = Template.bind({});
List.storyName = '带列表风格';
List.args = {
  content: {
    ...Base.args.content,
    spacer: 'xl',
    title: {
      label:
        '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
      style: 'style-v4',
    },
    bg: {
      classes: 'bg-fill-width',
      img: {
        src: '/assets/images/map.png',
      },
    },
    lists: {
      params: {
        icon: true,
      },
      elements: [
        {
          type: 'link',
          label: '使用 DevTools 对 Angular 前端应用性能分析',
          href: '#',
        },
        {
          type: 'link',
          label: '使用 takeUntil 操作符管理 Angular 组件的订阅',
          href: '#',
        },
        {
          type: 'link',
          label: '你应该了解的 Angular 最佳实践',
          href: '#',
        },
        {
          type: 'link',
          label:
            'Jsona 一款转换 jsonapi 数据的工具库，也算是解放 Drupal jsonapi 反序列化的利器',
          href: '#',
        },
        {
          type: 'link',
          label: 'Angular 有哪几种不同类型的绑定',
          href: '#',
        },
      ],
    },
    actionsAlign: 'start center',
    actions: [
      {
        type: 'btn-animate',
        label: '了解更多',
        href: '#',
        style: 'style-v1',
        icon: 'open_in_new',
      },
    ],
  },
};
