import {
  moduleMetadata,
  Meta,
  StoryObj,
  applicationConfig,
} from '@storybook/angular';

import { TextHeroComponent } from '@uiux/widgets/text-hero/text-hero.component';
import { StorysModule } from '@core/module/storys.module';
import { ITextHero } from '@core/interface/widgets/IText';
import { importProvidersFrom } from '@angular/core';

const meta: Meta<TextHeroComponent> = {
  title: '基本元素/首屏内容',
  id: 'text-hero',
  component: TextHeroComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(StorysModule.forRoot())],
    }),
    moduleMetadata({
      declarations: [...StorysModule.forEntryComponents()],
    }),
  ],
};

export default meta;
type Story = StoryObj<TextHeroComponent>;
export const Default: Story = {};
const content: ITextHero = {
  type: 'text-hero',
  theme: 'text-light',
  params: {
    height: '750px',
  },
  text: {
    title: {
      label: '为所有开发者、所有应用场景而设计',
      style: 'style-v4',
      classes: 'mat-display-2 bold',
    },
    classes: 'y-center',
    style: [],
    bg: {
      classes: '',
      img: {
        src: '/assets/images/16-9/nature-08.jpg',
        hostClasses: '',
      },
    },
    body: '<p>Storybook是一个面向UI组件开发的工具，它提供了组件驱动的开发方式、交互式展示和测试界面，以及文档化功能。它的目标是提高开发效率、组件质量和团队协作，是一个广泛应用于前端开发的工具。</p>',
    actionsAlign: 'start center',
    actions: [
      {
        type: 'btn',
        mode: 'raised',
        color: 'primary',
        href: '',
        label: '了解更多',
      },
    ],
  },
};
Default.args = {
  content,
};
