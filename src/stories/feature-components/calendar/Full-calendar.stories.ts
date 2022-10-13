import { moduleMetadata, Meta } from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { FullCalendarComponent } from '@uiux/combs/calendar/full-calendar/full-calendar.component';
import { StorysModule } from '@core/storys.module';

export default {
  title: '特色组件/日历/Full calendar',
  id: 'full-calendar',
  component: FullCalendarComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [StorysModule.forRoot()],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: `把数据映射到日历上，根据搜索条件显示日历内容。`,
      },
    },
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Default = Template.bind({});

Default.args = {
  content: {
    sidebar: [
      {
        type: 'text',
        title: {
          label: '筛选',
          style: 'style-v4',
          classes: 'm-bottom-xs',
        },
        spacer: 'sm',
      },
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
            label: '案件',
            value: 'case',
          },
          {
            label: '会议',
            value: 'meeting',
          },
          {
            label: '项目',
            value: 'project',
          },
        ],
      },
      {
        type: 'select',
        key: 'changed',
        mutiple: false,
        label: '最新更新',
        options: [
          {
            label: '案件',
            value: 'case',
          },
          {
            label: '会议管理',
            value: 'meeting',
          },
          {
            label: '项目管理',
            value: 'project',
          },
          {
            label: '资料文库',
            value: 'doc_lib',
          },
        ],
      },
      {
        type: 'datepicker',
        label: '日历',
        hint: 'MM/DD/YYYY – MM/DD/YYYY',
        key: 'datepicker',
        'key-': '固定值',
        value: '',
        inline: true,
        placeholder: '请选择日期',
        params: {
          required: true,
        },
      },
    ],
    calendar: {
      options: {
        events: [
          {
            title: 'Angular 分享',
            event: 'meeting',
            start: new Date(),
            user: 'Johnson',
            className: 'bg-primary',
          },
          {
            title: 'Drupal 分享',
            event: 'drupal',
            start: new Date(),
            user: 'Johnson',
            className: 'bg-warn',
          },
        ],
      },
      theme: {
        meeting: 'bg-warn',
        case: 'bg-primary',
        project: 'bg-accent',
        event: 'bg-red',
      },
    },
  },
};
