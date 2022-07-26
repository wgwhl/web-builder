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
import { ArticleComponent } from '@uiux/combs/node/article/article.component';
import { OtherModule } from '@uiux/combs/other/other.module';
import { NotfoundComponent } from '@uiux/combs/other/notfound/notfound.component';
export default {
  title: 'Components/node/404',
  component: NotfoundComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        WidgetsModule,
        ShareModule,
        OtherModule,
        HttpClientModule,
        NgxWebstorageModule.forRoot(),
      ],
      providers: [
        {
          provide: CORE_CONFIG,
          useValue: {},
        },
      ],
    }),
    componentWrapperDecorator((story) => `${story}`),
  ],
} as Meta;

const Template: Story<NotfoundComponent> = (args) => ({
  component: NotfoundComponent,
  props: {
    ...args,
  },
});
export const Default = Template.bind({});

Default.args = {
  content: {
    img: {
      src: '/assets/images/404.svg',
      alt: '404 not found!',
    },
    text: {
      spacer: 'none',
      title: {
        label: 'OH!NO <br>Page Not Found',
        style: 'style-v1',
        classes: 'mat-display-1',
      },
      body: 'Xinshi is base on angular,use material theme and drupal jsonapi.',
    },
    actions: [
      {
        label: 'Go Back',
        href: '/',
        style: 'style-v1',
        icon: 'open_in_new',
      },
      {
        label: 'Go To Home',
        href: '/',
        style: 'style-v1',
        icon: 'open_in_new',
      },
    ],
  },
};
