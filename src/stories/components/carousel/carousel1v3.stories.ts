import { moduleMetadata, Meta } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Carousel1v3Component } from '@uiux/combs/carousel/carousel1v3/carousel1v3.component';
import { StorysModule } from '@core/module/storys.module';

export default {
  title: '复合组件/幻灯片/1v3',
  id: 'carousel-1v3',
  component: Carousel1v3Component,
  decorators: [
    moduleMetadata({
      declarations: [],
      entryComponents: [...StorysModule.forEntryComponents()],
      imports: [StorysModule.forRoot()],
    }),
  ],
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Default = Template.bind({});

Default.args = {
  content: {
    type: 'carousel-1v3',
    spacer: 'lg',
    text: {
      spacer: 'none',
      title: {
        label: '选择Drupal的原因',
        icon: '',
        style: 'style-v1',
        classes: 'mat-display-1',
      },
      body: '<p class="text-center">Drupal是数据管理中心，提供集中的地方来访问所有平台的数据</p><br>',
    },
    classes: '',
    bg: {
      classes: 'bg-shadow',
    },
    sliders: {
      params: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        navigation: false,
        breakpoints: {
          600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          960: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },
      },
      classes: 'p-bottom',
      elements: [
        {
          type: 'box',
          img: {
            src: '/assets/images/amazon.svg',
            alt: 'browser',
          },
          style: 'style-v8',
          title: {
            href: '#',
            label: '组件编辑',
          },
          content: '通过简单的管理界面对复杂的可视化编辑',
        },
        {
          type: 'box',
          img: {
            src: '/assets/images/google.svg',
            alt: 'browser',
          },
          style: 'style-v8',
          title: {
            href: '#',
            label: '企业营销',
          },
          content: '与企业营销工具整合，实现对内容和表单的管理',
        },
        {
          type: 'box',
          img: {
            src: '/assets/images/shopify.svg',
            alt: 'browser',
          },
          style: 'style-v8',
          title: {
            href: '#',
            label: '数据收集',
          },
          content: '对数据进行收集和删除，符合政策的合规',
        },
        {
          type: 'box',
          img: {
            src: '/assets/images/paypal.svg',
            alt: 'browser',
          },
          style: 'style-v8',
          title: {
            href: '#',
            label: '简化管理',
          },
          content: '简化了内容管理和用户角色管理，易于提高服务器性能',
        },
        {
          type: 'box',
          img: {
            src: '/assets/images/amazon.svg',
            alt: 'browser',
          },
          style: 'style-v8',
          title: {
            href: '#',
            label: '存储集成',
          },
          content: '与云存储集成以实现解耦的文件管理',
        },
        {
          type: 'box',
          img: {
            src: '/assets/images/google.svg',
            alt: 'browser',
          },
          style: 'style-v8',
          title: {
            href: '#',
            label: 'API 优先',
          },
          content: 'API First 易于与外部系统集成',
        },
      ],
    },
  },
};
