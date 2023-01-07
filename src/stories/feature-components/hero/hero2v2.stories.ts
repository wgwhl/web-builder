import { moduleMetadata, Meta } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { Hero2v2Component } from '@uiux/combs/hero/hero2v2/hero2v2.component';
import { StorysModule } from '@core/module/storys.module';

export default {
  title: '特色组件/英雄区/2v2',
  id: 'hero-2v2',
  component: Hero2v2Component,
  decorators: [
    moduleMetadata({
      declarations: [],
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
    spacer: 'lg',
    id: 'xxx',
    bg: {
      classes: 'bg-center overlay',
      img: {
        hostClasses: 'bg-center',
        src: '/assets/images/16-9/business-16.jpeg',
      },
    },
    body: {
      type: 'text',
      title: {
        label: '开源项目使用 Github actions 自动化',
        style: 'style-v4',
        classes: 'mat-display-1',
      },
      body: '<p>Github actions 从2019年就免费开放给个人开源项目使用，对于自动化开放测试部署，开发者一定非常的熟悉，如果把中间这项流程做好，不仅节省了大量的人力也大大加快了开发效率，在配置完善的情况下可以提高代码质量。</p>',
      actions: [
        {
          type: 'btn',
          mode: 'raised',
          color: 'primary',
          href: '#',
          label: '了解更多',
          icon: {
            name: 'chat',
            inline: true,
          },
        },
      ],
    },
  },
};
