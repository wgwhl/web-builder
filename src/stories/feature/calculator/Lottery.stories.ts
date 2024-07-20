import {
  moduleMetadata,
  Meta,
  StoryObj,
  applicationConfig,
} from '@storybook/angular';

import { StorysModule } from '@core/module/storys.module';
import { LotteryComponent } from '@uiux/combs/calculator/lottery/lottery.component';
import { ILottery } from '@core/interface/combs/ICalculator';
import { FormGroup } from '@angular/forms';
import { importProvidersFrom } from '@angular/core';

const meta: Meta<LotteryComponent> = {
  title: '特色组件/计算器',
  id: 'lottery',
  component: LotteryComponent,
  decorators: [
    applicationConfig({
      providers: [importProvidersFrom(StorysModule.forRoot())],
    }),
    moduleMetadata({
      declarations: [...StorysModule.forEntryComponents()],
    }),
  ],
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<LotteryComponent>;
export const Default: Story = {};
const content: ILottery = {
  type: 'lottery',
  text: {
    spacer: 'md',
    title: {
      label: '红包抽奖预算计算器',
      style: 'style-v1',
    },
    classes: 'text-center',
    body: '输入指标，自动计算出预算，指导市场营销计划。',
  },
  bg: {
    classes: '',
  },
  classes: '',
  form: [
    {
      key: 'max',
      className: 'm-bottom-sm',
      fieldGroupClassName: 'grid grid-cols-12 gap-3',
      fieldGroup: [
        {
          type: 'input',
          key: 'total_money',
          defaultValue: 300,
          className: 'col-span-6',
          props: {
            label: '大额红包总预算',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 1,
            max: 10000,
            description: '最小1元，最大10000元',
          },
          validation: {
            messages: {
              min: '不能设置小于 1',
              max: '不能设置大于 10000',
            },
          },
        },
        {
          type: 'input',
          key: 'total_number',
          className: 'col-span-6',
          defaultValue: 10,
          props: {
            label: '大额红包总个数',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 1,
            max: 500,
            description: '最小1元，最大500元',
          },
          validation: {
            messages: {
              min: '不能设置小于 1',
              max: '不能设置大于 500',
            },
          },
        },
      ],
    },
    {
      key: 'min',
      className: 'm-bottom-sm m-top-sm',
      fieldGroupClassName: 'grid grid-cols-12 gap-3',
      fieldGroup: [
        {
          type: 'input',
          key: 'total_money',
          defaultValue: 500,
          className: 'col-span-6',
          props: {
            label: '小额红包总预算',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 1,
            max: 10000,
            description: '最小1元，最大10000元',
          },
          validation: {
            messages: {
              min: '不能设置小于 1',
              max: '不能设置大于 10000',
            },
          },
        },
        {
          type: 'input',
          key: 'total_number',
          className: 'col-span-6',
          defaultValue: 1,
          props: {
            label: '小额红包总个数',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 1,
            max: 500,
            description: '最小1次，最大500次',
          },
          validation: {
            messages: {
              min: '不能设置小于 1',
              max: '不能设置大于 500',
            },
          },
        },
        {
          type: 'input',
          key: 'per_max',
          defaultValue: 1,
          className: 'col-span-6 mt-3',
          props: {
            label: '小额红包单次最大额',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 0.3,
            max: 200,
            description: '最小1元，最大200元',
          },
          validation: {
            messages: {
              min: '不能设置小于 1',
              max: '不能设置大于 200',
            },
          },
        },
        {
          type: 'input',
          key: 'per_min',
          defaultValue: 0.3,
          className: 'col-span-6 mt-3',
          props: {
            label: '小额红包单次最小额',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 0.3,
            max: 10,
            description: '最小0.3元，最大10元',
          },
          validation: {
            messages: {
              min: '不能设置小于 0.3',
              max: '不能设置大于 10',
            },
          },
        },
      ],
    },
    {
      key: 'isPromote',
      type: 'toggle',
      className: 'm-bottom',
      props: {
        label: '开启推广提成',
        description: '超过推广次数则推广结束',
      },
    },
    {
      key: 'promote',
      fieldGroupClassName: 'grid grid-cols-12 gap-3',
      fieldGroup: [
        {
          type: 'select',
          key: 'type',
          defaultValue: 'fixed',
          className: 'col-span-6',
          props: {
            label: '选择提成方式',
            description: '固定金额或者按比例',
            options: [
              {
                label: '固定金额',
                value: 'fixed',
              },
              {
                label: '比例',
                value: 'percent',
              },
            ],
          },
        },
        {
          type: 'input',
          key: 'fixed',
          defaultValue: 2,
          className: 'col-span-6',
          props: {
            label: '每次推广可得金额/元',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 0.3,
            max: 100,
            description: '推广员推广一次固定的提成金额',
          },
          validation: {
            messages: {
              min: '不能设置小于 0.3',
              max: '不能设置大于 100',
            },
          },
          hideExpression: 'model.type=="percent"',
        },
        {
          type: 'input',
          key: 'percent',
          defaultValue: 80,
          className: 'col-span-6',
          props: {
            label: '每次推广可得比例%',
            appearance: 'outline',
            type: 'number',
            required: true,
            min: 1,
            max: 500,
            description: '最小 1% 到 最大500%',
          },
          hideExpression: 'model.type=="fixed"',
        },
      ],
    },
  ],
  data: {
    toggle: [
      {
        label: '饼图',
        icon: {
          name: 'pie_chart',
          inline: true,
        },
        value: 'pie',
      },
      {
        label: '柱状图',
        icon: {
          name: 'equalizer',
          inline: true,
        },
        value: 'bar',
      },
      {
        label: '折线图',
        icon: {
          name: 'show_chart',
          inline: true,
        },
        value: 'line',
      },
    ],
  },
  chart: {
    color: ['#0071a2', '#00A281', '#8200a2'],
    tooltip: {
      trigger: 'item',
    },
    legend: {
      bottom: '0',
    },
    xAxis: {
      type: 'category',
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        name: '预算占比',
        type: 'pie',
        radius: '50%',
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  },
  description:
    '<ul class="list-done"><li>总金额 = 红包总金额（大额+小额）+ 推广金额</li></ul>',
};
Default.args = {
  content,
  form: new FormGroup({}),
  model: {},
};
