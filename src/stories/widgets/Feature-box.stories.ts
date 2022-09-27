import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { SafeHtmlPipe } from '../../app/core/pipe/safe-html.pipe';
import { CORE_CONFIG } from '../../app/core/token/core.config';
import { ShareModule } from '../../app/share/share.module';
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { FeatureBoxComponent } from '../../app/uiux/widgets/feature-box/feature-box.component';
import { WidgetsModule } from '../../app/uiux/widgets/widgets.module';
export default {
  title: '基础/功能盒子',
  component: FeatureBoxComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        ShareModule,
        WidgetsModule,
        BrowserAnimationsModule,
        RouterTestingModule,
      ],
      providers: [
        SafeHtmlPipe,
        {
          provide: CORE_CONFIG,
          useValue: {},
        },
      ],
    }),
    componentWrapperDecorator(
      (story) => `<div style="width:33%">${story}</div>`
    ),
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
    fullIcon: 'fullscreen',
    openIcon: 'open_in_new',
    link: '#',
    ratios: 'media-4-3',
    img: {
      classes: 'object-fit',
      src: '/assets/images/cases/porto1.jpg',
      alt: 'alt',
    },
  },
};

export const HoverIcon = Template.bind({});
HoverIcon.storyName = 'Icon 经过';
HoverIcon.args = {
  content: {
    ...Default.args.content,
    hoverIcon: true,
  },
};

export const Float = Template.bind({});
Float.storyName = 'Icon 浮出';
Float.args = {
  content: {
    ...Default.args.content,
    mode: 'float',
    hoverIcon: true,
  },
};
