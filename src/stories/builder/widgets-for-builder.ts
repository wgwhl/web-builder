import { IBuilderWidget } from '@core/interface/IBuilder';
import * as textStory from '../widgets/base/Text.stories';
import * as imgStory from '../widgets/base/Img.stories';
const {
  Center: {
    args: { content: text },
  },
} = textStory as any;

const {
  Default: {
    args: { content: img },
  },
} = imgStory as any;
export const widgets: IBuilderWidget[] = [
  {
    label: 'Basic',
    elements: [
      {
        label: 'Text',
        icon: {
          svg: 'format-size',
        },
        content: {
          type: 'text',
          body: '<p class="text-center">Github actions 从2019年就免费开放给个人开源项目使用，对于自动化开放测试部署，开发者一定非常的熟悉，如果把中间这项流程做好，不仅节省了大量的人力也大大加快了开发效率，在配置完善的情况下可以提高代码质量。</p>',
          spacer: 'lg',
          title: {
            label:
              '开源项目使用 <span class="text-primary">Github actions</span> 自动化测试部署 Angular 应用到 ECS 服务器',
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
      },
      {
        label: 'Image',
        icon: {
          svg: 'image-outline',
        },
        content: {
          type: 'img',
          classes: '',
          src: '/assets/images/cases/porto2.jpg',
          alt: 'alt',
        },
      },
      {
        label: 'Image',
        icon: {
          svg: 'image-outline',
        },
        content: {
          type: 'img',
          classes: '',
          src: '/assets/images/cases/porto2.jpg',
          alt: 'alt',
        },
      },
      {
        label: 'Image',
        icon: {
          svg: 'image-outline',
        },
        content: {
          type: 'img',
          classes: '',
          src: '/assets/images/cases/porto2.jpg',
          alt: 'alt',
        },
      },
    ],
  },
];
