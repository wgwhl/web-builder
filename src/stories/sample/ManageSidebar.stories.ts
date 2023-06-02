import {
  moduleMetadata,
  Meta,
  componentWrapperDecorator,
} from '@storybook/angular';
import { Story } from '@storybook/angular/types-6-0';
import { BlockComponent } from '@uiux/combs/block/block/block.component';
import { BlockModule } from '@uiux/combs/block/block.module';
import { StorysModule } from '@core/module/storys.module';
import { BrandingModule } from '@core/branding/branding.module';
import { BRANDING } from '@core/token/token-providers';
import brandingSidebar from '@assets/app/core/branding-sidebar.json';
import { of } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NodeModule } from '@uiux/combs/node/node.module';

export default {
  title: '示例页面/中台管理/管理边栏',
  id: 'manage-sidebar',
  component: BlockComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      entryComponents: [...StorysModule.forEntryComponents()],
      imports: [
        MatSidenavModule,
        BlockModule,
        NodeModule,
        BrandingModule,
        StorysModule.forRoot(),
      ],
      providers: [
        {
          provide: BRANDING,
          useValue: of(brandingSidebar),
        },
      ],
    }),
    componentWrapperDecorator(
      (story) => `
    <mat-drawer-container>
      <mat-drawer id="sidebar" mode="side" class="sidebar">
        <app-manage-sidebar></app-manage-sidebar>
      </mat-drawer>
      <mat-drawer-content id="main-container">
        <app-header></app-header>
        <div class="main has-manage-sidebar">
              ${story}
        </div>
      </mat-drawer-content>
    </mat-drawer-container>
    `
    ),
  ],
  parameters: {
    docs: {
      description: {
        component: ``,
      },
    },
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story = (args) => ({
  props: {
    ...args,
  },
});
export const Page = Template.bind({});
// Raname Story
Page.storyName = '管理边栏';
const content = of({
  title: 'Angular SSR 服务端渲染技术',
  config: {
    node: {
      uuid: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
    },
  },
  body: [
    {
      type: 'law-case',
      title: 'Angular SSR 服务端渲染技术',
      date: [
        {
          label: '更新',
          value: '张三 周五 09:50 2022/03/31',
        },
        {
          label: '提交',
          value: '李四 周六 08:10 2022/03/27',
        },
      ],
      actions: [
        {
          type: 'btn',
          label: '编辑',
          icon: {
            name: 'editor',
            inline: true,
          },
          href: '#',
          target: '_blank',
        },
        {
          type: 'flag',
          label: '收藏',
          icon: {
            name: 'star',
            inline: true,
          },
          params: {
            type: 'flagging--favorite',
            entity_type: 'node',
            entity_id: '1312',
            relationships: {
              flagged_entity: {
                type: 'node--case',
                id: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
              },
            },
          },
        },
      ],
      form: [
        {
          type: 'select',
          key: 'transaction_level',
          value: 'general',
        },
        {
          type: 'select',
          key: 'case_procedure',
          value: '10',
        },
      ],
      block: [
        {
          type: 'showcase',
          elements: [
            {
              header: [
                {
                  label: '客户标签',
                  key: 'customer',
                },
                {
                  label: '内容',
                  key: 'contentOfCustomer',
                },
                {
                  label: '法院标签',
                  key: 'court',
                },
                {
                  label: '内容',
                  key: 'contentOfCourt',
                },
              ],
              elements: [
                {
                  customer: '客户名称',
                  contentOfCustomer: {
                    type: 'link',
                    label: '三字柒有限公司',
                    href: '/node/3',
                  },
                  court: '法院名称',
                  contentOfCourt: {
                    type: 'link',
                    label: '人民法院',
                    href: '/node/3',
                  },
                },
                {
                  customer: '经办人员',
                  contentOfCustomer: {
                    type: 'link',
                    label: '张三',
                    href: '/node/4',
                  },
                  court: '法官名称',
                  contentOfCourt: {
                    type: 'link',
                    label: '张三',
                    href: '/node/4',
                  },
                },
                {
                  customer: '业务对方',
                  contentOfCustomer: [
                    {
                      type: 'link',
                      label: '南宁一建',
                      href: '/node/6',
                    },
                    {
                      type: 'link',
                      label: '南宁一建',
                      href: '/node/6',
                    },
                  ],
                  court: '法官电话',
                  contentOfCourt: '0771-1234567',
                },
                {
                  customer: '案件类型',
                  contentOfCustomer: '诉讼',
                  court: '案件阶段',
                  contentOfCourt: {
                    type: 'select',
                    key: 'case_procedure',
                    options: [
                      {
                        label: '一审上诉完成',
                        value: '10',
                      },
                      {
                        label: '二审上诉完成',
                        value: '11',
                      },
                    ],
                  },
                },
                {
                  customer: '经办律师',
                  contentOfCustomer: 'Johnson',
                  court: '案件编号',
                  contentOfCourt: 'NO.57896',
                },
                {
                  customer: '优先等级',
                  contentOfCustomer: {
                    type: 'select',
                    key: 'transaction_level',
                    options: [
                      {
                        label: '普通事务',
                        value: 'general',
                      },
                      {
                        label: '重大事务',
                        value: 'important',
                      },
                      {
                        label: '紧急事务',
                        value: 'exigence',
                      },
                    ],
                  },
                  court: '开庭日期',
                  contentOfCourt: '周五 22:59 03/04/2022',
                },
              ],
            },
          ],
        },
        {
          type: 'files',
          title: {
            label: '案件文件',
            style: 'style-v4',
          },
          elements: [
            {
              label: '律师文件',
              elements: [
                {
                  elements: [
                    {
                      type: 'link',
                      label: '第二次起诉签字.docx',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'stroked',
                      label: 'PDF',
                      color: 'warn',
                      classes: 'border-primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '第二次起诉签字.docx',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'stroked',
                      label: 'PDF',
                      color: 'warn',
                      classes: 'border-warn',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '第二次起诉签字.docx',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'stroked',
                      label: 'PDF',
                      color: 'warn',
                      classes: 'border-accent',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '第二次起诉签字.docx',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '第二次起诉签字.docx',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
              ],
            },
            {
              label: '法院文件',
              elements: [
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
              ],
            },
            {
              label: '客户文件',
              elements: [
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
              ],
            },
            {
              label: '其他文件',
              elements: [
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                      target: '_blank',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                      target: '_blank',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                      target: '_blank',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                      target: '_blank',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                      target: '_blank',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                      target: '_blank',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
                {
                  elements: [
                    {
                      type: 'link',
                      label: '法院判决书',
                      href: 'xxx.docx',
                      classes: 'file one-line',
                    },
                    {
                      type: 'btn',
                      href: '#',
                      mode: 'raised',
                      label: '预览',
                      color: 'primary',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'table',
          title: {
            label: '发票管理',
            style: 'style-v4',
          },
          header: [
            {
              label: '发票名称',
              key: 'name',
            },
            {
              label: '开票金额',
              key: 'money',
            },
            {
              label: '交票时间',
              key: 'billingTime',
            },
            {
              label: '发票时间',
              key: 'deliveryTime',
            },
            {
              label: '备注',
              key: 'remarks',
            },
          ],
          elements: [
            {
              name: '受理费',
              money: '3679',
              billingTime: '2022-03-03',
              deliveryTime: '2022-03-04',
              remarks: '已收到',
              expand: [
                {
                  type: 'inline-lightbox',
                  label: ['受理费第一次', '受理费-补交', '受理费第二次'],
                  elements: [
                    {
                      src: '/assets/images/cases/porto1.jpg',
                      caption: '受理费第一次',
                      thumb: '/assets/images/cases/porto1.jpg',
                    },
                    {
                      src: '/assets/images/cases/porto2.jpg',
                      caption: '受理费-补交',
                      thumb: '/assets/images/cases/porto2.jpg',
                    },
                    {
                      src: '/assets/images/cases/porto3.jpg',
                      caption: '受理费第二次',
                      thumb: '/assets/images/cases/porto3.jpg',
                    },
                  ],
                },
                {
                  label: ['发票凭证'],
                  type: 'inline-lightbox',
                  elements: [
                    {
                      src: '/assets/images/cases/porto4.jpg',
                      caption: '发票凭证',
                      thumb: '/assets/images/cases/porto4.jpg',
                    },
                  ],
                },
                {
                  type: 'inline-lightbox',
                  label: ['户籍信息'],
                  elements: [
                    {
                      src: '/assets/images/cases/porto5.jpg',
                      caption: '户籍信息',
                      thumb: '/assets/images/cases/porto5.jpg',
                    },
                  ],
                },
              ],
            },
            {
              name: '受理费',
              money: '3679',
              billingTime: '2022-03-03',
              deliveryTime: '2022-03-04',
              remarks: '已收到',
              expand: [
                {
                  type: 'inline-lightbox',
                  label: ['受理费第一次', '受理费-补交', '受理费第二次'],
                  elements: [
                    {
                      src: '/assets/images/cases/porto1.jpg',
                      caption: '受理费第一次',
                      thumb: '/assets/images/cases/porto1.jpg',
                    },
                    {
                      src: '/assets/images/cases/porto2.jpg',
                      caption: '受理费-补交',
                      thumb: '/assets/images/cases/porto2.jpg',
                    },
                    {
                      src: '/assets/images/cases/porto3.jpg',
                      caption: '受理费第二次',
                      thumb: '/assets/images/cases/porto3.jpg',
                    },
                  ],
                },
                {
                  label: ['发票凭证'],
                  type: 'inline-lightbox',
                  elements: [
                    {
                      src: '/assets/images/cases/porto4.jpg',
                      caption: '发票凭证',
                      thumb: '/assets/images/cases/porto4.jpg',
                    },
                  ],
                },
                {
                  type: 'inline-lightbox',
                  label: ['户籍信息'],
                  elements: [
                    {
                      src: '/assets/images/cases/porto5.jpg',
                      caption: '户籍信息',
                      thumb: '/assets/images/cases/porto5.jpg',
                    },
                  ],
                },
              ],
            },
            {
              name: '受理费',
              money: '3679',
              billingTime: '2022-03-03',
              deliveryTime: '2022-03-04',
              remarks: '已收到',
              expand: [
                {
                  type: 'inline-lightbox',
                  label: ['受理费第一次', '受理费-补交', '受理费第二次'],
                  elements: [
                    {
                      src: '/assets/images/cases/porto1.jpg',
                      caption: '受理费第一次',
                      thumb: '/assets/images/cases/porto1.jpg',
                    },
                    {
                      src: '/assets/images/cases/porto2.jpg',
                      caption: '受理费-补交',
                      thumb: '/assets/images/cases/porto2.jpg',
                    },
                    {
                      src: '/assets/images/cases/porto3.jpg',
                      caption: '受理费第二次',
                      thumb: '/assets/images/cases/porto3.jpg',
                    },
                  ],
                },
                {
                  label: ['发票凭证'],
                  type: 'inline-lightbox',
                  elements: [
                    {
                      src: '/assets/images/cases/porto4.jpg',
                      caption: '发票凭证',
                      thumb: '/assets/images/cases/porto4.jpg',
                    },
                  ],
                },
                {
                  type: 'inline-lightbox',
                  label: ['户籍信息'],
                  elements: [
                    {
                      src: '/assets/images/cases/porto5.jpg',
                      caption: '户籍信息',
                      thumb: '/assets/images/cases/porto5.jpg',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          type: 'table',
          title: {
            label: '诉讼金额',
            style: 'style-v4',
          },
          header: [
            {
              label: '诉讼标的',
              key: 'name',
            },
            {
              label: '本金',
              key: 'principal',
            },
            {
              label: '利息期间',
              key: 'InterestPeriod',
            },
            {
              label: '利息',
              key: 'interest',
            },
            {
              label: '违约期间',
              key: 'defaultPeriod',
            },
            {
              label: '违约金',
              key: 'damages',
            },
            {
              label: '分项合计',
              key: 'total',
            },
          ],
          elements: [
            {
              name: '租金',
              principal: '12323.00元',
              InterestPeriod: '2022/03/05-2022/05/01',
              interest: '5000.00元',
              defaultPeriod: '2022/03/05-2022/05/01',
              damages: '5089.00元',
              total: '4846.00元',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '其他本金',
                    style: 'style-v4',
                  },
                  body: '律师费 2000.00元<br>担保费 5000.00元</br>赔偿金 55.00元',
                },
              ],
            },
            {
              name: '工程款',
              principal: '12323.00元',
              InterestPeriod: '2022/03/05-2022/05/01',
              interest: '5000.00元',
              defaultPeriod: '',
              damages: '',
              total: '4845.00元',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '其他本金',
                    style: 'style-v4',
                  },
                  body: '律师费 2000.00元<br>担保费 5000.00元</br>赔偿金 55.00元',
                },
              ],
            },
            {
              name: '劳务费',
              principal: '12323.00元',
              InterestPeriod: '2022/03/05-2022/05/01',
              interest: '5000.00元',
              defaultPeriod: '',
              damages: '',
              total: '4845.00元',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '其他本金',
                    style: 'style-v4',
                  },
                  body: '律师费 2000.00元<br>担保费 5000.00元</br>赔偿金 55.00元',
                },
              ],
            },
            {
              name: '合计',
              principal: '68751.00元',
              InterestPeriod: '',
              interest: '9000.00元',
              defaultPeriod: '',
              damages: '8455.00元',
              total: '48456.00元',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '其他本金',
                    style: 'style-v4',
                  },
                  body: '律师费 2000.00元<br>担保费 5000.00元</br>赔偿金 55.00元',
                },
              ],
            },
          ],
        },
        {
          type: 'table',
          title: {
            label: '案件执行',
            style: 'style-v4',
          },
          header: [
            {
              label: '还款次数',
              key: 'no',
            },
            {
              label: '执行款',
              key: 'paymentOne',
            },
            {
              label: '执行款二',
              key: 'paymentTwo',
            },
            {
              label: '执行款二',
              key: 'paymentThree',
            },
            {
              label: '利息',
              key: 'interest',
            },
            {
              label: '总合计',
              key: 'total',
            },
            {
              label: '还款日期',
              key: 'date',
            },
          ],
          elements: [
            {
              no: '1',
              paymentOne: '12000.00元',
              paymentTwo: '13000.00元',
              paymentThree: '13520.00元',
              interest:
                '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
              total: '17658.00元',
              date: '2022/03/06',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '违约金',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '逾期罚息',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
              ],
            },
            {
              no: '2',
              paymentOne: '12000.00元',
              paymentTwo: '13000.00元',
              paymentThree: '13520.00元',
              interest:
                '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
              total: '17658.00元',
              date: '2022/03/06',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '违约金',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '逾期罚息',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
              ],
            },
            {
              no: '3',
              paymentOne: '12000.00元',
              paymentTwo: '13000.00元',
              paymentThree: '13520.00元',
              interest:
                '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
              total: '17658.00元',
              date: '2022/03/06',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '违约金',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '逾期罚息',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
              ],
            },
            {
              no: '合计',
              paymentOne: '32000.00元',
              paymentTwo: '33000.00元',
              paymentThree: '33520.00元',
              interest:
                '8000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
              total: '57658.00元',
              date: '',
              expand: [
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '违约金',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
                {
                  type: 'text',
                  spacer: 'none',
                  title: {
                    label: '逾期罚息',
                    style: 'style-v4',
                  },
                  body: '5000.00元<br><span class="sub">2022/02/01-2023/01/03</span>',
                },
              ],
            },
          ],
        },
        {
          type: 'text',
          title: {
            label: '案件说明',
            style: 'style-v4',
          },
          spacer: 'none',
          body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        },
      ],
      params: {
        comment: {
          type: 'comment--comment',
          attributes: {
            entity_type: 'node',
            field_name: 'comment',
          },
          relationships: {
            comment_type: {
              data: {
                type: 'comment_type--comment_type',
                id: 'a395ac8e-3c9a-43d5-8ec8-cea74116d5f3',
              },
            },
            entity_id: {
              data: {
                type: 'node--article',
                id: 'b59a2767-89b8-418d-91fe-6f0e6a5638ec',
              },
            },
          },
        },
      },
      editor: {
        title: {
          label: '添加工作跟踪',
          style: 'style-v4',
        },
        action: {
          label: '提交',
        },
        succes: {
          label: '成功发布！',
        },
        empty: {
          label: '暂时还没有工作日志。',
        },
      },
      comment: {
        actions: ['update', 'delete', 'reply', 'quote'],
        title: true,
      },
    },
  ],
});
Page.args = {
  pageContent$: content,
};
