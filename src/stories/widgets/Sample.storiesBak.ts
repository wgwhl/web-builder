import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { TextComponent } from '@uiux/widgets/text/text.component';
import { TitleComponent } from '@uiux/widgets/title/title.component';
import { StorysModule } from '@core/storys.module';

export default {
  title: '基础组件/Sample',
  id: 'sample',
  component: TextComponent,
  subcomponents: { TitleComponent },
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [NgxWebstorageModule.forRoot(), StorysModule.forRoot()],
    }),
    componentWrapperDecorator((story) => `${story}`),
  ],
  parameters: {
    docs: {
      description: {
        component: `对组件的介绍描述`,
      },
    },
  },
  argTypes: {
    content: {
      description: '字段描述',
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Default = Template.bind({});
// Raname Story
Default.storyName = '预览';
Default.args = {
  content: {
    type: 'view-list',
    spacer: 'none',
    params: {
      apiType: 'tab/meeting',
    },
    header: [
      {
        label: '创建时间',
        key: 'business_date',
      },
      {
        label: '会议标题',
        key: 'title',
      },
      {
        label: '客户名称',
        key: 'customer',
      },
      {
        label: '客户部门',
        key: 'handler_dept',
      },
      {
        label: '经办人员',
        key: 'handler',
      },
      {
        label: '会议主题',
        key: 'theme',
        style: {
          color: '#cc9933',
        },
      },
      {
        label: '会议时间',
        key: 'date_time_range',
      },
      {
        label: '会议地址',
        key: 'meeting_address_address_line1',
      },
      {
        label: '参会人员',
        key: 'participant',
      },
      {
        label: '会议内容',
        key: 'meeting_minutes',
        dialog: {
          shorten: 12,
          label: '⋮',
        },
      },
      {
        label: '文件清单',
        key: 'case_files',
      },
      {
        label: '工作工时',
        key: 'man_hour',
      },
      {
        label: '律师',
        key: 'uid',
      },
    ],
    form: [
      {
        type: 'input',
        key: 'title',
        templateOptions: {
          label: '标题',
        },
      },
      {
        type: 'mat-select',
        key: 'customer',
        api: '/api/v1/filter/customer',
        templateOptions: {
          multiple: true,
          search: true,
          hideSelected: true,
          label: '客户名称',
        },
      },
      {
        type: 'mat-select',
        key: 'handler',
        api: '/api/v1/filter/handler',
        templateOptions: {
          multiple: true,
          hideSelected: true,
          label: '经办人员',
        },
      },
      {
        type: 'mat-select',
        key: 'handler',
        api: '/api/v1/filter/handler',
        templateOptions: {
          multiple: false,
          hideSelected: true,
          label: '经办人员',
        },
      },
      {
        type: 'mat-select',
        key: 'handler',
        api: '/api/v1/filter/handler',
        templateOptions: {
          multiple: false,
          search: true,
          hideSelected: true,
          label: '经办人员',
        },
      },
      {
        type: 'date-range',
        key: 'date',
        templateOptions: {
          label: '期间',
          value: '',
          placeholder: '请选择日期',
        },
        fieldGroup: [
          {
            type: 'input',
            key: 'start',
            placeholder: '开始',
          },
          {
            type: 'input',
            key: 'end',
            placeholder: '结束',
          },
        ],
      },
      {
        type: 'input',
        key: 'page',
        className: 'display-none',
        templateOptions: {
          label: '页码',
        },
      },
    ],
  },
};
