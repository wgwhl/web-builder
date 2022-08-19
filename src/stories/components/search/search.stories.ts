import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { moduleMetadata, Meta } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { CORE_CONFIG } from '@core/token/core.config';
import { HttpClientModule } from '@angular/common/http';
import { WidgetsModule } from '../../../app/uiux/widgets/widgets.module';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { ShareModule } from '../../../app/share/share.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { AmapService } from '../../../app/core/service/amap.service';
import { SearchComponent } from '../../../app/uiux/combs/search/search.component';
import { SearchModule } from '@uiux/combs/search/search.module';
export default {
  title: 'Components/search/defualt',
  component: SearchComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        WidgetsModule,
        ShareModule,
        SwiperModule,
        SearchModule,
        HttpClientModule,
        NgxWebstorageModule.forRoot(),
      ],
      providers: [
        AmapService,
        {
          provide: CORE_CONFIG,
          useValue: {},
        },
      ],
    }),
  ],
} as Meta;

const Template: Story<SearchComponent> = (args) => ({
  component: SearchComponent,
  props: {
    ...args,
  },
});
export const Default = Template.bind({});

Default.args = {
  content: {
    type: 'search',
    header: {
      bg: {
        classes: 'bg-shadow overlay overlay-80',
        img: {
          hostClasses: 'bg-center',
          src: '/assets/images/hero/1-6.jpg',
          mobile: '/assets/images/mobile/mobile-03.jpg',
        },
      },
      text: {
        title: {
          label: '信使搜索',
          style: 'style-v1',
          classes: 'mat-display-1  text-light',
        },
        spacer: 'xl',
        'style-': {
          width: '50%',
          left: '0%',
          top: '5%',
        },
        body: '<p class="text-center text-light">这里有你想要的答案。</p>',
      },
      input: {
        placeholder: '请输入你的关键词',
      },
    },
    label: {
      clear: '清空',
      filter: '过滤条件',
    },
    sidebar: [
      {
        appearance: 'legacy',
        controlType: 'search',
        key: 'keys',
        label: '关键词',
        type: 'input',
      },
      {
        type: 'select',
        key: 'type',
        mutiple: false,
        label: '内容来源',
        options: [
          {
            label: '无',
            value: null,
          },
          {
            label: '文章',
            value: 'article',
          },
          {
            label: '律所',
            value: 'law_firm',
          },
          {
            label: '律师',
            value: 'lawyer',
          },
          {
            label: '法规库',
            value: 'law',
          },
          {
            label: '活动',
            value: 'event',
          },
          {
            label: '问答',
            value: 'question',
          },
        ],
      },
      {
        type: 'select',
        key: 'content_category',
        label: '内容分类',
        mutiple: true,
        options: [
          {
            label: '无',
            value: null,
          },
          {
            label: '司法解释',
            value: '75',
          },
          {
            label: '政策',
            value: '78',
          },
          {
            label: '法律',
            value: '73',
          },
          {
            label: '法规',
            value: '74',
          },
          {
            label: '规章',
            value: '76',
          },
          {
            label: '规范性',
            value: '77',
          },
          {
            label: '司法解释',
            value: '422',
          },
        ],
      },
      {
        type: 'select',
        key: 'article_category',
        label: '文章分类',
        mutiple: true,
        options: [
          {
            label: '无',
            value: null,
          },
          {
            label: '法律顾问',
            value: '149',
          },
          {
            label: '金融仲裁',
            value: '148',
          },
          {
            label: '金融刑事',
            value: '145',
          },
          {
            label: '金融行政',
            value: '146',
          },
          {
            label: '金融证券',
            value: '417',
          },
          {
            label: '金融诉讼',
            value: '147',
          },
          {
            label: '金融非诉讼',
            value: '150',
          },
        ],
      },
      {
        type: 'checkbox',
        label: '文章<span>50</span>',
        key: 'article',
        value: true,
      },
      {
        type: 'checkbox',
        label: '博客<span>20</span>',
        key: 'blog',
        value: true,
      },
    ],
  },
};
