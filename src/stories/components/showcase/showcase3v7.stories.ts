import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CORE_CONFIG } from '@core/token/core.config';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from '../../../app/uiux/widgets/widgets.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ShareModule } from '../../../app/share/share.module';
import { Showcase3v7Component } from '@uiux/combs/showcase/showcase3v7/showcase3v7.component';
import { API_URL, apiUrlFactory } from '@core/token/token-providers';
export default {
  title: '组件/showcase/3v7',
  component: Showcase3v7Component,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        WidgetsModule,
        ShareModule,
        HttpClientModule,
        NgxWebstorageModule.forRoot(),
      ],
      providers: [
        {
          provide: CORE_CONFIG,
          useValue: {},
        },
        {
          provide: API_URL,
          useFactory: apiUrlFactory,
          deps: [],
        },
      ],
    }),
    componentWrapperDecorator((story) => `${story}`),
  ],
} as Meta;

const Template: Story<Showcase3v7Component> = (args) => ({
  component: Showcase3v7Component,
  props: {
    ...args,
  },
});
export const Default = Template.bind({});

Default.args = {
  content: {
    id: '',
    title: {
      type: 'text',
      spacer: 'sm',
      title: {
        label: 'App Features',
        style: 'style-v1',
      },
      body: '<p class="text-center">Start working with xinshi that can provide everything you need to generate awareness, drive traffic, connect.</p>',
    },
    bg: {
      classes: 'bg-shadow bg-fill-width',
    },
    img: {
      src: '/assets/images/illustration/27.png',
      alt: 'OUR FEATURES',
    },
    left: [
      {
        icon: {
          name: 'verified_user',
        },
        style: 'style-v10',
        title: {
          href: '#',
          label: 'Use On Any Device',
        },
        content:
          'Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.',
      },
      {
        icon: {
          name: 'fingerprint',
        },
        style: 'style-v10',
        title: {
          href: '#',
          label: 'Feather Icons',
        },
        content:
          'There are many variations of demo text passed sages of Lorem Ipsum available the majority.',
      },
      {
        icon: {
          name: 'favorite',
        },
        style: 'style-v10',
        title: {
          href: '#',
          label: 'Fully Responsive',
        },
        content:
          'Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
      },
    ],
    right: [
      {
        icon: {
          name: 'favorite',
        },
        style: 'style-v8',
        title: {
          href: '#',
          label: 'Retina Ready',
        },
        content:
          'Drupal 已经超越了传统的 Web概念，可以通过不同的渠道部署你的数据内容，从一个数据中心点到各个应用，从简单到复杂。',
      },
      {
        icon: {
          name: 'android',
        },
        style: 'style-v8',
        title: {
          href: '#',
          label: 'W3c Valid Code',
        },
        content:
          'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. ',
      },
      {
        icon: {
          name: 'android',
        },
        style: 'style-v8',
        title: {
          href: '#',
          label: 'Browser Compatibility',
        },
        content:
          'Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.',
      },
    ],
  },
};
