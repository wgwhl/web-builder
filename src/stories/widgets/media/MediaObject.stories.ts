import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { HttpClientModule } from '@angular/common/http';
import { LocalStorageService, NgxWebstorageModule } from 'ngx-webstorage';
import { SafeHtmlPipe } from '@core/pipe/safe-html.pipe';
import { API_URL, CORE_CONFIG, USER } from '@core/token/token-providers';
import { ShareModule } from '@share/share.module';
import { MediaObjectComponent } from '@uiux/widgets/media/media-object/media-object.component';
import { WidgetsModule } from '@uiux/widgets/widgets.module';
import { apiUrlFactory, userFactory } from '@core/factory/factory';
import { CryptoJSService } from '@core/service/crypto-js.service';
import { UserService } from '@core/service/user.service';

export default {
  title: '基础/媒体/媒体对象',
  id: 'media-object',
  component: MediaObjectComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        ShareModule,
        WidgetsModule,
        RouterTestingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        NgxWebstorageModule.forRoot(),
      ],
      providers: [
        SafeHtmlPipe,
        {
          provide: CORE_CONFIG,
          useValue: {},
        },
        {
          provide: API_URL,
          useFactory: apiUrlFactory,
          deps: [],
        },
        {
          provide: USER,
          useFactory: userFactory,
          deps: [LocalStorageService, CryptoJSService, UserService],
        },
      ],
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

Base.args = {
  content: {
    img: {
      src: '/assets/images/logo/codepen.svg',
      style: {
        width: '45px',
        height: '45px',
      },
      alt: 'logo',
    },
    meta: '2017-08',
    title: '前端开发工程师',
    subTitle: '字节跳动',
    content:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
  },
};
