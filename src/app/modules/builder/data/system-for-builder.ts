export const system: any[] = [
  {
    label: '通用',
    elements: [
      {
        label: '横幅',
        icon: {
          svg: 'page-layout-header',
        },
        content: {
          style: 'normal',
          type: 'banner-simple',
          bannerBg: {
            classes: 'bg-fill-width overlay overlay-60',
            img: {
              hostClasses: '',
              src: '/assets/images/16-9/nature-08.jpg',
              alt: 'page title',
            },
          },
          title: '横幅',
          breadcrumb: [
            {
              label: '首页',
              href: '#',
            },
            {
              label: '组件',
              href: '#',
            },
            {
              label: '横幅',
              href: '#',
            },
          ],
        },
      },
      {
        label: '文章',
        icon: {
          svg: 'translate',
        },
        content: {
          type: 'article',
          title: '使用 DevTools 对 Angular 前端应用性能分析优化',
          banner: {
            img: {
              src: '../assets/images/16-9/nature-08.jpg',
            },
          },
          meta: [
            {
              icon: 'calendar-range',
              label: '2024/02/19',
            },
            {
              icon: 'tag-outline',
              label: '前端茶馆',
            },
          ],
          body: '<p>在上一篇文章中，有个知友评论说是要 takeUntil 来管理订阅更加清晰明了，那我们就探探究竟。</p><p>在 Rxjs 中，可以使用 takeUntil 来控制另外一个 Observable 对象数据的产生。使用 takeUntil，上游的数据直接转手给下游，直到takeUntil的参数吐出一个数据或者完结。</p><p>就像一个水龙头开关，一开始是打开的状态，上游的数据一开始直接流到下游，只要 takeUntil 一旦触发吐出数据，水龙头立刻关闭。</p><p>利用这点，可以在订阅时时，在管道中添加 takeUntil，在组件销毁时吐出数据，这样这些订阅就会立刻关闭，也就达到回收内存的作用。</p><p>多理解熟悉 Angular 的内部运行机制，为项目开发带来更好的效益。</p><img src="/assets/images/1-1/business-02.png" /><ul class="list-done"><li>要善于使用 lighthouse 进行检测评分，针对不同问题具体分析；</li><li>多使用 Devtools 分析，查找问题的入口；</li><li>不要在模板中使用函数或者getter，当有大量变更时，会存在很多的性能隐患；</li><p>接下来，会继续针对这个案例继续分析，使项目的 lighthouse 评分更加友好，提供给各位前端开发一些借鉴和交流。</p></ul>',
          sidebar: [
            {
              type: 'media-list',
              title: '热门文章',
              elements: [
                {
                  link: {
                    label: '使用 DevTools 对 Angular 前端应用性能分析优化',
                    href: '/node/417',
                  },
                  img: {
                    src: '../assets/images/showcase/blog1-large.jpeg',
                    alt: '',
                  },
                  changed: '2024-02-19',
                },
                {
                  link: {
                    label: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                    href: '/node/415',
                  },
                  img: {
                    src: '../assets/images/showcase/blog2-large.jpeg',
                    alt: '',
                  },
                  changed: '2024-02-19',
                },
                {
                  link: {
                    label: '你应该了解的 Angular 最佳实践',
                    href: '2024-02-19',
                  },
                  img: {
                    src: '../assets/images/showcase/blog3-large.jpeg',
                    alt: '',
                  },
                  changed: '2024-02-19',
                },
                {
                  link: {
                    label: 'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
                    href: '2024-02-19',
                  },
                  img: {
                    src: '../assets/images/showcase/blog4-large.jpeg',
                    alt: '',
                  },
                  changed: '2024-02-19',
                },
              ],
            },
            {
              type: 'menu-list',
              title: '标签',
              elements: [
                {
                  link: {
                    href: '#',
                    label: 'Angular',
                  },
                  label: '3',
                },
                {
                  link: {
                    href: '#',
                    label: 'Drupal',
                  },
                  label: '3',
                },
                {
                  link: {
                    href: '#',
                    label: 'Jsonapi',
                  },
                  label: '2',
                },
              ],
            },
          ],
          params: {
            require_rule: ['authenticated'],
            comment: {
              type: 'comment--comment',
              attributes: {
                entity_type: 'node',
                field_name: 'comment',
                comment_body: {
                  format: 'full_html',
                },
              },
              relationships: {
                comment_type: {
                  data: {
                    type: 'comment_type--comment_type',
                    id: '19c33b19-bfdc-4a26-9c64-af6171b123cb',
                  },
                },
                entity_id: {
                  data: {
                    type: 'node--article',
                    id: '{{entity_uuid}}',
                  },
                },
              },
            },
          },
          editor: {
            action: {
              label: '提交',
            },
            succes: {
              label: '成功发布！',
            },
          },
          actions: [
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
                    type: 'node--article',
                    id: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
                  },
                },
              },
            },
            {
              type: 'share',
              button: {
                icon: 'share',
                label: '分享',
              },
              params: {
                url: '/',
              },
            },
            {
              type: 'download',
              label: '下载',
              icon: {
                name: 'file_download',
                inline: true,
              },
              elements: [
                {
                  type: 'link',
                  label: 'Doc',
                  icon: {
                    name: 'description',
                  },
                  href: '#',
                },
                {
                  type: 'link',
                  label: 'Pdf',
                  icon: {
                    name: 'picture_as_pdf',
                  },
                  href: '#',
                },
              ],
            },
          ],
          comment: {
            actions: ['update', 'delete', 'reply', 'quote'],
            title: true,
          },
        },
        canAccess: true,
        comments: [
          {
            author: {
              img: {
                src: '/assets/images/avatar/01.jpeg',
                style: {
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                },
                alt: '小南',
              },
              align: 'center start',
              id: 'b5f0ed94-2ebe-40e9-be07-f480efb50994',
              title: '小南',
              subTitle: '2024-02-19 17:57:28',
            },
            time: '2024-02-19 17:57:28',
            id: '24213e00-d4b8-4ece-bbea-a588efcc7d8d',
            content:
              '<p>设定具体的学习目标：将学习分解为小而可管理的目标，并为每个目标设定明确的时间表和标准。这样，你可以看到自己的进展，并感到满足和激励。寻找灵感和挑战：保持对前端技术的好奇心，主动寻找新的灵感和挑战。参加技术交流会议、阅读相关的博客和文章，或加入社区讨论可以帮助你保持兴趣和动力。关注个人发展：思考自己的职业发展和长期目标，明确你希望在前端领域取得的成就。将学习看作是实现这些目标的关键步骤，这种意识将激励你持续学习和进步。</p>',
            child: [
              {
                author: {
                  img: {
                    src: '/assets/images/avatar/02.jpeg',
                    style: {
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                    },
                    alt: 'root',
                  },
                  align: 'center start',
                  id: '15765815-07f2-4d7d-8142-cb598f82af2e',
                  title: 'root',
                  subTitle: '2024-02-19 17:57:28',
                },
                time: '2024-02-19 17:57:28',
                id: 'bbbe5e9f-9b85-421e-a839-7d50be0eb7ed',
                content:
                  '<p><ul class="list-done"><li>探索不同的学习资源：尝试不同的学习资源，如在线教程、视频教程、书籍、实践项目等。不同的学习方法可以帮助你从不同的角度理解和应用前端技术，保持学习的新鲜感。</li><li>参与开源项目和社区：积极参与开源项目和社区，与其他开发者互动和合作。这样你可以学习到新的技术和最佳实践，同时拓展人脉和交流经验，激发学习的热情。</li><li>持续实践和项目驱动：通过实际项目的开发和实践，将学到的知识应用到实际场景中。实践中的挑战和解决方案将帮助你不断提升技能，并加深对前端开发的理解和热爱。</li></ul></p>',
                child: [],
                level: 2,
              },
            ],
            level: 1,
          },
          {
            author: {
              img: {
                src: '/assets/images/avatar/03.jpeg',
                style: {
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                },
                alt: '表歌',
              },
              align: 'center start',
              id: 'd5fb03cb-abca-43ba-baa5-a162a576e67a',
              title: '表歌',
              subTitle: '2024-02-19 17:57:28',
            },
            time: '2024-02-19 17:57:28',
            id: '2582f1b8-d91b-4a73-86ac-050fda0b10d1',
            content:
              '<p>定期回顾和评估：定期回顾自己的学习进展和成果，对已经学到的知识和技能进行评估。这样可以看到自己的进步，并找出需要改进的领域，保持学习的动力。设定奖励机制：为自己设定奖励机制，当达到一定的学习目标或突破难题时给予自己奖励。这可以是一次小型庆祝、购买一本新书或者做一些自己喜欢的事情，让学习变得有趣和值得期待。寻找学习伙伴：与其他</p>',
            child: [],
            level: 1,
          },
        ],
      },
      {
        label: '面板 v1',
        icon: {
          svg: 'view-dashboard-outline',
        },
        content: {
          type: 'dashboard',
          elements: [
            {
              title: {
                label: '内容发布量',
              },
              row: 12,
              params: {
                apiBak: '/api/v3/xxx',
              },
              form: [
                {
                  type: 'mat-select',
                  key: 'position',
                  defaultValue: 2023,
                  className: 'display-block',
                  templateOptions: {
                    label: '年份',
                    description: '请选择年份',
                    options: [
                      {
                        label: '2023年',
                        value: 2023,
                      },
                      {
                        label: '2022年',
                        value: 2022,
                      },
                      {
                        label: '2021年',
                        value: 2021,
                      },
                      {
                        label: '2020年',
                        value: 2020,
                      },
                    ],
                  },
                },
              ],
              widget: {
                type: 'chart',
                tooltip: {
                  trigger: 'axis',
                },
                dataset: [
                  {
                    source: [
                      ['name', '内容'],
                      ['1月', 43],
                      ['2月', 92],
                      ['3月', 91],
                      ['4月', 40],
                      ['5月', 21],
                      ['6月', 29],
                      ['7月', 67],
                      ['8月', 49],
                      ['9月', 72],
                      ['10月', 32],
                      ['11月', 65],
                      ['12月', 29],
                    ],
                  },
                ],
                grid: {
                  left: '40px',
                  right: '40px',
                  top: '30px',
                  bottom: '30px',
                },
                xAxis: {
                  type: 'category',
                },
                yAxis: {
                  type: 'value',
                },
                series: [
                  {
                    type: 'bar',
                    label: {
                      position: 'top',
                      show: true,
                    },
                    barMaxWidth: '30px',
                    datasetIndex: 0,
                  },
                ],
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '文章数',
                count: '25',
                params: {
                  apiBak: '/api/v3/xxx',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '文章数'],
                        ['1月', 68],
                        ['2月', 84],
                        ['3月', 31],
                        ['4月', 81],
                        ['5月', 51],
                        ['6月', 56],
                        ['7月', 48],
                        ['8月', 21],
                        ['9月', 26],
                        ['10月', 20],
                        ['11月', 83],
                        ['12月', 30],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#1976d2',
                      },
                      lineStyle: {
                        color: '#1976d2',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '审核数',
                count: '36',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '审核数'],
                        ['1月', 54],
                        ['2月', 99],
                        ['3月', 50],
                        ['4月', 45],
                        ['5月', 56],
                        ['6月', 74],
                        ['7月', 25],
                        ['8月', 23],
                        ['9月', 21],
                        ['10月', 99],
                        ['11月', 24],
                        ['12月', 11],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#512da8',
                      },
                      lineStyle: {
                        color: '#512da8',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '用户数',
                count: '12',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '用户'],
                        ['1月', 6],
                        ['2月', 4],
                        ['3月', 6],
                        ['4月', 5],
                        ['5月', 5],
                        ['6月', 4],
                        ['7月', 9],
                        ['8月', 10],
                        ['9月', 4],
                        ['10月', 9],
                        ['11月', 7],
                        ['12月', 2],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#f57f17',
                      },
                      lineStyle: {
                        color: '#f57f17',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '评论数',
                count: '456',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '用户'],
                        ['1月', 3],
                        ['2月', 10],
                        ['3月', 7],
                        ['4月', 10],
                        ['5月', 9],
                        ['6月', 2],
                        ['7月', 1],
                        ['8月', 4],
                        ['9月', 10],
                        ['10月', 5],
                        ['11月', 6],
                        ['12月', 8],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#c2185b',
                      },
                      lineStyle: {
                        color: '#c2185b',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              title: {
                label: '最新文章',
              },
              params: {
                apiBak: '/api/v3/xxx',
              },
              row: 6,
              widget: {
                type: 'dynamic-table',
                header: [
                  {
                    label: '标题',
                    key: 'title',
                  },
                  {
                    label: '分类',
                    key: 'custom',
                  },
                  {
                    label: '作者',
                    key: 'hander',
                  },
                  {
                    label: '状态',
                    key: 'type',
                  },
                  {
                    label: '创建时间',
                    key: 'date',
                  },
                ],
                elements: [
                  {
                    title: '<a href="#">探索机器学习的前沿技术</a>',
                    custom: '人工智能',
                    hander: '张华',
                    type: '已审核',
                    date: '2023/04/08',
                  },
                  {
                    title: '<a href="#">未来的可持续能源解决方案</a>',
                    custom: '环境科学',
                    hander: '李明',
                    type: '待审核',
                    date: '2023/04/7',
                  },
                  {
                    title: '<a href="#">瑜伽与身心健康的关系探究</a>',
                    custom: '健康与健身',
                    hander: '王琳',
                    type: '已审核',
                    date: '2023/04/7',
                  },
                  {
                    title: '<a href="#">最新的前端开发趋势与技术</a>',
                    custom: '技术与编程',
                    hander: '刘强',
                    type: '已审核',
                    date: '2023/04/03',
                  },
                  {
                    title: '<a href="#">未来智能家居的发展趋势与挑战</a>',
                    custom: '科技与创新',
                    hander: '陈晓阳',
                    type: '待审核',
                    date: '2023/04/03',
                  },
                ],
              },
            },
            {
              title: {
                label: '最新审批',
              },
              params: {
                apiBak: '/api/v3/xxx',
              },
              row: 6,
              widget: {
                type: 'dynamic-table',
                header: [
                  {
                    label: '标题',
                    key: 'title',
                  },
                  {
                    label: '部门',
                    key: 'custom',
                  },
                  {
                    label: '经办人',
                    key: 'hander',
                  },
                  {
                    label: '类型',
                    key: 'type',
                  },
                  {
                    label: '创建时间',
                    key: 'date',
                  },
                ],
                elements: [
                  {
                    title: '<a href="#">年度预算审批</a>',
                    custom: '财务部',
                    hander: '张华',
                    type: '财务审批',
                    date: '2023/04/08',
                  },
                  {
                    title: '<a href="#">新员工入职申请</a>',
                    custom: '人力资源部',
                    hander: '李明',
                    type: '人事审批',
                    date: '2023/04/7',
                  },
                  {
                    title: '<a href="#">项目变更申请</a>',
                    custom: '项目管理办公室',
                    hander: '王琳',
                    type: '项目审批',
                    date: '2023/04/7',
                  },
                  {
                    title: '<a href="#">采购订单审批</a>',
                    custom: '采购部',
                    hander: '刘强',
                    type: '采购审批',
                    date: '2023/04/03',
                  },
                  {
                    title: '<a href="#">请假申请</a>',
                    custom: '行政部',
                    hander: '陈晓阳',
                    type: '行政审批',
                    date: '2023/04/03',
                  },
                ],
              },
            },
            {
              title: {
                label: '工作日历',
              },
              row: 12,
              widget: {
                type: 'full-calendar',
                spacer: 'none',
                calendar: {
                  drawer: true,
                  apiBak: '/api/v1/demo',
                  options: {
                    events: [
                      {
                        title: '使用 DEVTOOLS 对 ANGULAR 前端应用性能分析优化',
                        event: 'meeting',
                        start: '2024-02-19T09:57:28.011Z',
                        user: 'Johnson',
                        className: 'bg-primary',
                      },
                      {
                        title: '使用 TAKEUNTIL 操作符管理 ANGULAR 组件的订阅',
                        event: 'drupal',
                        start: 1709114248011,
                        user: 'Johnson',
                        className: 'bg-accent',
                      },
                      {
                        title: '你应该了解的 ANGULAR 最佳实践',
                        event: 'drupal',
                        start: 1709027848011,
                        user: 'Johnson',
                        className: 'bg-warn',
                      },
                      {
                        title:
                          'ANGULAR 5 RXJS 5.5.2 多个 HTTP 并行 FORKJOIN 请求',
                        event: 'drupal',
                        start: 1708768648011,
                        user: 'Johnson',
                        className: 'bg-warn',
                      },
                      {
                        title: 'DRUPAL 8 AJAX 弹出框可监听利用的 EVENT 事件',
                        event: 'drupal',
                        start: 1708682248011,
                        user: 'Johnson',
                        className: 'bg-pink',
                      },
                      {
                        title: 'DRUPAL8 用户登录后自定义重定向',
                        event: 'drupal',
                        start: 1708509448011,
                        user: 'Johnson',
                        className: 'bg-orange',
                      },
                      {
                        title: '如何更改 GIT COMMIT 某个历史提交信息',
                        event: 'drupal',
                        start: 1708595848011,
                        user: 'Johnson',
                        className: 'bg-yellow',
                      },
                      {
                        title:
                          '开源项目使用 GITHUB ACTIONS 自动化测试部署 ANGULAR 应用到 ECS 服务器',
                        event: 'drupal',
                        start: 1708595848011,
                        user: 'Johnson',
                        className: 'bg-red',
                      },
                      {
                        title: 'DRUPAL JSONAPI 初级入门实践',
                        event: 'drupal',
                        start: 1709027848011,
                        user: 'Johnson',
                        className: 'bg-purple',
                      },
                      {
                        title: 'RXJS SWITCHMAP 在 DRUPAL API中的应用',
                        event: 'drupal',
                        start: 1708855048011,
                        user: 'Johnson',
                        className: 'bg-indigo',
                      },
                      {
                        title: '五年了，再谈南宁和深圳的差距',
                        event: 'drupal',
                        start: 1708768648011,
                        user: 'Johnson',
                        className: 'bg-blue',
                      },
                      {
                        title:
                          '没想到吧？2021年南宁IT互联网相关工作者最近一份工作求职渠道最受欢迎的竟然是它',
                        event: 'drupal',
                        start: 1707818248011,
                        user: 'Johnson',
                        className: 'bg-cyan',
                      },
                      {
                        title: '南宁IT互联网行业薪资福利待遇如何？',
                        event: 'drupal',
                        start: 1708163848011,
                        user: 'Johnson',
                        className: 'bg-teal',
                      },
                      {
                        title: '南宁IT互联网公司，有哪些是双休？',
                        event: 'drupal',
                        start: 1707731848011,
                        user: 'Johnson',
                        className: 'bg-green',
                      },
                      {
                        title:
                          'JSONA 一款转换 JSONAPI 数据的工具库，也算是解放 DRUPAL JSONAPI 反序列化的利器',
                        event: 'drupal',
                        start: 1707472648011,
                        user: 'Johnson',
                        className: 'bg-light-green',
                      },
                      {
                        title: 'ANGULAR 有哪几种不同类型的绑定',
                        event: 'drupal',
                        start: 1707645448011,
                        user: 'Johnson',
                        className: 'bg-brown',
                      },
                      {
                        title:
                          'ANGULAR NG-CONTENT、NG-TEMPLATE、NG-CONTAINER 之间的区别',
                        event: 'drupal',
                        start: 1707645448011,
                        user: 'Johnson',
                        className: 'bg-grey',
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
            },
          ],
        },
      },
      {
        label: '面板 v2',
        icon: {
          svg: 'view-dashboard-variant-outline',
        },
        content: {
          type: 'dashboard',
          elements: [
            {
              title: {
                label: '消费者注册数据',
              },
              params: {
                apiBak: '/api/v3/xxx',
              },
              row: 12,
              form: [
                {
                  type: 'mat-select',
                  key: 'position',
                  defaultValue: 2023,
                  className: 'display-block',
                  templateOptions: {
                    label: '年份',
                    description: '请选择年份',
                    options: [
                      {
                        label: '2023年',
                        value: 2023,
                      },
                      {
                        label: '2022年',
                        value: 2022,
                      },
                      {
                        label: '2021年',
                        value: 2021,
                      },
                      {
                        label: '2020年',
                        value: 2020,
                      },
                    ],
                  },
                },
              ],
              widget: {
                type: 'chart',
                tooltip: {
                  trigger: 'axis',
                },
                dataset: [
                  {
                    source: [
                      ['name', '用户'],
                      ['1月', 47],
                      ['2月', 48],
                      ['3月', 29],
                      ['4月', 23],
                      ['5月', 47],
                      ['6月', 97],
                      ['7月', 29],
                      ['8月', 59],
                      ['9月', 40],
                      ['10月', 11],
                      ['11月', 80],
                      ['12月', 52],
                    ],
                  },
                ],
                grid: {
                  left: '40px',
                  right: '40px',
                  top: '30px',
                  bottom: '30px',
                },
                xAxis: {
                  type: 'category',
                },
                yAxis: {
                  type: 'value',
                },
                series: [
                  {
                    type: 'bar',
                    label: {
                      position: 'top',
                      show: true,
                    },
                    barMaxWidth: '30px',
                    datasetIndex: 0,
                  },
                ],
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '广告发布量',
                count: '5',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '广告'],
                        ['1月', 26],
                        ['2月', 67],
                        ['3月', 30],
                        ['4月', 21],
                        ['5月', 19],
                        ['6月', 78],
                        ['7月', 91],
                        ['8月', 68],
                        ['9月', 71],
                        ['10月', 56],
                        ['11月', 69],
                        ['12月', 50],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#1976d2',
                      },
                      lineStyle: {
                        color: '#1976d2',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '消费者增长',
                count: '1,156',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '用户'],
                        ['1月', 53],
                        ['2月', 49],
                        ['3月', 42],
                        ['4月', 83],
                        ['5月', 50],
                        ['6月', 79],
                        ['7月', 100],
                        ['8月', 56],
                        ['9月', 92],
                        ['10月', 73],
                        ['11月', 11],
                        ['12月', 14],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#512da8',
                      },
                      lineStyle: {
                        color: '#512da8',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '门店增长',
                count: '50%',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '门店'],
                        ['1月', 3],
                        ['2月', 2],
                        ['3月', 6],
                        ['4月', 3],
                        ['5月', 9],
                        ['6月', 10],
                        ['7月', 8],
                        ['8月', 5],
                        ['9月', 5],
                        ['10月', 3],
                        ['11月', 7],
                        ['12月', 10],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#f57f17',
                      },
                      lineStyle: {
                        color: '#f57f17',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              row: 3,
              widget: {
                type: 'chart-box',
                label: '评论量',
                count: '28',
                params: {
                  apiBak: '/api/v3/node/vote/report',
                },
                chart: {
                  grid: {
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                  },
                  xAxis: {
                    show: false,
                    type: 'category',
                  },
                  yAxis: {
                    show: false,
                    type: 'value',
                  },
                  dataset: [
                    {
                      source: [
                        ['name', '评论'],
                        ['1月', 53],
                        ['2月', 66],
                        ['3月', 100],
                        ['4月', 66],
                        ['5月', 28],
                        ['6月', 82],
                        ['7月', 100],
                        ['8月', 95],
                        ['9月', 97],
                        ['10月', 16],
                        ['11月', 39],
                        ['12月', 81],
                      ],
                    },
                  ],
                  series: [
                    {
                      type: 'line',
                      symbol: 'none',
                      areaStyle: {
                        opacity: 0.1,
                        color: '#c2185b',
                      },
                      lineStyle: {
                        color: '#c2185b',
                      },
                      label: {
                        position: 'top',
                        show: true,
                      },
                      datasetIndex: 0,
                    },
                  ],
                },
              },
            },
            {
              title: {
                label: '抽奖数据',
              },
              row: 12,
              widget: {
                type: 'chart',
                tooltip: {
                  trigger: 'axis',
                },
                legend: {
                  bottom: '10px',
                },
                dataset: [
                  {
                    source: [
                      ['type', '红包', '推广'],
                      ['1月', 61, 27],
                      ['2月', 33, 51],
                      ['3月', 72, 27],
                      ['4月', 46, 11],
                      ['5月', 80, 53],
                      ['6月', 65, 40],
                      ['7月', 19, 60],
                      ['8月', 47, 64],
                      ['9月', 82, 88],
                      ['10月', 62, 54],
                      ['11月', 31, 74],
                      ['12月', 98, 89],
                    ],
                  },
                ],
                grid: {
                  left: '40px',
                  right: '40px',
                  top: '30px',
                  bottom: '60px',
                },
                xAxis: {
                  type: 'category',
                },
                yAxis: {
                  type: 'value',
                },
                series: [
                  {
                    name: '红包',
                    type: 'bar',
                    label: {
                      position: 'top',
                      show: true,
                    },
                    barMaxWidth: '30px',
                  },
                  {
                    name: '推广',
                    type: 'bar',
                    label: {
                      position: 'top',
                      show: true,
                    },
                    barMaxWidth: '30px',
                  },
                ],
              },
            },
            {
              title: {
                label: '最新广告',
              },
              row: 6,
              params: {
                apiBak: '/api/v3/xxx',
              },
              widget: {
                type: 'dynamic-table',
                header: [
                  {
                    label: '标题',
                    key: 'title',
                  },
                  {
                    label: '中奖',
                    key: 'lottery',
                  },
                  {
                    label: '访问',
                    key: 'visitor',
                  },
                  {
                    label: '评论',
                    key: 'comment',
                  },
                  {
                    label: '结束',
                    key: 'end',
                  },
                ],
                elements: [
                  {
                    title: '<a href="#">清明特惠，赢面单啦</a>',
                    lottery: '110',
                    visitor: '620',
                    comment: '0',
                    end: '2023/04/11 23:59:59',
                  },
                  {
                    title:
                      '<a href="#">城盛百汇周末特惠 会员1元换购大米/面粉</a>',
                    lottery: '66',
                    visitor: '415',
                    comment: '1',
                    end: '2023/03/29 23:59:59',
                  },
                  {
                    title:
                      '<a href="#">九要“拾”惠 精品汇选 养生开始 每日10款限时秒杀</a>',
                    lottery: '7',
                    visitor: '181',
                    comment: '0',
                    end: '2022/12/30 23:59:59',
                  },
                  {
                    title:
                      '<a href="#">金秋丰收季，爆款惠不停（文末福利持续加码中）</a>',
                    lottery: '4',
                    visitor: '365',
                    comment: '0',
                    end: '2022/11/30 23:59:59',
                  },
                ],
              },
            },
            {
              title: {
                label: '最新评论',
              },
              row: 6,
              params: {
                apiBak: '/api/v3/xxx',
              },
              widget: {
                type: 'dynamic-table',
                header: [
                  {
                    label: '内容',
                    key: 'body',
                  },
                  {
                    label: '评论人',
                    key: 'user',
                  },
                  {
                    label: '标题',
                    key: 'title',
                  },
                  {
                    label: '时间',
                    key: 'date',
                  },
                ],
                elements: [
                  {
                    title:
                      '<a href="#">九要“拾”惠 精品汇选 养生开始 每日10款限时秒杀</a>',
                    user: '用户ERSyAUCP',
                    body: '看起来不错！',
                    date: '2023/04/01',
                  },
                  {
                    title:
                      '<a href="#">城盛百汇周末特惠 会员1元换购大米/面粉</a>',
                    user: '用户FGDDDES',
                    body: '为什么超出范围？',
                    date: '2023/03/28',
                  },
                  {
                    title:
                      '<a href="#">金秋丰收季，爆款惠不停（文末福利持续加码中）</a>',
                    user: '用户PIJFN',
                    body: '可以多一些这样的好物！',
                    date: '2023/02/18',
                  },
                  {
                    title: '<a href="#">清明特惠，赢面单啦</a>',
                    user: '用户WQUDJD',
                    body: '这个超市挺实惠，活动挺多！',
                    date: '2023/02/01',
                  },
                ],
              },
            },
            {
              title: {
                label: '活动日历',
              },
              row: 12,
              widget: {
                type: 'full-calendar',
                spacer: 'none',
                calendar: {
                  drawer: true,
                  apiBak: '/api/v1/demo',
                  options: {
                    events: [
                      {
                        title: '使用 DEVTOOLS 对 ANGULAR 前端应用性能分析优化',
                        event: 'meeting',
                        start: '2024-02-19T09:57:28.011Z',
                        user: 'Johnson',
                        className: 'bg-primary',
                      },
                      {
                        title: '使用 TAKEUNTIL 操作符管理 ANGULAR 组件的订阅',
                        event: 'drupal',
                        start: 1709114248011,
                        user: 'Johnson',
                        className: 'bg-accent',
                      },
                      {
                        title: '你应该了解的 ANGULAR 最佳实践',
                        event: 'drupal',
                        start: 1709027848011,
                        user: 'Johnson',
                        className: 'bg-warn',
                      },
                      {
                        title:
                          'ANGULAR 5 RXJS 5.5.2 多个 HTTP 并行 FORKJOIN 请求',
                        event: 'drupal',
                        start: 1708768648011,
                        user: 'Johnson',
                        className: 'bg-warn',
                      },
                      {
                        title: 'DRUPAL 8 AJAX 弹出框可监听利用的 EVENT 事件',
                        event: 'drupal',
                        start: 1708682248011,
                        user: 'Johnson',
                        className: 'bg-pink',
                      },
                      {
                        title: 'DRUPAL8 用户登录后自定义重定向',
                        event: 'drupal',
                        start: 1708509448011,
                        user: 'Johnson',
                        className: 'bg-orange',
                      },
                      {
                        title: '如何更改 GIT COMMIT 某个历史提交信息',
                        event: 'drupal',
                        start: 1708595848011,
                        user: 'Johnson',
                        className: 'bg-yellow',
                      },
                      {
                        title:
                          '开源项目使用 GITHUB ACTIONS 自动化测试部署 ANGULAR 应用到 ECS 服务器',
                        event: 'drupal',
                        start: 1708595848011,
                        user: 'Johnson',
                        className: 'bg-red',
                      },
                      {
                        title: 'DRUPAL JSONAPI 初级入门实践',
                        event: 'drupal',
                        start: 1709027848011,
                        user: 'Johnson',
                        className: 'bg-purple',
                      },
                      {
                        title: 'RXJS SWITCHMAP 在 DRUPAL API中的应用',
                        event: 'drupal',
                        start: 1708855048011,
                        user: 'Johnson',
                        className: 'bg-indigo',
                      },
                      {
                        title: '五年了，再谈南宁和深圳的差距',
                        event: 'drupal',
                        start: 1708768648011,
                        user: 'Johnson',
                        className: 'bg-blue',
                      },
                      {
                        title:
                          '没想到吧？2021年南宁IT互联网相关工作者最近一份工作求职渠道最受欢迎的竟然是它',
                        event: 'drupal',
                        start: 1707818248011,
                        user: 'Johnson',
                        className: 'bg-cyan',
                      },
                      {
                        title: '南宁IT互联网行业薪资福利待遇如何？',
                        event: 'drupal',
                        start: 1708163848011,
                        user: 'Johnson',
                        className: 'bg-teal',
                      },
                      {
                        title: '南宁IT互联网公司，有哪些是双休？',
                        event: 'drupal',
                        start: 1707731848011,
                        user: 'Johnson',
                        className: 'bg-green',
                      },
                      {
                        title:
                          'JSONA 一款转换 JSONAPI 数据的工具库，也算是解放 DRUPAL JSONAPI 反序列化的利器',
                        event: 'drupal',
                        start: 1707472648011,
                        user: 'Johnson',
                        className: 'bg-light-green',
                      },
                      {
                        title: 'ANGULAR 有哪几种不同类型的绑定',
                        event: 'drupal',
                        start: 1707645448011,
                        user: 'Johnson',
                        className: 'bg-brown',
                      },
                      {
                        title:
                          'ANGULAR NG-CONTENT、NG-TEMPLATE、NG-CONTAINER 之间的区别',
                        event: 'drupal',
                        start: 1707645448011,
                        user: 'Johnson',
                        className: 'bg-grey',
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
            },
          ],
        },
      },
      {
        label: '用户中心',
        icon: {
          svg: 'account-box-outline',
        },
        content: {
          type: 'user-center',
          params: {
            showProfile: false,
            showDetails: false,
          },
          main: {
            spacer: 'sm',
            bg: {
              classes: 'bg-fill-width bg-shadow',
            },
          },
          left: [
            {
              type: 'user-card',
              menu: [
                {
                  type: 'link',
                  label: '资料更新',
                  dialog: {
                    params: {
                      width: '1200px',
                      disableClose: true,
                    },
                    afterClosed: {
                      success: {
                        label: '更新资料成功！',
                      },
                      emit: true,
                    },
                    data: [
                      {
                        type: 'iframe',
                        url: '/?path=/story/full-calendar--default',
                        height: '900',
                      },
                    ],
                  },
                },
              ],
            },
          ],
          right: [
            {
              type: 'showcase-3v6',
              title: {
                type: 'text',
                spacer: 'xs',
                title: {
                  label: '快捷入口',
                  style: 'style-v4',
                },
              },
              params: {},
              spacer: 'xs',
              row: '4',
              elements: [
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  css3: true,
                  link: {
                    label: '发布文章',
                    classes: 'bold',
                    dialog: {
                      params: {
                        width: '1200px',
                        disableClose: true,
                      },
                      afterClosed: {
                        success: {
                          label: '请检查是否发布成功！',
                        },
                        emit: true,
                      },
                      data: [
                        {
                          type: 'iframe',
                          url: '/',
                          height: '1000',
                        },
                      ],
                    },
                  },
                  subTitle: '发布内容到文章',
                },
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  css3: true,
                  link: {
                    label: '发布博客',
                    classes: 'bold',
                    dialog: {
                      params: {
                        width: '1200px',
                        disableClose: true,
                      },
                      afterClosed: {
                        success: {
                          label: '请检查是否发布成功！',
                        },
                        emit: true,
                      },
                      data: [
                        {
                          type: 'iframe',
                          url: '/',
                          height: '1200',
                        },
                      ],
                    },
                  },
                  subTitle: '发布内容到博客',
                },
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  css3: true,
                  link: {
                    label: '我的收藏',
                    classes: 'bold',
                    href: '#',
                  },
                  subTitle: '查看收藏的内容',
                },
              ],
            },
            {
              type: 'showcase-3v6',
              row: '3',
              spacer: 'xs',
              title: {
                type: 'text',
                spacer: 'xs',
                title: {
                  label: '快捷入口',
                  style: 'style-v4',
                },
              },
              params: {
                reqRoles: [],
              },
              action: {
                label: '管理更多',
                href: '/',
                style: 'style-v1',
                icon: 'open_in_new',
              },
              elements: [
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  css3: true,
                  link: {
                    label: '填写订单',
                    classes: 'bold',
                    dialog: {
                      params: {
                        width: '1200px',
                        disableClose: true,
                      },
                      afterClosed: {
                        success: {
                          label: '请检查是否发布成功！',
                        },
                        emit: true,
                      },
                      data: [
                        {
                          type: 'iframe',
                          url: '/',
                          height: '1000',
                        },
                      ],
                    },
                  },
                  subTitle: '发布工作需求',
                },
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'project.png',
                  },
                  css3: true,
                  subTitle: '发布项目内容',
                  link: {
                    href: '/',
                    label: '项目',
                    classes: 'bold',
                  },
                },
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'meeting.png',
                  },
                  css3: true,
                  subTitle: '发布会议',
                  link: {
                    href: '/',
                    label: '会议',
                    classes: 'bold',
                  },
                },
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'doc.png',
                  },
                  css3: true,
                  subTitle: '发布资料',
                  link: {
                    href: '/',
                    label: '文库资料',
                    classes: 'bold',
                  },
                },
                {
                  img: {
                    src: '/assets/images/logo/codepen.svg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'customer.png',
                  },
                  css3: true,
                  subTitle: '创建新客户',
                  link: {
                    href: '/',
                    label: '客户',
                    classes: 'bold',
                  },
                },
              ],
            },
          ],
        },
      },
      {
        label: '用户资料',
        icon: {
          svg: 'account-outline',
        },
        content: {
          type: 'profile-1v1',
          bannerBg: {
            classes: 'bg-fill-width overlay overlay-80',
            img: {
              hostClasses: 'bg-center',
              src: '/assets/images/16-9/business-14.jpeg',
              alt: 'page title',
            },
          },
          avatar: {
            src: '/assets/images/avatar/01.jpeg',
            alt: 'Johnson',
          },
          name: 'Johnson',
          subTitle: 'Drupal 前端开发',
          details: {
            label: '个人资料',
            elements: [
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '职位',
                content: '前端开发',
              },
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '微信',
                content: 'biaogebusy',
              },
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '公众号',
                content: 'Drupal 自习室',
              },
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '邮箱',
                content: 'biaogebusy@example.com',
              },
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '地址',
                content: '南宁',
              },
            ],
          },
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
          ],
          content: [
            {
              label: '简介',
              type: 'text',
              spacer: 'none',
              body: '<p>我是一名充满热情和激情的程序员，对技术有着浓厚的兴趣。我通过不断学习和实践，已经具备了丰富的开发经验。我善于使用各种编程语言，能够快速高效地完成各类项目开发任务。我相信，通过我的技术实力，可以为公司和客户带来更大的价值，并不断推进技术的进步。',
            },
            {
              label: '技能',
              type: 'progress-group',
              elements: [
                {
                  label: 'HTML/CSS',
                  value: '95',
                },
                {
                  label: 'Angular/JavaScript',
                  value: '79',
                },
                {
                  label: 'Drupal',
                  value: '60',
                },
              ],
            },
            {
              label: '工作经历',
              type: 'media-object-group',
              elements: [
                {
                  type: 'media-object',
                  img: {
                    src: '/assets/images/avatar/01.jpeg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  meta: '2024-02',
                  title: '前端开发工程师',
                  subTitle: 'Davyin',
                  content:
                    '专注于 Drupal 前端主题开发，目前主要从事于 Angular 前端开发，终身学习体验者，热衷于健身，希望明天比今天好一点。',
                },
                {
                  img: {
                    src: '/assets/images/avatar/03.jpeg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  meta: '2024-02',
                  title: '前端架构师',
                  subTitle: '阿里蚂蚁',
                  content:
                    '深入产品和行业场景，深入行业技术，分析影响稳定性和质量的潜在异常节点，把握蚂蚁金服强大的监控能力，设计和制定监控方案。',
                },
              ],
            },
            {
              label: '案例',
              type: 'swiper',
              params: {
                navigation: false,
                breakpoints: {
                  '600': {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  '960': {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                },
              },
              classes: '',
              elements: [
                {
                  type: 'card',
                  title: '高性能',
                  subTitle: 'High Performance',
                  classes: 'card-no-shadow',
                  body: '默认情况下，Drupal 运行速度很快，您可以优化部署，使其运行得更快；',
                  feature: {
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
                },
                {
                  type: 'card',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto7.jpg',
                      alt: 'alt',
                    },
                  },
                  title: '易用的编辑器',
                  subTitle: 'Simplicity for Editors',
                  classes: 'card-no-shadow',
                  body: '通过友好的预览、拖放媒体提高内容编辑的易用性，高效的工作；',
                },
                {
                  type: 'card',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto2.jpg',
                      alt: 'alt',
                    },
                  },
                  title: '多语言',
                  subTitle: 'Leader in Multilingual',
                  classes: 'card-no-shadow',
                  body: 'Drupal 100多种语言提供了无以伦比的支持和翻译工作流程；',
                },
                {
                  type: 'card',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto3.jpg',
                      alt: 'alt',
                    },
                  },
                  title: '更有弹性',
                  subTitle: 'Flexibility',
                  classes: 'card-no-shadow',
                  body: '无论是一个还是多个站点，Drupal 总是可以游刃有余的构建；',
                },
                {
                  type: 'card',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto4.jpg',
                      alt: 'alt',
                    },
                  },
                  title: '安全性',
                  subTitle: 'Rigorous Security',
                  classes: 'card-no-shadow',
                  body: '为了抵御安全漏洞，将有一组团队解决并发布安全修补程序，超过45000名贡献者使该平台成为市场上最安全、最稳定的平台之一；',
                },
              ],
            },
          ],
        },
      },
      {
        label: '企业资料',
        icon: {
          svg: 'home-variant-outline',
        },
        content: {
          type: 'profile-1v1',
          bannerBg: {
            classes: 'bg-fill-width overlay overlay-80',
            img: {
              hostClasses: 'bg-center',
              src: '/assets/images/16-9/business-14.jpeg',
              alt: 'page title',
            },
          },
          avatar: {
            src: '/assets/images/logo/lenovo.svg',
            alt: '才华有限公司',
          },
          name: '才华有限公司',
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
          ],
          details: {
            label: '公司资料',
            elements: [
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '类型',
                content: '科技',
              },
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '联系人',
                content: '张三',
              },
              {
                icon: {
                  color: 'warn',
                  svg: 'arrow_right',
                  inline: true,
                },
                label: '联系方式',
                content: '18878718888',
              },
            ],
          },
          content: [
            {
              label: '简介',
              type: 'text',
              spacer: 'none',
              body: '<p>才华有限公司，宛如一座汇聚智慧星光的灯塔，我们秉持“人尽其才，文以载道”的信念，悠游于浩瀚的人才海洋。公司专注于挖掘并点亮个体的内在光芒，精心编织了一张横跨各行业的文艺经纬，为每一颗璀璨的才华之星提供翱翔的舞台。我们凭借深厚的艺术底蕴和敏锐的时代洞察力，倾心打造定制化的培养方案，旨在让每一份独特的才华在此诗意绽放，共同谱绘一幅生机盎然的职场画卷。</p>',
            },
            {
              type: 'showcase-2v1',
              row: 5,
              label: '相关材料',
              spacer: 'xs',
              elements: [
                {
                  type: 'card',
                  title: '营业执照',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto1.jpg',
                      alt: '营业执照',
                    },
                  },
                  progressBar: {
                    mode: 'determinate',
                    value: 20,
                  },
                },
                {
                  type: 'card',
                  title: '开户许可证',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto2.jpg',
                      alt: '开户许可证',
                    },
                  },
                  progressBar: {
                    mode: 'determinate',
                    value: 40,
                  },
                },
                {
                  type: 'card',
                  title: '资信证明',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto3.jpg',
                      alt: '资信证明',
                    },
                  },
                  progressBar: {
                    mode: 'determinate',
                    value: 60,
                  },
                },
                {
                  type: 'card',
                  title: '纳税人信用等级',
                  feature: {
                    fullIcon: 'fullscreen',
                    openIcon: 'open_in_new',
                    link: '#',
                    ratios: 'media-4-3',
                    img: {
                      classes: 'object-fit',
                      src: '/assets/images/cases/porto4.jpg',
                      alt: '纳税人信用等级',
                    },
                  },
                  progressBar: {
                    mode: 'determinate',
                    value: 80,
                  },
                },
                {
                  type: 'card',
                  title: '法人身份证',
                  carousel: {
                    params: {
                      slidesPerView: 1,
                      navigation: false,
                      autoplay: {
                        delay: 5000,
                      },
                      breakpoints: null,
                    },
                    elements: [
                      {
                        type: 'feature-box',
                        hoverIcon: true,
                        fullIcon: 'fullscreen',
                        openIcon: 'open_in_new',
                        link: '#',
                        ratios: 'media-4-3',
                        img: {
                          classes: 'object-fit',
                          src: '/assets/images/cases/porto1.jpg',
                          alt: 'lazyload',
                        },
                      },
                      {
                        type: 'feature-box',
                        hoverIcon: false,
                        fullIcon: 'fullscreen',
                        openIcon: 'open_in_new',
                        link: '#',
                        ratios: 'media-4-3',
                        img: {
                          classes: 'object-fit',
                          src: '/assets/images/cases/porto2.jpg',
                          alt: 'lazyload',
                        },
                      },
                    ],
                  },
                  progressBar: {
                    mode: 'determinate',
                    value: 100,
                  },
                },
              ],
            },
            {
              label: '相关业务',
              type: 'tab',
              spacer: 'none',
              classes: 'bg-light',
              elements: [
                {
                  label: '财务数据',
                  elements: [
                    {
                      type: 'text',
                      animate: {
                        disable: true,
                      },
                      spacer: 'none',
                      body: '<p>动态组件</p>',
                    },
                  ],
                },
                {
                  label: '业绩合同',
                  elements: [
                    {
                      type: 'text',
                      animate: {
                        disable: true,
                      },
                      spacer: 'none',
                      body: '<p>动态组件</p>',
                    },
                  ],
                },
                {
                  label: '项目',
                  elements: [
                    {
                      type: 'text',
                      animate: {
                        disable: true,
                      },
                      spacer: 'none',
                      body: '<p>动态组件</p>',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        label: '搜索',
        icon: {
          svg: 'magnify',
        },
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
                label: '综合搜索',
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
              key: 'keys',
              type: 'input',
              className: 'display-block',
              templateOptions: {
                label: '关键词',
                appearance: 'legacy',
                type: 'search',
              },
            },
            {
              type: 'select',
              key: 'skill',
              className: 'display-block',
              templateOptions: {
                label: '技能',
                options: [
                  {
                    label: '无',
                    value: '',
                  },
                  {
                    label: 'Angular',
                    value: 'angular',
                  },
                  {
                    label: 'React',
                    value: 'react',
                  },
                  {
                    label: 'Vue',
                    value: 'vue',
                  },
                ],
              },
            },
            {
              type: 'select',
              key: 'cms',
              className: 'display-block',
              templateOptions: {
                label: 'CMS',
                options: [
                  {
                    label: '无',
                    value: '',
                  },
                  {
                    label: 'Drupal',
                    value: 'drupal',
                  },
                  {
                    label: 'WP',
                    value: 'wp',
                  },
                  {
                    label: 'Joomla',
                    value: 'joomla',
                  },
                ],
              },
            },
            {
              type: 'checkbox',
              key: 'article',
              className: 'display-block',
              templateOptions: {
                label: '文章',
              },
            },
            {
              type: 'checkbox',
              key: 'blog',
              className: 'display-block',
              templateOptions: {
                label: '博客',
              },
            },
          ],
          data: {
            nodes: [
              {
                link: {
                  label: '使用 DevTools 对 Angular 前端应用性能分析优化',
                  href: '/node/452',
                  target: '_blank',
                },
                created: '2022-01-08',
                body: '使用lighthouse评分以南宁IT派[www.nnitpai.com]为例记录分析优化过程，使用Devtoolslighthouse对首页进行综合的评分：性能评分勉强及格差强人意，切换到performance性能选项卡:记录的同时，可以依次滚动页面到底部，暂停看看分析结果：发现一推很深的函数调用，放大具体看看：（记得要用本地开发环境来查看，这样可以方便看未编译版本中具体的组件或者函数）发现大部分的深度调用都与这个MenuComponent组件有关，不断的在调用刷新，可以看到一个executeTemplate这个函数，这个是angular对模板里面的变量或者函数执行计算值，已检测是否有变化，相应进行渲染。看看MenuComponent组件模板关键部分：&amp;lt;ng-container*ngIf=&quot;content&quot;&amp;gt;&amp;lt;header*ngIf=&quot;screen.eq(&#039;gt-sm&#039;)&quot;class=&quot;header&quot;#header&amp;gt;//&amp;lt;/',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/452',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=452',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=452',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                  href: '/node/451',
                  target: '_blank',
                },
                created: '2022-01-04',
                body: '在上一篇文章中，有个知友评论说是要takeUntil来管理订阅更加清晰明了，那我们就探探究竟。在Rxjs中，可以使用takeUntil来控制另外一个Observable对象数据的产生。使用takeUntil，上游的数据直接转手给下游，直到takeUntil的参数吐出一个数据或者完结。就像一个水龙头开关，一开始是打开的状态，上游的数据一开始直接流到下游，只要takeUntil一旦触发吐出数据，水龙头立刻关闭。利用这点，可以在订阅时时，在管道中添加takeUntil，在组件销毁时吐出数据，这样这些订阅就会立刻关闭，也就达到回收内存的作用。改造之前：export class ExampleComponent implements OnInit, OnDestroy {  subscription1: Subscription;  subscription2: Subscription;  ngOnInit(): void {    this.subscription1 = observable1.subscribe(...);    this.subscription2 = ',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/451',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=451',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=451',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: '你应该了解的 Angular 最佳实践',
                  href: '/node/450',
                  target: '_blank',
                },
                created: '2022-01-03',
                body: '遵循最佳实践可以让你的Angular应用保持性能优越，使团队的代码风格一致，以下代码摘自南宁IT派官网项目。把默认的变更检测设置为OnPushAngular默认变更检测是Defualt，只要在组件中有任意一个值发生改变或者Dom中有事件的更新都会触发整个应用自上而下的变更检测，使用OnPush的方式使大型的应用的性能得到很大的提升。导入ChangeDetectionStrategy之后，设置为OnPush@Component({selector:&#039;app-mega-menu&#039;,templateUrl:&#039;./mega-menu.component.html&#039;,styles:[&#039;./mega-menu.component.scss&#039;],changeDetection:ChangeDetectionStrategy.OnPush,})如果你的组件中有值的更新则导入ChangeDetectorRefconstructor(privateeleRef:ElementRef,privatescreenState:',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/450',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=450',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=450',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label:
                    '没想到吧？2021年南宁IT互联网相关工作者最近一份工作求职渠道最受欢迎的竟然是它',
                  href: '/node/399',
                  target: '_blank',
                },
                created: '2021-08-02',
                body: '前言目前，市面上求职渠道五花八门，有覆盖全行业的，有细分垂直领域的，有本地运营的，带来更多选择的同时，也带来了很多的烦恼。例如：泄露身份信息的常年挂着职位不回复的借招聘之名行培训之实的诈骗传销的带着这些好奇心，爱好问卷的我们群里发起了【在南宁，作为从事互联网相关工作的你，最近一份工作是从哪个渠道求职找到的？】的调查，数据量不多，本文标题有标题党嫌疑，仅供参考：）填写量：620您当前的职位类别是？通过哪个招聘网站或者渠道？为了排除机器人及非有效性问卷，以下是筛选仅限来自广西地区的投票：填写量：53您当前的职位类别是？通过哪个招聘网站或者渠道？最后，得出的结论是小伙伴们最近一份工作求职渠道最受欢迎的是BOSS招聘和广西人才市场。声明：以上调查数据量有限，不权威，仅供参考。南宁IT派，您的职场朋友圈。',
                type: '新闻',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/399',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=399',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=399',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: '五年了，再谈南宁和深圳的差距',
                  href: '/node/397',
                  target: '_blank',
                },
                created: '2021-06-22',
                body: '本文经过作者的同意转载。两年前，写了一篇文章谈了下来南宁三年的感想，是我全部文章里点击量最好的，回复评论最多的。（当然其实整体的量都不大）一眨眼，来南宁5年了，生活工作的重心都放到了南宁。再去深圳，看看两个城市的对比，感慨还是很多。5年的时间，南宁的房价从我们来的时候普遍6、7千，升到现在一万以上。深圳的房价从我离开的2万左右升到普遍7万左右。房价大幅增长的背后，是深圳这座城市的活力。人口高度聚集在这里，工作、生活、娱乐。地铁里满满的人，大城市的感觉扑面而来。南宁的房价也在涨，但涨幅小的多。人口不增不减，还是那么多。周边城市如玉林、贵港、百色等地的人喜欢来南宁买房。但不一定居住，空置率较高，尤其是新城五象。漂亮的小区，晚上的亮灯率不太高，交房两年以上的亮灯率也就3层左右。整个城市发展，这五年2015-2020，南宁的重点发展是五象新区。整个片区从黄土纷飞到有模有样。宽敞的街道，美丽的绿化，总部基地站的高楼都在显示这座城市想要发展的决心和诚意。进入总部基地有种来到了广州、深圳大城市的味道。唯一遗憾的是，这里的人口还不多，高楼林立下商铺较少。除了写字楼在早晚高峰和中午吃饭有人员进出外。',
                type: '新闻',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/397',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=397',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=397',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: '南宁IT互联网行业薪资福利待遇如何？',
                  href: '/node/396',
                  target: '_blank',
                },
                created: '2021-06-22',
                body: '前段时间，我们发布了2020年度南宁互联网IT行业薪资生存调查投票，分别从性别、年龄、婚恋状况、购房情况、租房情况、公司属性、跳槽情况、工作年限、月薪收入、工作满意程度，这几个维度进行了投票调查，从2020年12月01日到2020年12月06日截止，一共投票了96票，其中女生占19%，男生占81%：年龄分布婚恋状况年龄分布，25岁到30岁是主力军购房情况，南宁的房间目前普遍都1万起步，自己能够买房的只有11%公司属性民营企业占了六成，其次是国有企业，不知道是不是今年疫情的原因，自由职业者也有10%的比例跳槽情况工作年限月薪收入最关心的当属月薪收入，普遍在4000元到6000元，有一定工作经验的在6000元到8000元之间，高级开发者可以拿到8000元到150000元的薪资，不乏2w起步的薪水大多数人觉得当前工作满意程度为一般，很不满意和不满意总共占27%以上投票数据报告并不能代表完整性，但是从侧面也反映出了当前的南宁IT互联网从业者现状，仅给各位以参考。不管是初入职场的小白，还是经验丰富的职场高手，最终还是逃过不工作年龄的界限，家庭和社会的压力，祝各位秉持着最初的愿景，褪掉浮躁与焦虑',
                type: '新闻',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/396',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=396',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=396',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: '南宁IT互联网公司，有哪些是双休？',
                  href: '/node/394',
                  target: '_blank',
                },
                created: '2021-06-22',
                body: '双休毫无疑问在每个行业都是热门讨论的话题，在IT行业更是如此，常年的过度加班导致各种事件也是频繁上热搜。周末双休也成为了寻找一份工作不可忽视的环节。在应聘中，如果在同等条件下双休的工作制度给应聘者带来更大的吸引力，双休意味着有更多的个人时间安排给家人和自己。充分利用好周末不仅可以充实生活平衡工作，还可以提升技术水平和职业素养，为未来的自己提升更多的竞争优势。以下名单仅仅是交流群中调查填写的名单，数据未经考究不权威，仅供参考，提供给想了解更多IT公司相关双休背景的小伙伴，此数据会不断更新在这里。编号是否双休公司名称备注1是万兴科技2是南宁富桂精密工业有限公司（富士康）没事双休有事不违反六休一3是广投智能科技有限公司4是南宁太初5是PSAChina6是南宁市艾若思文化传播有限公司7是东信8是亚信9是与或非10是戴文信息科技11是中教教育12是壹智能13否帮帮信心14是西安点通15是上海观安16是云宝宝大数据有限责任公司17是超图有限责任公司',
                type: '新闻',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/394',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=394',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=394',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
                  href: '/node/387',
                  target: '_blank',
                },
                created: '2021-05-14',
                body: '在特定情况下，有些接口无法提供一次性的请求达到目的，需要并行的多次请求，当所有请求都完成时，才进行下一步的逻辑。forkJoin在这里是比较适合这种操作的。值得注意的是，Angular5和rxjs5.5.2的版本导入的对象和最新的版本有区别。//...import{forkJoin}from&#039;rxjs/observable/forkJoin&#039;;//...exportclassSampleService{deleteMultVote(items){constarr:any=[];items.forEach(item=&amp;gt;{arr.push(this.http.delete(item,this.httpOption))});returnforkJoin(...arr);}}注入该服务之后，在具体的组件使用：updateVote(){this.sampleService.deleteMultVote(datas).subscribe(res=&amp;gt;{console.log(res)//yourcode},error=&amp;gt;{console',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/387',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=387',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=387',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Drupal 8 Ajax 弹出框可监听利用的 Event 事件',
                  href: '/node/386',
                  target: '_blank',
                },
                created: '2021-05-14',
                body: 'Drupal提供了一些自定义的Ajaxmodal弹出框事件，通过监听这些事件，可以做一些你想做的事情。这些事件包括：dialog:beforecreatedialog:aftercreatedialog:beforeclosedialog:afterclose这些自定义的event事件都绑定在window对象上，下面是示例的代码，可以使用在自定义的主题或者模块中：(function($,Drupal){Drupal.behaviors.sampleAction={attach:function(context){$(window).once().on(&#039;dialog:aftercreate&#039;,function(dialog,$element,settings){console.log(&#039;modalisopened!&#039;);});}};})(jQuery,Drupal);',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/386',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=386',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=386',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Drupal8 用户登录后自定义重定向',
                  href: '/node/385',
                  target: '_blank',
                },
                created: '2021-05-14',
                body: 'Drupal官网有很多的模块可以提供用户登录后进行自定义重定向路由，基于某种需求，需要在自己的模块中实现，值得注意的是Drupal8和Drupal7的实现方式有所差异，以下是Drupal8hook代码实现部分：useDrupal\\Core\\Form\\FormStateInterface;useDrupal\\Core\\Url;/***Implementshook_form_FORM_ID_alter().*/functionMYCUSTOMMODULE_form_user_login_form_alter(&amp;amp;$form,FormStateInterface$form_state,$form_id){$form[&#039;#submit&#039;][]=&#039;MYCUSTOMMODULE_user_login_form_submit&#039;;}/***Customsubmithandlerfortheloginform.*/functionMYCUSTOMMODULE_user_login_form_submit($form,',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/385',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=385',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=385',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: '如何更改 git commit 某个历史提交信息',
                  href: '/node/383',
                  target: '_blank',
                },
                created: '2021-05-11',
                body: '由于某种原因，需要更新历史提交的commit信息，如果想更新最新的提交，可以使用命令：gitcommit--amend比如想更新最后一个commit:updatezhihulink，输入命令之后输入i直接进入编辑模式：编辑好之后，退出编辑模式:wq保存想更新倒数的某条commit略微麻烦，需要几个步骤，使用的命令是，HEAD~x表示倒数第几条之后的commit需要编辑：gitrebase-iHEAD~2回车进入编辑模式，返回的信息显示倒数两条commit，这时我们只需要把想更新的commit前面的pick改为edit即可：回车会返回下一步的提示信息输入命令，重新编辑commitgitcommit--amend再输入gitrebase--continue',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/383',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=383',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=383',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label:
                    '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
                  href: '/node/382',
                  target: '_blank',
                },
                created: '2021-05-10',
                body: '查了些文档文章，GithubActions有几个重要的信息如下：通过Docker隔离每个workflow独享1核虚拟CPU,3.75GB内存，包括网络权限和100GB磁盘在yml配置文件中可以使用上下文环境变量，比如分支或者不公开变量每个workflow排队和执行时间最多58分钟，最多可以包含100个action，每个仓库同一时刻只能运行两个workflow下例以一个Angular的示例应用来演示：部署可以有很多方式，此次使用云服务器的SSH账户密码来部署，这些敏感信息存在仓库的Secrets里面，在yml里面可以读取。目标：当master分支发生push事件时，build并部署代码到sit测试环境；当prod分支有PR请求合并时，build并部署代码到prod正式环境；定义sitworkflow在仓库根目录新建.github/workflows/sit.ymlname:Buildappanddeploytohuaweisiton:push:#监听push操作branches:[master]#指定分支jobs:build:#usingUbunturuns-on:ubuntu-',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/382',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=382',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=382',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Drupal jsonapi 初级入门实践',
                  href: '/node/377',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: '前期工作首先你得有一个Drupal站点进入JSON:API配置页面，选择【接受JSON:API的创建、读、更新和删除所有操作。】配置CORS复制sites/default/default.services.yml到sites/default/services.yml修改其中的配置cors.config:enabled:true#Specifyallowedheaders,like&#039;x-allowed-header&#039;.allowedHeaders:[&#039;x-csrf-token&#039;,&#039;authorization&#039;,&#039;content-type&#039;,&#039;accept&#039;,&#039;origin&#039;,&#039;x-requested-with&#039;]#Specifyallowedrequestmethods,specify[&#039;*&#039;]toallowallpossibleones.allowedMethods:[&#039;*&#039;]#',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/377',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=377',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=377',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'RxJS switchMap 在 Drupal api中的应用',
                  href: '/node/376',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: '在Angular中，可以把想要的东西转换成流，流是一种更加友好的方式来管理你的数据。Angular的httpget请求返回的是Observable，当post登录之后：login(userName:string,passWord:string):Observable&amp;lt;any&amp;gt;{consthttpOptions={headers:newHttpHeaders({Accept:&#039;application/vnd.api+json&#039;,&#039;Content-type&#039;:&#039;application/json&#039;,}),withCredentials:true,};returnthis.http.post&amp;lt;any&amp;gt;(`${this.apiService.apiUrl}${this.apiService.loginPath}?_format=json`,{name:userName,pass:passWord,},httpOptions);}返回当前用户uid、name和token信息：{',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/376',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=376',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=376',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Angular CLI 如何配置代理 Drupal api 和静态文件',
                  href: '/node/375',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: 'Angular前端在本地开发的时候，时刻与Drupal后端请求数据，其中包括API和静态的图片文件资源，没有配置Proxy代理的情况下，你可能需要频繁的注释本地切换API地址调式：exportconstenvironment={//apiUrl:&#039;http://localhost:4200&#039;,apiUrl:&#039;https://api.zhaobg.com&#039;,production:false,};静态文件没有一个比较便捷的方式来显示，这在开发过程中带来一定的麻烦：通过angularwebpack内置代理，配置API代理和静态文件访问代理，免去来回切换注释代码调式的麻烦。目标ngserve启动应用后，自动开启proxy代理，api和静态文件能够读取线上服务器数据资源。第一步在应用根目录新建文件config/proxy.config.jsconstPROXY_CONFIG=[{context:[&quot;/user&quot;,&quot;/api&quot;,&quot;/sites&quot;,],target:&quot;https://api',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/375',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=375',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=375',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label:
                    '分享几款不错的 Web 地图应用 UI 设计，并用 Drupal Jsonapi 实现了个 Demo',
                  href: '/node/374',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: '',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/374',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=374',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=374',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Angular constructor 和 ngOnInit 有什么区别？',
                  href: '/node/373',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: '这是Angular技术面试中经常问到的问题，简单回答就是constructor构造函数用来编写依赖项和初始化成员，而在ngOnInit中编写逻辑。为什么不能够将服务或者业务逻辑写在constructor构造函数中？这是因为我们的业务逻辑代码需要等待所有的依赖项和组件都被加载，不然会出现值找不到的情况。constructor(privatefb:FormBuilder,publicuserState:UserState,privaterouter:Router,privateapiService:ApiService,publicscreenState:ScreenState,privatetitleService:TitleService,privateappState:AppState,publicbranding:BrandingState){}ngOnInit():void{this.titleService.setTitle(&#039;欢迎登录！&#039;);this.userForm=this.fb.group({name:[&#039;&#039;,',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/373',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=373',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=373',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label:
                    'Angular ng-content、ng-template、ng-container 之间的区别',
                  href: '/node/372',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: '刚开始学Angular的时候，会觉得这三个指令很像，每一个都具有不一样的作用，拿实际的例子，看看他们之间具体的区别。ng-content&amp;lt;div[ngClass]=&quot;classes&quot;&amp;gt;&amp;lt;ng-content&amp;gt;&amp;lt;/ng-content&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;app-bg[classes]=&quot;[&#039;bg-fill-width&#039;,&#039;wave-wrapper&#039;]&quot;&amp;gt;&amp;lt;mat-iconclass=&quot;wave&quot;svgIcon=&quot;wave&quot;&amp;gt;&amp;lt;/mat-icon&amp;gt;&amp;lt;/app-bg&amp;gt;ng-content置于Angular组件中，相当于占位符，外部组件在调用的时候，会把真正的内容放置到ng-content所占位的地方。这样就可以灵活的使用动态的外部数据来填充到指定的结构里面',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/372',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=372',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=372',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label: 'Angular 有哪几种不同类型的绑定',
                  href: '/node/371',
                  target: '_blank',
                },
                created: '2021-05-03',
                body: 'Angular数据从父组件自上而下通过属性绑定流向子组件，而Event事件绑定刚好相反。单向数据绑定1、大胡子插值绑定通过使用大胡子{{}}表达式嵌入标记文本中，花括号之间的文本通常是组件属性的名字：&amp;lt;divclass=&quot;footer-bottomtext-centerp-y-sm&quot;&amp;gt;&amp;lt;divclass=&quot;container&quot;&amp;gt;&amp;lt;divclass=&quot;brand&quot;fxLayoutAlign=&quot;space-betweencenter&quot;&amp;gt;&amp;lt;h2class=&quot;mat-h2m-bottom-0&quot;&amp;gt;{{branding.footer.logo.label}}&amp;lt;/h2&amp;gt;&amp;lt;p&amp;gt;©{{utilities.fullYear}}{{branding.footer.copyRight}}&amp;lt;/p&amp;gt;&amp;lt;/',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/371',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=371',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=371',
                      },
                    ],
                  },
                ],
              },
              {
                link: {
                  label:
                    'Jsona 一款转换 jsonapi 数据的工具库，也算是解放 Drupal jsonapi 反序列化的利器',
                  href: '/node/368',
                  target: '_blank',
                },
                created: '2021-05-01',
                body: '有过DrupalJSONAPI使用经验的开发者来说，处理请求的json数据特别的繁琐，特别是有些实体字段多重依赖和嵌套，需要自定义的构建函数来提取组合数据。且看看JSONAPI返回的数据：https://api.zhaobg.com/api/v1/node/case?fields[node--case]=title,body,created,medias,field_tags,drupal_internal__nid,path&amp;amp;include=medias,medias.field_media_image,field_tags&amp;amp;fields[file--file]=uri&amp;amp;fields[taxonomy_term--industry]=name一个文章的内容类型，其中图片字段使用了媒体实体，其中有多层相关关联和嵌套，要想获取该内容的图片路径，需要经过复杂的映射匹配才能得到。或者你也遇到过，需要往JSONAPI请求接口提交数据时，必须符合JSONAPI的标准规范，而这个标准规范也比较繁琐，例如新增一个实体内容：{&quot;data',
                type: '博客',
                actions: [
                  {
                    type: 'share',
                    params: {
                      url: '/node/368',
                    },
                  },
                  {
                    type: 'download',
                    elements: [
                      {
                        type: 'link',
                        label: 'Doc',
                        icon: {
                          name: 'description',
                        },
                        href: '/print/view/word_docx/print/doc?id=368',
                      },
                      {
                        type: 'link',
                        label: 'Pdf',
                        icon: {
                          name: 'picture_as_pdf',
                        },
                        href: '/print/view/pdf/print/pdf?id=368',
                      },
                    ],
                  },
                ],
              },
            ],
            pager: {
              itemsPerPage: 20,
              currentPage: 1,
              totalItems: 22,
            },
          },
        },
        form: {},
        vauleChange$: {},
      },
      {
        label: '日历',
        icon: {
          svg: 'calendar-month-outline',
        },
        content: {
          type: 'full-calendar',
          spacer: 'xxl',
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
                  label: '文章',
                  value: 'article',
                },
                {
                  label: '博客',
                  value: 'blog',
                },
                {
                  label: '会议',
                  value: 'metting',
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
                  label: '文章',
                  value: 'article',
                },
                {
                  label: '博客',
                  value: 'blog',
                },
                {
                  label: '会议',
                  value: 'metting',
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
            drawer: true,
            apiBak: '/api/v1/demo',
            options: {
              events: [
                {
                  title: '使用 DEVTOOLS 对 ANGULAR 前端应用性能分析优化',
                  event: 'meeting',
                  start: '2024-02-19T09:57:28.011Z',
                  user: 'Johnson',
                  className: 'bg-primary',
                },
                {
                  title: '使用 TAKEUNTIL 操作符管理 ANGULAR 组件的订阅',
                  event: 'drupal',
                  start: 1709114248011,
                  user: 'Johnson',
                  className: 'bg-accent',
                },
                {
                  title: '你应该了解的 ANGULAR 最佳实践',
                  event: 'drupal',
                  start: 1709027848011,
                  user: 'Johnson',
                  className: 'bg-warn',
                },
                {
                  title: 'ANGULAR 5 RXJS 5.5.2 多个 HTTP 并行 FORKJOIN 请求',
                  event: 'drupal',
                  start: 1708768648011,
                  user: 'Johnson',
                  className: 'bg-warn',
                },
                {
                  title: 'DRUPAL 8 AJAX 弹出框可监听利用的 EVENT 事件',
                  event: 'drupal',
                  start: 1708682248011,
                  user: 'Johnson',
                  className: 'bg-pink',
                },
                {
                  title: 'DRUPAL8 用户登录后自定义重定向',
                  event: 'drupal',
                  start: 1708509448011,
                  user: 'Johnson',
                  className: 'bg-orange',
                },
                {
                  title: '如何更改 GIT COMMIT 某个历史提交信息',
                  event: 'drupal',
                  start: 1708595848011,
                  user: 'Johnson',
                  className: 'bg-yellow',
                },
                {
                  title:
                    '开源项目使用 GITHUB ACTIONS 自动化测试部署 ANGULAR 应用到 ECS 服务器',
                  event: 'drupal',
                  start: 1708595848011,
                  user: 'Johnson',
                  className: 'bg-red',
                },
                {
                  title: 'DRUPAL JSONAPI 初级入门实践',
                  event: 'drupal',
                  start: 1709027848011,
                  user: 'Johnson',
                  className: 'bg-purple',
                },
                {
                  title: 'RXJS SWITCHMAP 在 DRUPAL API中的应用',
                  event: 'drupal',
                  start: 1708855048011,
                  user: 'Johnson',
                  className: 'bg-indigo',
                },
                {
                  title: '五年了，再谈南宁和深圳的差距',
                  event: 'drupal',
                  start: 1708768648011,
                  user: 'Johnson',
                  className: 'bg-blue',
                },
                {
                  title:
                    '没想到吧？2021年南宁IT互联网相关工作者最近一份工作求职渠道最受欢迎的竟然是它',
                  event: 'drupal',
                  start: 1707818248011,
                  user: 'Johnson',
                  className: 'bg-cyan',
                },
                {
                  title: '南宁IT互联网行业薪资福利待遇如何？',
                  event: 'drupal',
                  start: 1708163848011,
                  user: 'Johnson',
                  className: 'bg-teal',
                },
                {
                  title: '南宁IT互联网公司，有哪些是双休？',
                  event: 'drupal',
                  start: 1707731848011,
                  user: 'Johnson',
                  className: 'bg-green',
                },
                {
                  title:
                    'JSONA 一款转换 JSONAPI 数据的工具库，也算是解放 DRUPAL JSONAPI 反序列化的利器',
                  event: 'drupal',
                  start: 1707472648011,
                  user: 'Johnson',
                  className: 'bg-light-green',
                },
                {
                  title: 'ANGULAR 有哪几种不同类型的绑定',
                  event: 'drupal',
                  start: 1707645448011,
                  user: 'Johnson',
                  className: 'bg-brown',
                },
                {
                  title:
                    'ANGULAR NG-CONTENT、NG-TEMPLATE、NG-CONTAINER 之间的区别',
                  event: 'drupal',
                  start: 1707645448011,
                  user: 'Johnson',
                  className: 'bg-grey',
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
      },
      {
        label: '用户登录',
        icon: {
          svg: 'login',
        },
        content: {
          type: 'login',
        },
      },
      {
        label: '位置',
        icon: {
          svg: 'map-marker-outline',
        },
        content: {
          type: 'location',
          title: {
            label: '我的位置',
            style: 'style-v1',
            classes: 'm-bottom-0',
          },
          style: {
            height: '500px',
          },
          bg: {
            classes: '',
          },
          classes: '',
          city: '南宁市',
          elements: [
            {
              company: {
                setCenter: true,
                address: '高新区8号创客城',
              },
            },
          ],
        },
      },
      {
        label: '404',
        icon: {
          svg: 'text-search-variant',
        },
        content: {
          type: '404',
          img: {
            src: '/assets/images/404.svg',
            alt: '404 not found!',
          },
          bg: {
            classes: '',
          },
          classes: '',
          text: {
            spacer: 'none',
            title: {
              label: 'OH!NO <br>页面没有找到',
              style: 'style-v1',
              classes: 'mat-display-1',
            },
            body: '很抱歉，您请求的页面可能已经被移除、更改名称或暂时无法使用。在查找更多信息之前，您可以尝试以下操作：<ul class="list-done"><li>检查您输入的URL是否正确</li><li>在浏览器中清除缓存和Cookie</li><li>尝试在不同的浏览器或设备上打开页面</li></ul><p>我们非常感谢您对我们的关注和理解，我们会尽快解决问题并让我们的页面再次正常工作。</p>',
            actionsAlign: 'center center',
            actions: [
              {
                label: '回到首页',
                href: '/home',
                type: 'btn',
                mode: 'raised',
                color: 'primary',
              },
            ],
          },
        },
      },
    ],
  },
  {
    label: 'Drupal',
    id: 'drupal',
    elements: [
      {
        label: '问答',
        content: {
          type: 'question',
          title: '作为一个前端开发人员，如何让自己保持学习的热忱并坚持下去？',
          body: '前端技术不断更迭，日新月异，如何保持学习的心态。',
          topic: {
            elements: [
              {
                label: '前端',
              },
              {
                label: 'Angular',
              },
            ],
          },
          params: {
            comment: {
              type: 'comment--answer',
              attributes: {
                entity_type: 'node',
                field_name: 'answer',
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
                    type: 'node--question',
                    id: 'b59a2767-89b8-418d-91fe-6f0e6a5638ec',
                  },
                },
              },
            },
          },
          editor: {
            action: {
              label: '发布回答',
            },
            succes: {
              label: '成功发布！',
            },
          },
        },
        isAsked: false,
        showEditor: true,
        comments: [
          {
            author: {
              img: {
                src: '/assets/images/avatar/01.jpeg',
                style: {
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                },
                alt: '小南',
              },
              align: 'center start',
              id: 'b5f0ed94-2ebe-40e9-be07-f480efb50994',
              title: '小南',
              subTitle: '2024-02-19 17:57:28',
            },
            time: '2024-02-19 17:57:28',
            id: '24213e00-d4b8-4ece-bbea-a588efcc7d8d',
            content:
              '<p>设定具体的学习目标：将学习分解为小而可管理的目标，并为每个目标设定明确的时间表和标准。这样，你可以看到自己的进展，并感到满足和激励。寻找灵感和挑战：保持对前端技术的好奇心，主动寻找新的灵感和挑战。参加技术交流会议、阅读相关的博客和文章，或加入社区讨论可以帮助你保持兴趣和动力。关注个人发展：思考自己的职业发展和长期目标，明确你希望在前端领域取得的成就。将学习看作是实现这些目标的关键步骤，这种意识将激励你持续学习和进步。</p>',
            child: [
              {
                author: {
                  img: {
                    src: '/assets/images/avatar/02.jpeg',
                    style: {
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                    },
                    alt: 'root',
                  },
                  align: 'center start',
                  id: '15765815-07f2-4d7d-8142-cb598f82af2e',
                  title: 'root',
                  subTitle: '2024-02-19 17:57:28',
                },
                time: '2024-02-19 17:57:28',
                id: 'bbbe5e9f-9b85-421e-a839-7d50be0eb7ed',
                content:
                  '<p><ul class="list-done"><li>探索不同的学习资源：尝试不同的学习资源，如在线教程、视频教程、书籍、实践项目等。不同的学习方法可以帮助你从不同的角度理解和应用前端技术，保持学习的新鲜感。</li><li>参与开源项目和社区：积极参与开源项目和社区，与其他开发者互动和合作。这样你可以学习到新的技术和最佳实践，同时拓展人脉和交流经验，激发学习的热情。</li><li>持续实践和项目驱动：通过实际项目的开发和实践，将学到的知识应用到实际场景中。实践中的挑战和解决方案将帮助你不断提升技能，并加深对前端开发的理解和热爱。</li></ul></p>',
                child: [],
                level: 2,
              },
            ],
            level: 1,
          },
          {
            author: {
              img: {
                src: '/assets/images/avatar/03.jpeg',
                style: {
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                },
                alt: '表歌',
              },
              align: 'center start',
              id: 'd5fb03cb-abca-43ba-baa5-a162a576e67a',
              title: '表歌',
              subTitle: '2024-02-19 17:57:28',
            },
            time: '2024-02-19 17:57:28',
            id: '2582f1b8-d91b-4a73-86ac-050fda0b10d1',
            content:
              '<p>定期回顾和评估：定期回顾自己的学习进展和成果，对已经学到的知识和技能进行评估。这样可以看到自己的进步，并找出需要改进的领域，保持学习的动力。设定奖励机制：为自己设定奖励机制，当达到一定的学习目标或突破难题时给予自己奖励。这可以是一次小型庆祝、购买一本新书或者做一些自己喜欢的事情，让学习变得有趣和值得期待。寻找学习伙伴：与其他</p>',
            child: [],
            level: 1,
          },
        ],
      },
      {
        label: '联系表单',
        content: {
          type: 'contact-us-1v1',
          text: {
            title: {
              label: '联系我们',
              style: 'style-v1',
              classes: 'mat-display-1',
            },
            classes: 'text-light',
            body: '如果您有任何需要帮助，请联系我们！',
          },
          classes: 'text-center',
          bg: {
            classes: '',
          },
          params: {
            webform_id: 'contact',
          },
          form: [
            {
              key: 'form',
              className: 'm-bottom-sm',
              fieldGroupClassName: 'display-flex flex-wrap',
              fieldGroup: [
                {
                  type: 'input',
                  key: 'name',
                  className: 'width-40 m-right-sm',
                  templateOptions: {
                    label: '姓名',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'email',
                  className: 'width-40 m-right-sm',
                  templateOptions: {
                    label: '邮箱',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'subject',
                  className: 'width-40 m-right-sm',
                  templateOptions: {
                    label: '主题',
                    required: true,
                  },
                },
                {
                  type: 'textarea',
                  key: 'message',
                  className: 'width-100',
                  templateOptions: {
                    label: '内容',
                    rows: 8,
                    required: true,
                  },
                },
              ],
            },
          ],
          action: {
            type: 'btn',
            color: 'primary',
            mode: 'raised',
            label: '提交',
          },
          content: [
            {
              type: 'text',
              spacer: 'none',
              classes: 'text-left',
              body: '邮箱：349255833@qq.com<br>电话：0771-6890xxx<br>地址：创客城2栋<br>',
            },
          ],
          contentStyle: {
            background:
              'url("/assets/images/showcase/pattern-02.png") no-repeat center center',
          },
        },
      },
      {
        label: '普通列表',
        content: {
          type: 'list-2v1',
          title: {
            label: '最新文章',
            style: 'style-v4',
            classes: 'mat-display-1',
          },
          params: {
            apiBak: '/api/v2/xxx',
          },
          bg: {
            classes: '',
          },
          classes: '',
          more: {
            label: '查看更多',
            href: '#',
            mode: 'raised',
            color: 'primary',
          },
          elements: [
            {
              link: {
                label: 'ChartGPT：开启自动生成数据可视化的新时代',
                href: '#',
              },
              subTitle: '人工智能与数据科学',
              body: '探索ChartGPT，一种基于生成模型的技术，它能够自动从数据中生成精美的数据可视化图表。本文介绍了ChartGPT的工作原理、应用场景和潜在的影响，展示了它在数据分析和可视化领域的巨大潜力。',
              img: {
                src: '/assets/images/16-9/business-06.jpg',
                alt: '',
              },
            },
            {
              link: {
                label: 'ChartGPT vs. 传统数据可视化工具：新老对决',
                href: '#',
              },
              subTitle: '技术比较与评估',
              body: 'ChartGPT作为一种新兴的数据可视化技术，与传统的数据可视化工具展开竞争。本文比较了ChartGPT与传统工具在可视化质量、自动化程度和用户体验等方面的异同，并探讨了它们在不同场景下的适用性和优劣势。',
              img: {
                src: '/assets/images/16-9/business-07.jpg',
                alt: '',
              },
            },
            {
              link: {
                label: 'ChartGPT应用实践：数据洞察的新探索',
                href: '#',
              },
              subTitle: '数据分析与应用',
              body: '通过实际案例，本文展示了ChartGPT在数据洞察和决策支持方面的应用实践。从金融、市场营销到医疗健康，ChartGPT为数据分析师和决策者提供了一种创新的工具，帮助他们从海量数据中发现有价值的见解，并做出更准确的决策。',
              img: {
                src: '/assets/images/16-9/business-13.jpg',
                alt: '',
              },
            },
          ],
        },
      },
      {
        label: '分类列表',
        content: {
          type: 'taxonomy-list',
          pager: {
            itemsPerPage: 20,
          },
          elements: [
            {
              type: 'showcase-3v3',
              title: {
                label: '使用 DevTools 对 Angular 前端应用性能分析优化',
                href: '/node/417',
              },
              bg: {
                classes: '',
              },
              classes: '',
              spacer: 'none',
              showImage: true,
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/417',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto1.jpg',
                  alt: '使用 DevTools 对 Angular 前端应用性能分析优化',
                },
              },
              date: '2022-01-08T10:14:07+00:00',
              category: '前端茶馆',
              body: '<h4 id="%E4%BD%BF%E7%94%A8-lighthouse-%E8%AF%84%E5%88%86">使用 lighthouse 评分</h4><p>以南宁IT派[www.nnitpai.com]为例记录分析优化过程，使用 Devtools lighthouse 对首页进行综合的评分：<br /><img alt="image 0" data-entity-type="file" data-entity-uuid="c397a1f3-b764-4fd2-ab09-98d61f2a4dbd" height="603" src="/sites/default/files/inline-images/image_0.png" width="940" /><br />性能评分勉强及格差强人意，切换到 performance 性能选项卡:<br /><img alt="image 1" data-entity-type="file" data-entity-uuid="17526354-c3f6-45ab-8d28-8100cd1d10e8" height="506" src="/sites/default/files/inline-images/image_1.png" width="951" /><br />记录的同时，可以依次滚动页面到底部，暂停看看分析结果：<br /><img alt="image 2" data-entity-type="file" data-entity-uuid="2349f2bb-d08a-4e5e-a6fa-8ca891b91022" height="422" src="/sites/default/files/inline-images/image_2.png" width="949" /><br />发现一推很深的函数调用，放大具体看看：（记得要用本地开发环境来查看，这样可以方便看未编译版本中具体的组件或者函数）<br /></p>',
              details: {
                label: '查看更多',
                href: '/node/417',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                href: '/node/415',
              },
              bg: {
                classes: '',
              },
              classes: '',
              spacer: 'none',
              showImage: true,
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/415',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto2.jpg',
                  alt: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                },
              },
              date: '2022-01-03T16:00:27+00:00',
              category: 'Drupal 自习室',
              body: '<section data-tool="mdnice编辑器" data-website="https://www.mdnice.com" id="nice"><p data-tool="mdnice编辑器">在上一篇文章中，有个知友评论说是要 takeUntil 来管理订阅更加清晰明了，那我们就探探究竟。</p><p data-tool="mdnice编辑器">在 Rxjs 中，可以使用 takeUntil 来控制另外一个 Observable 对象数据的产生。使用 takeUntil，上游的数据直接转手给下游，直到takeUntil的参数吐出一个数据或者完结。</p><p data-tool="mdnice编辑器">就像一个水龙头开关，一开始是打开的状态，上游的数据一开始直接流到下游，只要 takeUntil 一旦触发吐出数据，水龙头立刻关闭。</p><p data-tool="mdnice编辑器">利用这点，可以在订阅时时，在管道中添加 takeUntil，在组件销毁时吐出数据，这样这些订阅就会立刻关闭，也就达到回收内存的作用。</p><h4 data-tool="mdnice编辑器">改造之前：</h4><pre data-tool="mdnice编辑器"><code class="language-javascript">export class ExampleComponent implements OnInit, OnDestroy {  subscription1: Subscription;  subscription2: Subscription;  ngOnInit(): void {    this.subscription1 = observable1.subscribe(...);    this.subscription2 = observable2.subscribe(...);  }  ngOnDestroy() {    this.subscription1.unsubscribe();    this.subscription2.unsubscribe();  }}</code></pre><h4 data-tool="mdnice编辑器">改造之后：</h4><pre data-tool="mdnice编辑器"><code class="language-javascript">export class ExampleComponent implements OnInit, OnDestroy {  destroy$: Subject&lt;boolean&gt; = new Subject&lt;boolean&gt;();  ngOnInit(): void {    observable1      .pipe(takeUntil(this.destroy$))      .subscribe(...);    observable2      .pipe(takeUntil(this.destroy$))      .subscribe(...);  }  ngOnDestroy() {    this.destroy$.next(true);    this.destroy$.unsubscribe();  }}</code></pre><h4 data-tool="mdnice编辑器">总结</h4><p data-tool="mdnice编辑器">对比下来，你会发现takeUntil操作符会清晰简洁很多，你只需要把<code>takeUntil(this.destroy$)</code>加入到想要组件销毁时停止订阅的管道，即可统一管理，感谢这位知友提供的思路。</p></section>',
              details: {
                label: '查看更多',
                href: '/node/415',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: '你应该了解的 Angular 最佳实践',
                href: '/node/414',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/414',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto3.jpg',
                  alt: '你应该了解的 Angular 最佳实践',
                },
              },
              date: '2022-01-03T11:19:52+00:00',
              category: '前端茶馆',
              body: '<p>遵循最佳实践可以让你的 Angular 应用保持性能优越，使团队的代码风格一致，以下代码摘自南宁IT派官网项目。</p><h3 id="%E6%8A%8A%E9%BB%98%E8%AE%A4%E7%9A%84%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E8%AE%BE%E7%BD%AE%E4%B8%BA-onpush">把默认的变更检测设置为 OnPush</h3><p>Angular 默认变更检测是 Defualt，只要在组件中有任意一个值发生改变或者 Dom中有事件的更新都会触发整个应用自上而下的变更检测，使用&nbsp;<code data-backticks="1">OnPush</code>&nbsp;的方式使大型的应用的性能得到很大的提升。<br />导入 ChangeDetectionStrategy 之后，设置为OnPush</p></p>',
              details: {
                label: '查看更多',
                href: '/node/414',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: 'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
                href: '/node/387',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/387',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto4.jpg',
                  alt: 'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
                },
              },
              date: '2021-05-20T03:10:01+00:00',
              category: '前端茶馆',
              body: '<p>在特定情况下，有些接口无法提供一次性的请求达到目的，需要并行的多次请求，当所有请求都完成时，才进行下一步的逻辑。<code>forkJoin</code>&nbsp;在这里是比较适合这种操作的。</p><p>值得注意的是，Angular 5 和 rxjs 5.5.2的版本导入的对象和最新的版本有区别。</p>',
              details: {
                label: '查看更多',
                href: '/node/387',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: 'Drupal 8 Ajax 弹出框可监听利用的 Event 事件',
                href: '/node/386',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/386',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto5.jpg',
                  alt: 'Drupal 8 Ajax 弹出框可监听利用的 Event 事件',
                },
              },
              date: '2021-05-14T15:30:12+00:00',
              category: 'Drupal 自习室',
              body: 'Drupal 提供了一些自定义的Ajax modal 弹出框事件，通过监听这些事件，可以做一些你想做的事情。',
              details: {
                label: '查看更多',
                href: '/node/386',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: 'Drupal8 用户登录后自定义重定向',
                href: '/node/385',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/385',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto6.jpg',
                  alt: 'Drupal8 用户登录后自定义重定向',
                },
              },
              date: '2021-05-14T15:28:25+00:00',
              category: 'Drupal 自习室',
              body: 'Drupal 官网有很多的模块可以提供用户登录后进行自定义重定向路由，基于某种需求，需要在自己的模块中实现，值得注意的是Drupal8和Drupal7的实现方式有所差异。',
              details: {
                label: '查看更多',
                href: '/node/385',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: '如何更改 git commit 某个历史提交信息',
                href: '/node/383',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/383',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto7.jpg',
                  alt: '如何更改 git commit 某个历史提交信息',
                },
              },
              date: '2021-05-11T13:42:07+00:00',
              category: '前端茶馆',
              body: '由于某种原因，需要更新历史提交的commit信息，如果想更新最新的提交，可以使用命令：git commit --amend',
              details: {
                label: '查看更多',
                href: '/node/383',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label:
                  '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
                href: '/node/382',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/382',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto8.jpg',
                  alt: '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
                },
              },
              date: '2021-05-10T15:48:22+00:00',
              category: '前端茶馆',
              body: 'Github actions 从2019年就免费开放给个人开源项目使用，对于自动化开放测试部署，开发者一定非常的熟悉，如果把中间这项流程做好，不仅节省了大量的人力也大大加快了开发效率，在配置完善的情况下可以提高代码质量。',
              details: {
                label: '查看更多',
                href: '/node/382',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: 'Drupal jsonapi 初级入门实践',
                href: '/node/377',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/377',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto9.jpg',
                  alt: 'Drupal jsonapi 初级入门实践',
                },
              },
              date: '2021-05-03T15:43:45+00:00',
              category: 'Drupal 自习室',
              body: '本文介绍了Drupal jsonapi 相关的接口，使用不同的参数返回需要的实体字段，特别是相关字段的获取。',
              details: {
                label: '查看更多',
                href: '/node/377',
                mode: 'raised',
                color: 'primary',
              },
            },
            {
              type: 'showcase-3v3',
              title: {
                label: 'RxJS switchMap 在 Drupal api中的应用',
                href: '/node/376',
              },
              spacer: 'none',
              showImage: true,
              bg: {
                classes: '',
              },
              classes: '',
              feature: {
                fullIcon: 'fullscreen',
                openIcon: 'open_in_new',
                link: '/node/376',
                ratios: 'media-16-9',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto10.jpg',
                  alt: 'RxJS switchMap 在 Drupal api中的应用',
                },
              },
              date: '2021-05-03T15:28:11+00:00',
              category: 'Drupal 自习室',
              body: '在 Angular 中，可以把想要的东西转换成流，流是一种更加友好的方式来管理你的数据。Angular 的 http get请求返回的是 Observable.',
              details: {
                label: '查看更多',
                href: '/node/376',
                mode: 'raised',
                color: 'primary',
              },
            },
          ],
          sidebar: [
            {
              content: {
                type: 'media-list',
                title: '热门文章',
                elements: [
                  {
                    link: {
                      label: '使用 DevTools 对 Angular 前端应用性能分析优化',
                      href: '/node/417',
                    },
                    img: {
                      src: '../assets/images/showcase/blog1-large.jpeg',
                      alt: '',
                    },
                    changed: '2024-02-19',
                  },
                  {
                    link: {
                      label: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                      href: '/node/415',
                    },
                    img: {
                      src: '../assets/images/showcase/blog2-large.jpeg',
                      alt: '',
                    },
                    changed: '2024-02-19',
                  },
                  {
                    link: {
                      label: '你应该了解的 Angular 最佳实践',
                      href: '2024-02-19',
                    },
                    img: {
                      src: '../assets/images/showcase/blog3-large.jpeg',
                      alt: '',
                    },
                    changed: '2024-02-19',
                  },
                  {
                    link: {
                      label:
                        'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
                      href: '2024-02-19',
                    },
                    img: {
                      src: '../assets/images/showcase/blog4-large.jpeg',
                      alt: '',
                    },
                    changed: '2024-02-19',
                  },
                ],
              },
            },
            {
              type: 'menu-list',
              title: '分类',
              elements: [
                {
                  link: {
                    href: '/frontend',
                    label: '前端茶馆',
                  },
                  label: '8',
                },
                {
                  link: {
                    href: '/drupal',
                    label: 'Drupal 自习室',
                  },
                  label: '5',
                },
              ],
            },
          ],
        },
      },
      {
        label: '分类列表 Thin',
        content: {
          type: 'taxonomy-thin-list',
          sidebar: [
            {
              type: 'menu-list',
              title: '内容分类',
              elements: [
                {
                  link: {
                    href: '',
                    label: 'Angular',
                  },
                  label: '8',
                },
                {
                  link: {
                    href: '',
                    label: 'Drupal',
                  },
                  label: '5',
                },
              ],
            },
            {
              type: 'menu-list',
              title: '文章分类',
              elements: [
                {
                  link: {
                    href: '',
                    label: '新闻',
                  },
                  label: '8',
                },
                {
                  link: {
                    href: '',
                    label: '技术',
                  },
                  label: '5',
                },
              ],
            },
          ],
          pager: {
            itemsPerPage: '20',
          },
          elements: [
            {
              type: 'list-thin',
              link: {
                label: '使用 DEVTOOLS 对 ANGULAR 前端应用性能分析优化',
                href: '/',
              },
              meta: [
                {
                  label: 'Johnson',
                },
                {
                  label: '2021-08-28',
                },
              ],
              actions: [
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
                        type: 'node--article',
                        id: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
                      },
                    },
                  },
                },
                {
                  type: 'share',
                  button: {
                    icon: 'share',
                    label: '分享',
                  },
                  params: {
                    url: '/',
                  },
                },
                {
                  type: 'download',
                  label: '下载',
                  icon: {
                    name: 'file_download',
                    inline: true,
                  },
                  elements: [
                    {
                      type: 'link',
                      label: 'Doc',
                      icon: {
                        name: 'description',
                      },
                      href: '#',
                    },
                    {
                      type: 'link',
                      label: 'Pdf',
                      icon: {
                        name: 'picture_as_pdf',
                      },
                      href: '#',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-thin',
              link: {
                label: '使用 TAKEUNTIL 操作符管理 ANGULAR 组件的订阅',
                href: '/',
              },
              meta: [
                {
                  label: 'Johnson',
                },
                {
                  label: '2021-08-28',
                },
              ],
              actions: [
                {
                  type: 'flag',
                  label: '收藏',
                  params: {
                    type: 'flagging--favorite',
                    entity_type: 'node',
                    entity_id: '1312',
                    relationships: {
                      flagged_entity: {
                        type: 'node--article',
                        id: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
                      },
                    },
                  },
                },
                {
                  type: 'share',
                  params: {
                    url: '/',
                  },
                },
                {
                  type: 'download',
                  elements: [
                    {
                      type: 'link',
                      label: 'Doc',
                      icon: {
                        name: 'description',
                      },
                      href: '#',
                    },
                    {
                      type: 'link',
                      label: 'Pdf',
                      icon: {
                        name: 'picture_as_pdf',
                      },
                      href: '#',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-thin',
              link: {
                label: '你应该了解的 ANGULAR 最佳实践',
                href: '/',
              },
              meta: [
                {
                  label: 'Johnson',
                },
                {
                  label: '2021-08-28',
                },
              ],
              actions: [
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
                        type: 'node--article',
                        id: 'cb31d69f-a95e-4c91-97d1-1169f82a10a5',
                      },
                    },
                  },
                },
                {
                  type: 'share',
                  button: {
                    icon: 'share',
                    label: '分享',
                  },
                  params: {
                    url: '/',
                  },
                },
                {
                  type: 'download',
                  label: '下载',
                  icon: {
                    name: 'file_download',
                    inline: true,
                  },
                  elements: [
                    {
                      type: 'link',
                      label: 'Doc',
                      icon: {
                        name: 'description',
                      },
                      href: '#',
                    },
                    {
                      type: 'link',
                      label: 'Pdf',
                      icon: {
                        name: 'picture_as_pdf',
                      },
                      href: '#',
                    },
                  ],
                },
              ],
            },
          ],
        },
      },
      {
        label: '视图列表',
        content: {
          type: 'view-list',
          spacer: 'none',
          params: {
            apiTypeBak: '/api/v1/event',
          },
          header: [
            {
              label: '标题',
              key: 'title',
            },
            {
              label: '分类',
              key: 'type',
            },
            {
              label: '日期',
              key: 'created',
              style: {
                textAlign: 'center',
                backgroundColor: 'rgba(0, 255, 51, 0.25)',
              },
            },
            {
              label: '详情',
              key: 'body',
              dialog: {
                shorten: 20,
                label: '更多',
              },
            },
            {
              label: '操作',
              key: 'actions',
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
              key: 'user',
              templateOptions: {
                multiple: true,
                search: true,
                hideSelected: true,
                label: '用户',
                options: [
                  {
                    value: 1,
                    label: 'Johnson',
                  },
                  {
                    value: 2,
                    label: '表歌',
                  },
                  {
                    value: 3,
                    label: '小南',
                  },
                ],
              },
            },
            {
              type: 'date-range',
              key: 'date',
              templateOptions: {
                label: '期间',
                value: '',
                placeholder: '选择发布日期',
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
          data: {
            canShow: true,
            pager: {
              current_page: 0,
              total_items: 22,
              total_pages: 2,
              items_per_page: 20,
            },
            table: {
              header: [
                {
                  label: '标题',
                  key: 'title',
                },
                {
                  label: '分类',
                  key: 'type',
                },
                {
                  label: '日期',
                  key: 'created',
                  style: {
                    textAlign: 'center',
                    backgroundColor: 'rgba(0, 255, 51, 0.25)',
                  },
                },
                {
                  label: '详情',
                  key: 'body',
                  dialog: {
                    shorten: 20,
                    label: '更多',
                  },
                },
                {
                  label: '操作',
                  key: 'actions',
                },
              ],
              elements: [
                {
                  url: '/node/452',
                  title: '使用 DevTools 对 Angular 前端应用性能分析优化',
                  created: '2022-01-08',
                  body: '使用lighthouse评分以南宁IT派[www.nnitpai.com]为例记录分析优化过程，使用Devtoolslighthouse对首页进行综合的评分：性能评分勉强及格差强人意，切换到performance性能选项卡:记录的同时，可以依次滚动页面到底部，暂停看看分析结果：发现一推很深的函数调用，放大具体看看：（记得要用本地开发环境来查看，这样可以方便看未编译版本中具体的组件或者函数）发现大部分的深度调用都与这个MenuComponent组件有关，不断的在调用刷新，可以看到一个executeTemplate这个函数，这个是angular对模板里面的变量或者函数执行计算值，已检测是否有变化，相应进行渲染。看看MenuComponent组件模板关键部分：&amp;lt;ng-container*ngIf=&quot;content&quot;&amp;gt;&amp;lt;header*ngIf=&quot;screen.eq(&#039;gt-sm&#039;)&quot;class=&quot;header&quot;#header&amp;gt;//&amp;lt;/',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/452',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=452',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=452',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/451',
                  title: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                  created: '2022-01-04',
                  body: '在上一篇文章中，有个知友评论说是要takeUntil来管理订阅更加清晰明了，那我们就探探究竟。在Rxjs中，可以使用takeUntil来控制另外一个Observable对象数据的产生。使用takeUntil，上游的数据直接转手给下游，直到takeUntil的参数吐出一个数据或者完结。就像一个水龙头开关，一开始是打开的状态，上游的数据一开始直接流到下游，只要takeUntil一旦触发吐出数据，水龙头立刻关闭。利用这点，可以在订阅时时，在管道中添加takeUntil，在组件销毁时吐出数据，这样这些订阅就会立刻关闭，也就达到回收内存的作用。改造之前：export class ExampleComponent implements OnInit, OnDestroy {  subscription1: Subscription;  subscription2: Subscription;  ngOnInit(): void {    this.subscription1 = observable1.subscribe(...);    this.subscription2 = ',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/451',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=451',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=451',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/450',
                  title: '你应该了解的 Angular 最佳实践',
                  created: '2022-01-03',
                  body: '遵循最佳实践可以让你的Angular应用保持性能优越，使团队的代码风格一致，以下代码摘自南宁IT派官网项目。把默认的变更检测设置为OnPushAngular默认变更检测是Defualt，只要在组件中有任意一个值发生改变或者Dom中有事件的更新都会触发整个应用自上而下的变更检测，使用OnPush的方式使大型的应用的性能得到很大的提升。导入ChangeDetectionStrategy之后，设置为OnPush@Component({selector:&#039;app-mega-menu&#039;,templateUrl:&#039;./mega-menu.component.html&#039;,styles:[&#039;./mega-menu.component.scss&#039;],changeDetection:ChangeDetectionStrategy.OnPush,})如果你的组件中有值的更新则导入ChangeDetectorRefconstructor(privateeleRef:ElementRef,privatescreenState:',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/450',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=450',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=450',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/399',
                  title:
                    '没想到吧？2021年南宁IT互联网相关工作者最近一份工作求职渠道最受欢迎的竟然是它',
                  created: '2021-08-02',
                  body: '前言目前，市面上求职渠道五花八门，有覆盖全行业的，有细分垂直领域的，有本地运营的，带来更多选择的同时，也带来了很多的烦恼。例如：泄露身份信息的常年挂着职位不回复的借招聘之名行培训之实的诈骗传销的带着这些好奇心，爱好问卷的我们群里发起了【在南宁，作为从事互联网相关工作的你，最近一份工作是从哪个渠道求职找到的？】的调查，数据量不多，本文标题有标题党嫌疑，仅供参考：）填写量：620您当前的职位类别是？通过哪个招聘网站或者渠道？为了排除机器人及非有效性问卷，以下是筛选仅限来自广西地区的投票：填写量：53您当前的职位类别是？通过哪个招聘网站或者渠道？最后，得出的结论是小伙伴们最近一份工作求职渠道最受欢迎的是BOSS招聘和广西人才市场。声明：以上调查数据量有限，不权威，仅供参考。南宁IT派，您的职场朋友圈。',
                  type: '新闻',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/399',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=399',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=399',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/397',
                  title: '五年了，再谈南宁和深圳的差距',
                  created: '2021-06-22',
                  body: '本文经过作者的同意转载。两年前，写了一篇文章谈了下来南宁三年的感想，是我全部文章里点击量最好的，回复评论最多的。（当然其实整体的量都不大）一眨眼，来南宁5年了，生活工作的重心都放到了南宁。再去深圳，看看两个城市的对比，感慨还是很多。5年的时间，南宁的房价从我们来的时候普遍6、7千，升到现在一万以上。深圳的房价从我离开的2万左右升到普遍7万左右。房价大幅增长的背后，是深圳这座城市的活力。人口高度聚集在这里，工作、生活、娱乐。地铁里满满的人，大城市的感觉扑面而来。南宁的房价也在涨，但涨幅小的多。人口不增不减，还是那么多。周边城市如玉林、贵港、百色等地的人喜欢来南宁买房。但不一定居住，空置率较高，尤其是新城五象。漂亮的小区，晚上的亮灯率不太高，交房两年以上的亮灯率也就3层左右。整个城市发展，这五年2015-2020，南宁的重点发展是五象新区。整个片区从黄土纷飞到有模有样。宽敞的街道，美丽的绿化，总部基地站的高楼都在显示这座城市想要发展的决心和诚意。进入总部基地有种来到了广州、深圳大城市的味道。唯一遗憾的是，这里的人口还不多，高楼林立下商铺较少。除了写字楼在早晚高峰和中午吃饭有人员进出外。',
                  type: '新闻',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/397',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=397',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=397',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/396',
                  title: '南宁IT互联网行业薪资福利待遇如何？',
                  created: '2021-06-22',
                  body: '前段时间，我们发布了2020年度南宁互联网IT行业薪资生存调查投票，分别从性别、年龄、婚恋状况、购房情况、租房情况、公司属性、跳槽情况、工作年限、月薪收入、工作满意程度，这几个维度进行了投票调查，从2020年12月01日到2020年12月06日截止，一共投票了96票，其中女生占19%，男生占81%：年龄分布婚恋状况年龄分布，25岁到30岁是主力军购房情况，南宁的房间目前普遍都1万起步，自己能够买房的只有11%公司属性民营企业占了六成，其次是国有企业，不知道是不是今年疫情的原因，自由职业者也有10%的比例跳槽情况工作年限月薪收入最关心的当属月薪收入，普遍在4000元到6000元，有一定工作经验的在6000元到8000元之间，高级开发者可以拿到8000元到150000元的薪资，不乏2w起步的薪水大多数人觉得当前工作满意程度为一般，很不满意和不满意总共占27%以上投票数据报告并不能代表完整性，但是从侧面也反映出了当前的南宁IT互联网从业者现状，仅给各位以参考。不管是初入职场的小白，还是经验丰富的职场高手，最终还是逃过不工作年龄的界限，家庭和社会的压力，祝各位秉持着最初的愿景，褪掉浮躁与焦虑',
                  type: '新闻',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/396',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=396',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=396',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/394',
                  title: '南宁IT互联网公司，有哪些是双休？',
                  created: '2021-06-22',
                  body: '双休毫无疑问在每个行业都是热门讨论的话题，在IT行业更是如此，常年的过度加班导致各种事件也是频繁上热搜。周末双休也成为了寻找一份工作不可忽视的环节。在应聘中，如果在同等条件下双休的工作制度给应聘者带来更大的吸引力，双休意味着有更多的个人时间安排给家人和自己。充分利用好周末不仅可以充实生活平衡工作，还可以提升技术水平和职业素养，为未来的自己提升更多的竞争优势。以下名单仅仅是交流群中调查填写的名单，数据未经考究不权威，仅供参考，提供给想了解更多IT公司相关双休背景的小伙伴，此数据会不断更新在这里。编号是否双休公司名称备注1是万兴科技2是南宁富桂精密工业有限公司（富士康）没事双休有事不违反六休一3是广投智能科技有限公司4是南宁太初5是PSAChina6是南宁市艾若思文化传播有限公司7是东信8是亚信9是与或非10是戴文信息科技11是中教教育12是壹智能13否帮帮信心14是西安点通15是上海观安16是云宝宝大数据有限责任公司17是超图有限责任公司',
                  type: '新闻',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/394',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=394',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=394',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/387',
                  title: 'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
                  created: '2021-05-14',
                  body: '在特定情况下，有些接口无法提供一次性的请求达到目的，需要并行的多次请求，当所有请求都完成时，才进行下一步的逻辑。forkJoin在这里是比较适合这种操作的。值得注意的是，Angular5和rxjs5.5.2的版本导入的对象和最新的版本有区别。//...import{forkJoin}from&#039;rxjs/observable/forkJoin&#039;;//...exportclassSampleService{deleteMultVote(items){constarr:any=[];items.forEach(item=&amp;gt;{arr.push(this.http.delete(item,this.httpOption))});returnforkJoin(...arr);}}注入该服务之后，在具体的组件使用：updateVote(){this.sampleService.deleteMultVote(datas).subscribe(res=&amp;gt;{console.log(res)//yourcode},error=&amp;gt;{console',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/387',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=387',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=387',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/386',
                  title: 'Drupal 8 Ajax 弹出框可监听利用的 Event 事件',
                  created: '2021-05-14',
                  body: 'Drupal提供了一些自定义的Ajaxmodal弹出框事件，通过监听这些事件，可以做一些你想做的事情。这些事件包括：dialog:beforecreatedialog:aftercreatedialog:beforeclosedialog:afterclose这些自定义的event事件都绑定在window对象上，下面是示例的代码，可以使用在自定义的主题或者模块中：(function($,Drupal){Drupal.behaviors.sampleAction={attach:function(context){$(window).once().on(&#039;dialog:aftercreate&#039;,function(dialog,$element,settings){console.log(&#039;modalisopened!&#039;);});}};})(jQuery,Drupal);',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/386',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=386',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=386',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/385',
                  title: 'Drupal8 用户登录后自定义重定向',
                  created: '2021-05-14',
                  body: 'Drupal官网有很多的模块可以提供用户登录后进行自定义重定向路由，基于某种需求，需要在自己的模块中实现，值得注意的是Drupal8和Drupal7的实现方式有所差异，以下是Drupal8hook代码实现部分：useDrupal\\Core\\Form\\FormStateInterface;useDrupal\\Core\\Url;/***Implementshook_form_FORM_ID_alter().*/functionMYCUSTOMMODULE_form_user_login_form_alter(&amp;amp;$form,FormStateInterface$form_state,$form_id){$form[&#039;#submit&#039;][]=&#039;MYCUSTOMMODULE_user_login_form_submit&#039;;}/***Customsubmithandlerfortheloginform.*/functionMYCUSTOMMODULE_user_login_form_submit($form,',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/385',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=385',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=385',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/383',
                  title: '如何更改 git commit 某个历史提交信息',
                  created: '2021-05-11',
                  body: '由于某种原因，需要更新历史提交的commit信息，如果想更新最新的提交，可以使用命令：gitcommit--amend比如想更新最后一个commit:updatezhihulink，输入命令之后输入i直接进入编辑模式：编辑好之后，退出编辑模式:wq保存想更新倒数的某条commit略微麻烦，需要几个步骤，使用的命令是，HEAD~x表示倒数第几条之后的commit需要编辑：gitrebase-iHEAD~2回车进入编辑模式，返回的信息显示倒数两条commit，这时我们只需要把想更新的commit前面的pick改为edit即可：回车会返回下一步的提示信息输入命令，重新编辑commitgitcommit--amend再输入gitrebase--continue',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/383',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=383',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=383',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/382',
                  title:
                    '开源项目使用 Github actions 自动化测试部署 Angular 应用到 ECS 服务器',
                  created: '2021-05-10',
                  body: '查了些文档文章，GithubActions有几个重要的信息如下：通过Docker隔离每个workflow独享1核虚拟CPU,3.75GB内存，包括网络权限和100GB磁盘在yml配置文件中可以使用上下文环境变量，比如分支或者不公开变量每个workflow排队和执行时间最多58分钟，最多可以包含100个action，每个仓库同一时刻只能运行两个workflow下例以一个Angular的示例应用来演示：部署可以有很多方式，此次使用云服务器的SSH账户密码来部署，这些敏感信息存在仓库的Secrets里面，在yml里面可以读取。目标：当master分支发生push事件时，build并部署代码到sit测试环境；当prod分支有PR请求合并时，build并部署代码到prod正式环境；定义sitworkflow在仓库根目录新建.github/workflows/sit.ymlname:Buildappanddeploytohuaweisiton:push:#监听push操作branches:[master]#指定分支jobs:build:#usingUbunturuns-on:ubuntu-',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/382',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=382',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=382',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/377',
                  title: 'Drupal jsonapi 初级入门实践',
                  created: '2021-05-03',
                  body: '前期工作首先你得有一个Drupal站点进入JSON:API配置页面，选择【接受JSON:API的创建、读、更新和删除所有操作。】配置CORS复制sites/default/default.services.yml到sites/default/services.yml修改其中的配置cors.config:enabled:true#Specifyallowedheaders,like&#039;x-allowed-header&#039;.allowedHeaders:[&#039;x-csrf-token&#039;,&#039;authorization&#039;,&#039;content-type&#039;,&#039;accept&#039;,&#039;origin&#039;,&#039;x-requested-with&#039;]#Specifyallowedrequestmethods,specify[&#039;*&#039;]toallowallpossibleones.allowedMethods:[&#039;*&#039;]#',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/377',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=377',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=377',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/376',
                  title: 'RxJS switchMap 在 Drupal api中的应用',
                  created: '2021-05-03',
                  body: '在Angular中，可以把想要的东西转换成流，流是一种更加友好的方式来管理你的数据。Angular的httpget请求返回的是Observable，当post登录之后：login(userName:string,passWord:string):Observable&amp;lt;any&amp;gt;{consthttpOptions={headers:newHttpHeaders({Accept:&#039;application/vnd.api+json&#039;,&#039;Content-type&#039;:&#039;application/json&#039;,}),withCredentials:true,};returnthis.http.post&amp;lt;any&amp;gt;(`${this.apiService.apiUrl}${this.apiService.loginPath}?_format=json`,{name:userName,pass:passWord,},httpOptions);}返回当前用户uid、name和token信息：{',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/376',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=376',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=376',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/375',
                  title: 'Angular CLI 如何配置代理 Drupal api 和静态文件',
                  created: '2021-05-03',
                  body: 'Angular前端在本地开发的时候，时刻与Drupal后端请求数据，其中包括API和静态的图片文件资源，没有配置Proxy代理的情况下，你可能需要频繁的注释本地切换API地址调式：exportconstenvironment={//apiUrl:&#039;http://localhost:4200&#039;,apiUrl:&#039;https://api.zhaobg.com&#039;,production:false,};静态文件没有一个比较便捷的方式来显示，这在开发过程中带来一定的麻烦：通过angularwebpack内置代理，配置API代理和静态文件访问代理，免去来回切换注释代码调式的麻烦。目标ngserve启动应用后，自动开启proxy代理，api和静态文件能够读取线上服务器数据资源。第一步在应用根目录新建文件config/proxy.config.jsconstPROXY_CONFIG=[{context:[&quot;/user&quot;,&quot;/api&quot;,&quot;/sites&quot;,],target:&quot;https://api',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/375',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=375',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=375',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/374',
                  title:
                    '分享几款不错的 Web 地图应用 UI 设计，并用 Drupal Jsonapi 实现了个 Demo',
                  created: '2021-05-03',
                  body: '',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/374',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=374',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=374',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/373',
                  title: 'Angular constructor 和 ngOnInit 有什么区别？',
                  created: '2021-05-03',
                  body: '这是Angular技术面试中经常问到的问题，简单回答就是constructor构造函数用来编写依赖项和初始化成员，而在ngOnInit中编写逻辑。为什么不能够将服务或者业务逻辑写在constructor构造函数中？这是因为我们的业务逻辑代码需要等待所有的依赖项和组件都被加载，不然会出现值找不到的情况。constructor(privatefb:FormBuilder,publicuserState:UserState,privaterouter:Router,privateapiService:ApiService,publicscreenState:ScreenState,privatetitleService:TitleService,privateappState:AppState,publicbranding:BrandingState){}ngOnInit():void{this.titleService.setTitle(&#039;欢迎登录！&#039;);this.userForm=this.fb.group({name:[&#039;&#039;,',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/373',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=373',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=373',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/372',
                  title:
                    'Angular ng-content、ng-template、ng-container 之间的区别',
                  created: '2021-05-03',
                  body: '刚开始学Angular的时候，会觉得这三个指令很像，每一个都具有不一样的作用，拿实际的例子，看看他们之间具体的区别。ng-content&amp;lt;div[ngClass]=&quot;classes&quot;&amp;gt;&amp;lt;ng-content&amp;gt;&amp;lt;/ng-content&amp;gt;&amp;lt;/div&amp;gt;&amp;lt;app-bg[classes]=&quot;[&#039;bg-fill-width&#039;,&#039;wave-wrapper&#039;]&quot;&amp;gt;&amp;lt;mat-iconclass=&quot;wave&quot;svgIcon=&quot;wave&quot;&amp;gt;&amp;lt;/mat-icon&amp;gt;&amp;lt;/app-bg&amp;gt;ng-content置于Angular组件中，相当于占位符，外部组件在调用的时候，会把真正的内容放置到ng-content所占位的地方。这样就可以灵活的使用动态的外部数据来填充到指定的结构里面',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/372',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=372',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=372',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/371',
                  title: 'Angular 有哪几种不同类型的绑定',
                  created: '2021-05-03',
                  body: 'Angular数据从父组件自上而下通过属性绑定流向子组件，而Event事件绑定刚好相反。单向数据绑定1、大胡子插值绑定通过使用大胡子{{}}表达式嵌入标记文本中，花括号之间的文本通常是组件属性的名字：&amp;lt;divclass=&quot;footer-bottomtext-centerp-y-sm&quot;&amp;gt;&amp;lt;divclass=&quot;container&quot;&amp;gt;&amp;lt;divclass=&quot;brand&quot;fxLayoutAlign=&quot;space-betweencenter&quot;&amp;gt;&amp;lt;h2class=&quot;mat-h2m-bottom-0&quot;&amp;gt;{{branding.footer.logo.label}}&amp;lt;/h2&amp;gt;&amp;lt;p&amp;gt;©{{utilities.fullYear}}{{branding.footer.copyRight}}&amp;lt;/p&amp;gt;&amp;lt;/',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/371',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=371',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=371',
                        },
                      ],
                    },
                  ],
                },
                {
                  url: '/node/368',
                  title:
                    'Jsona 一款转换 jsonapi 数据的工具库，也算是解放 Drupal jsonapi 反序列化的利器',
                  created: '2021-05-01',
                  body: '有过DrupalJSONAPI使用经验的开发者来说，处理请求的json数据特别的繁琐，特别是有些实体字段多重依赖和嵌套，需要自定义的构建函数来提取组合数据。且看看JSONAPI返回的数据：https://api.zhaobg.com/api/v1/node/case?fields[node--case]=title,body,created,medias,field_tags,drupal_internal__nid,path&amp;amp;include=medias,medias.field_media_image,field_tags&amp;amp;fields[file--file]=uri&amp;amp;fields[taxonomy_term--industry]=name一个文章的内容类型，其中图片字段使用了媒体实体，其中有多层相关关联和嵌套，要想获取该内容的图片路径，需要经过复杂的映射匹配才能得到。或者你也遇到过，需要往JSONAPI请求接口提交数据时，必须符合JSONAPI的标准规范，而这个标准规范也比较繁琐，例如新增一个实体内容：{&quot;data',
                  type: '博客',
                  actions: [
                    {
                      type: 'share',
                      params: {
                        url: '/node/368',
                      },
                    },
                    {
                      type: 'download',
                      elements: [
                        {
                          type: 'link',
                          label: 'Doc',
                          icon: {
                            name: 'description',
                          },
                          href: '/print/view/word_docx/print/doc?id=368',
                        },
                        {
                          type: 'link',
                          label: 'Pdf',
                          icon: {
                            name: 'picture_as_pdf',
                          },
                          href: '/print/view/pdf/print/pdf?id=368',
                        },
                      ],
                    },
                  ],
                },
              ],
              classes: '',
              params: {},
            },
          },
        },
      },
      {
        label: '树形列表',
        content: {
          type: 'tree-list',
          tree: [
            {
              type: 'tree',
              label: '开发语言',
              key: 'type',
              expandAll: false,
              value: 245,
              nodes: [
                {
                  label: '全部',
                  value: '',
                },
                {
                  value: 861,
                  label: 'CMS 内容管理系统',
                  elements: [
                    {
                      value: 1164,
                      label: 'Drupal',
                    },
                    {
                      value: 1165,
                      label: 'Joomla',
                    },
                    {
                      value: 875,
                      label: 'WordPress',
                    },
                  ],
                },
                {
                  value: 1006,
                  label: '前端框架',
                  elements: [
                    {
                      value: 1030,
                      label: 'Angular',
                    },
                    {
                      value: 1018,
                      label: 'React',
                    },
                    {
                      value: 1018,
                      label: 'VUE',
                    },
                  ],
                },
              ],
            },
          ],
          data: {
            loading: false,
            nodes: [
              {
                link: {
                  label: '使用 DevTools 对 Angular 前端应用性能分析优化',
                  href: '/node/417',
                  target: '_blank',
                },
                created: '2024-02-19',
                body: '<h4 id="%E4%BD%BF%E7%94%A8-lighthouse-%E8%AF%84%E5%88%86">使用 lighthouse 评分</h4><p>以南宁IT派[www.nnitpai.com]为例记录分析优化过程，使用 Devtools lighthouse 对首页进行综合的评分：<br /><img alt="image 0" data-entity-type="file" data-entity-uuid="c397a1f3-b764-4fd2-ab09-98d61f2a4dbd" height="603" src="/sites/default/files/inline-images/image_0.png" width="940" /><br />性能评分勉强及格差强人意，切换到 performance 性能选项卡:<br /><img alt="image 1" data-entity-type="file" data-entity-uuid="17526354-c3f6-45ab-8d28-8100cd1d10e8" height="506" src="/sites/default/files/inline-images/image_1.png" width="951" /><br />记录的同时，可以依次滚动页面到底部，暂停看看分析结果：<br /><img alt="image 2" data-entity-type="file" data-entity-uuid="2349f2bb-d08a-4e5e-a6fa-8ca891b91022" height="422" src="/sites/default/files/inline-images/image_2.png" width="949" /><br />发现一推很深的函数调用，放大具体看看：（记得要用本地开发环境来查看，这样可以方便看未编译版本中具体的组件或者函数）<br /></p>',
                user: 'Johnson',
                type: '博客',
                category: '前端',
                tags: 'Angular',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto2.jpg',
                  alt: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                  href: '#',
                },
              },
              {
                link: {
                  label: '你应该了解的 Angular 最佳实践',
                  href: '/node/414',
                  target: '_blank',
                },
                created: '2024-02-19',
                body: '<p>遵循最佳实践可以让你的 Angular 应用保持性能优越，使团队的代码风格一致，以下代码摘自南宁IT派官网项目。</p><h3 id="%E6%8A%8A%E9%BB%98%E8%AE%A4%E7%9A%84%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E8%AE%BE%E7%BD%AE%E4%B8%BA-onpush">把默认的变更检测设置为 OnPush</h3><p>Angular 默认变更检测是 Defualt，只要在组件中有任意一个值发生改变或者 Dom中有事件的更新都会触发整个应用自上而下的变更检测，使用&nbsp;<code data-backticks="1">OnPush</code>&nbsp;的方式使大型的应用的性能得到很大的提升。<br />导入 ChangeDetectionStrategy 之后，设置为OnPush</p></p>',
                user: '表歌',
                type: '博客',
                category: '前端',
                tags: 'Angular',
                img: {
                  classes: 'object-fit',
                  src: '/assets/images/cases/porto3.jpg',
                  alt: '使用 takeUntil 操作符管理 Angular 组件的订阅',
                  href: '#',
                },
              },
            ],
            pager: {
              itemsPerPage: 10,
              currentPage: 0,
              totalItems: 100,
            },
            page: 0,
            defaultValue: {
              type: 1164,
            },
          },
        },
      },
    ],
  },
  {
    label: '地图应用',
    id: 'map',
    elements: [
      {
        label: '地图应用',
        content: {
          type: 'view-map',
          params: {
            apiBak: '/api/v2/view-map',
            city: '南宁市',
            drawer: true,
          },
          form: [
            {
              type: 'input',
              key: 'title',
              className: 'm-right-xs width-30',
              templateOptions: {
                label: '搜索职位',
              },
            },
            {
              type: 'mat-select',
              key: 'skill',
              className: 'm-right-xs width-30',
              apiBak: '/api/v2/filter/taxonomy/skill',
              templateOptions: {
                multiple: true,
                search: true,
                hideSelected: true,
                label: '技能',
                options: [
                  {
                    value: 1,
                    label: 'Angular',
                  },
                  {
                    value: 2,
                    label: 'React',
                  },
                  {
                    value: 3,
                    label: 'Vue',
                  },
                ],
              },
            },
          ],
          elements: [
            {
              subTitle: '产品经理',
              title: '亚马逊 Amazon',
              meta_2: '2021-04-25',
              badge_2: '<div class="item-list"><ul><li>新零售</li></ul></div>',
              meta_1: '<span class="text-primary bold">6-8 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>五险一金</li><li>绩效奖金</li><li>包中餐</li><li>产假</li></ul></div>',
              img: '/assets/images/logo/amazon.svg',
              address:
                '中国广西壮族自治区南宁市青秀区民族大道159号万丰新新大厦',
              nid: '247',
              url: '/node/247',
              position: [108.407058, 22.815584],
            },
            {
              subTitle: '产品经理',
              title: '亚马逊 Amazon',
              meta_2: '2021-04-25',
              badge_2: '<div class="item-list"><ul><li>新零售</li></ul></div>',
              meta_1: '<span class="text-primary bold">6-8 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>五险一金</li><li>绩效奖金</li><li>包中餐</li><li>产假</li></ul></div>',
              img: '/assets/images/logo/amazon.svg',
              address:
                '中国广西壮族自治区南宁市青秀区民族大道159号万丰新新大厦',
              nid: '247',
              url: '/node/247',
              latitude: '22.83393',
              longitude: '108.31343',
            },
            {
              subTitle: '新媒体运营',
              title: 'Codepen',
              meta_2: '2021-04-25',
              badge_2: '<div class="item-list"><ul><li>运营</li></ul></div>',
              meta_1: '<span class="text-primary bold">3-6 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>职位晋升</li></ul></div>',
              img: '/assets/images/logo/codepen.svg',
              address:
                '中国广西壮族自治区南宁市良庆区平乐大道21号大唐·总部1号1号楼',
              nid: '245',
              url: '/node/245',
              position: [108.384383, 22.750785],
            },
            {
              subTitle: '产品经理',
              title: '中国谷歌 Google',
              meta_2: '2021-04-25',
              badge_2:
                '<div class="item-list"><ul><li>产品分析</li></ul></div>',
              meta_1: '<span class="text-primary bold">4-6 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>职位晋升</li></ul></div>',
              img: '/assets/images/logo/google.svg',
              address:
                '中国广西壮族自治区南宁市良庆区平乐大道21号大唐·总部1号1号楼',
              nid: '244',
              url: '/node/244',
              position: [108.384383, 22.750785],
            },
            {
              subTitle: 'cto首席技术官 ',
              title: '联想集团',
              meta_2: '2021-04-25',
              badge_2:
                '<div class="item-list"><ul><li>技术机构</li></ul></div>',
              meta_1: '<span class="text-primary bold">15-20 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>绩效奖金</li><li>午餐补助</li><li>美女多</li></ul></div>',
              img: '/assets/images/logo/lenovo.svg',
              address:
                '中国广西壮族自治区南宁市青秀区金洲路琅西56栋-12号(汇发集团)3楼',
              nid: '242',
              url: '/node/242',
              position: [108.364581, 22.808037],
            },
            {
              subTitle: '前端开发工程师 ',
              title: 'Paypal 海外',
              meta_2: '2021-04-30',
              badge_2: '<div class="item-list"><ul><li>VUE</li></ul></div>',
              meta_1: '<span class="text-primary bold">7-10 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>绩效奖金</li><li>午餐补助</li><li>美女多</li></ul></div>',
              img: '/assets/images/logo/paypal.svg',
              address:
                '中国广西壮族自治区南宁市青秀区金洲路琅西56栋-12号(汇发集团)3楼',
              nid: '241',
              url: '/node/241',
              position: [108.364581, 22.808037],
            },
            {
              subTitle: '招软件测试工程师，入职即购买五险一金',
              title: 'Shopify 购物',
              meta_2: '2021-04-24',
              badge_2: '<div class="item-list"><ul><li>Linux</li></ul></div>',
              meta_1: '<span class="text-primary bold">7-9 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>五险一金</li></ul></div>',
              img: '/assets/images/logo/shopify.svg',
              address: '中国广西壮族自治区南宁市良庆区平乐大道18号东盟信息港',
              nid: '239',
              url: '/node/239',
              position: [108.381459, 22.746694],
            },
            {
              subTitle: 'Java架构师',
              title: 'Spotify',
              meta_2: '2021-04-23',
              badge_2:
                '<div class="item-list"><ul><li>Spring</li><li>Oracle</li></ul></div>',
              meta_1: '<span class="text-primary bold">12-18 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>周末双休</li></ul></div>',
              img: '/assets/images/logo/spotify.svg',
              address: '中国广西壮族自治区南宁市西乡塘区东盟慧谷13栋15楼1501',
              nid: '237',
              url: '/node/237',
              position: [108.27462, 22.865409],
            },
          ],
        },
      },
      {
        label: '地图范围圈',
        content: {
          type: 'view-map',
          params: {
            apiBak: '/api/v2/view-map',
            city: '南宁市',
            drawer: true,
          },
          form: [
            {
              type: 'input',
              key: 'title',
              className: 'm-right-xs width-30',
              templateOptions: {
                label: '搜索职位',
              },
            },
            {
              type: 'mat-select',
              key: 'skill',
              className: 'm-right-xs width-30',
              apiBak: '/api/v2/filter/taxonomy/skill',
              templateOptions: {
                multiple: true,
                search: true,
                hideSelected: true,
                label: '技能',
                options: [
                  {
                    value: 1,
                    label: 'Angular',
                  },
                  {
                    value: 2,
                    label: 'React',
                  },
                  {
                    value: 3,
                    label: 'Vue',
                  },
                ],
              },
            },
            {
              key: 'enableCircle',
              type: 'toggle',
              className: 'width-100',
              templateOptions: {
                label: '开启范围圈',
                description: '开启后点击地图获取经纬度',
              },
            },
            {
              key: 'circle',
              className: 'width-100',
              fieldGroupClassName: 'display-flex flex-wrap width-100',
              fieldGroup: [
                {
                  type: 'input',
                  key: 'lnglat',
                  className: 'm-bottom-sm width-20 m-right-xs',
                  templateOptions: {
                    label: '经纬度',
                    appearance: 'outline',
                    type: 'text',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'radius',
                  defaultValue: 3,
                  className: 'm-bottom-sm width-20 m-right-xs',
                  templateOptions: {
                    label: '圆半径/公里',
                    appearance: 'outline',
                    type: 'number',
                    required: true,
                    min: 1,
                    max: 100,
                  },
                  validation: {
                    messages: {
                      min: '不能设置小于 1',
                      max: '不能设置大于 100',
                    },
                  },
                },
                {
                  type: 'input',
                  key: 'bg',
                  className: 'm-bottom-sm width-20 m-right-xs',
                  defaultValue: '#00a281',
                  templateOptions: {
                    label: '圆背景色',
                    appearance: 'outline',
                    type: 'color',
                    required: true,
                  },
                },
                {
                  type: 'input',
                  key: 'opacity',
                  defaultValue: 0.1,
                  className: 'm-bottom-sm width-20',
                  templateOptions: {
                    label: '不透明度',
                    appearance: 'outline',
                    type: 'number',
                    required: true,
                    min: 0.1,
                    max: 1,
                  },
                  validation: {
                    messages: {
                      min: '不能设置小于 0.1',
                      max: '不能设置大于 100',
                    },
                  },
                },
              ],
            },
          ],
          elements: [
            {
              subTitle: '产品经理',
              title: '亚马逊 Amazon',
              meta_2: '2021-04-25',
              badge_2: '<div class="item-list"><ul><li>新零售</li></ul></div>',
              meta_1: '<span class="text-primary bold">6-8 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>五险一金</li><li>绩效奖金</li><li>包中餐</li><li>产假</li></ul></div>',
              img: '/assets/images/logo/amazon.svg',
              address:
                '中国广西壮族自治区南宁市青秀区民族大道159号万丰新新大厦',
              nid: '247',
              url: '/node/247',
              position: [108.407058, 22.815584],
            },
            {
              subTitle: '产品经理',
              title: '亚马逊 Amazon',
              meta_2: '2021-04-25',
              badge_2: '<div class="item-list"><ul><li>新零售</li></ul></div>',
              meta_1: '<span class="text-primary bold">6-8 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>五险一金</li><li>绩效奖金</li><li>包中餐</li><li>产假</li></ul></div>',
              img: '/assets/images/logo/amazon.svg',
              address:
                '中国广西壮族自治区南宁市青秀区民族大道159号万丰新新大厦',
              nid: '247',
              url: '/node/247',
              latitude: '22.83393',
              longitude: '108.31343',
            },
            {
              subTitle: '新媒体运营',
              title: 'Codepen',
              meta_2: '2021-04-25',
              badge_2: '<div class="item-list"><ul><li>运营</li></ul></div>',
              meta_1: '<span class="text-primary bold">3-6 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>职位晋升</li></ul></div>',
              img: '/assets/images/logo/codepen.svg',
              address:
                '中国广西壮族自治区南宁市良庆区平乐大道21号大唐·总部1号1号楼',
              nid: '245',
              url: '/node/245',
              position: [108.384383, 22.750785],
            },
            {
              subTitle: '产品经理',
              title: '中国谷歌 Google',
              meta_2: '2021-04-25',
              badge_2:
                '<div class="item-list"><ul><li>产品分析</li></ul></div>',
              meta_1: '<span class="text-primary bold">4-6 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>职位晋升</li></ul></div>',
              img: '/assets/images/logo/google.svg',
              address:
                '中国广西壮族自治区南宁市良庆区平乐大道21号大唐·总部1号1号楼',
              nid: '244',
              url: '/node/244',
              position: [108.384383, 22.750785],
            },
            {
              subTitle: 'cto首席技术官 ',
              title: '联想集团',
              meta_2: '2021-04-25',
              badge_2:
                '<div class="item-list"><ul><li>技术机构</li></ul></div>',
              meta_1: '<span class="text-primary bold">15-20 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>绩效奖金</li><li>午餐补助</li><li>美女多</li></ul></div>',
              img: '/assets/images/logo/lenovo.svg',
              address:
                '中国广西壮族自治区南宁市青秀区金洲路琅西56栋-12号(汇发集团)3楼',
              nid: '242',
              url: '/node/242',
              position: [108.364581, 22.808037],
            },
            {
              subTitle: '前端开发工程师 ',
              title: 'Paypal 海外',
              meta_2: '2021-04-30',
              badge_2: '<div class="item-list"><ul><li>VUE</li></ul></div>',
              meta_1: '<span class="text-primary bold">7-10 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>绩效奖金</li><li>午餐补助</li><li>美女多</li></ul></div>',
              img: '/assets/images/logo/paypal.svg',
              address:
                '中国广西壮族自治区南宁市青秀区金洲路琅西56栋-12号(汇发集团)3楼',
              nid: '241',
              url: '/node/241',
              position: [108.364581, 22.808037],
            },
            {
              subTitle: '招软件测试工程师，入职即购买五险一金',
              title: 'Shopify 购物',
              meta_2: '2021-04-24',
              badge_2: '<div class="item-list"><ul><li>Linux</li></ul></div>',
              meta_1: '<span class="text-primary bold">7-9 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>五险一金</li></ul></div>',
              img: '/assets/images/logo/shopify.svg',
              address: '中国广西壮族自治区南宁市良庆区平乐大道18号东盟信息港',
              nid: '239',
              url: '/node/239',
              position: [108.381459, 22.746694],
            },
            {
              subTitle: 'Java架构师',
              title: 'Spotify',
              meta_2: '2021-04-23',
              badge_2:
                '<div class="item-list"><ul><li>Spring</li><li>Oracle</li></ul></div>',
              meta_1: '<span class="text-primary bold">12-18 k</span>',
              badge_1:
                '<div class="item-list"><ul><li>周末双休</li></ul></div>',
              img: '/assets/images/logo/spotify.svg',
              address: '中国广西壮族自治区南宁市西乡塘区东盟慧谷13栋15楼1501',
              nid: '237',
              url: '/node/237',
              position: [108.27462, 22.865409],
            },
          ],
        },
      },
      {
        label: '位置列表',
        content: {
          type: 'map-list-v1',
          title: {
            label: '南宁市创业孵化服务中心',
            style: 'style-v4',
          },
          meta: [
            {
              label: '地址',
              value: '良庆区玉洞街道玉洞大道x号',
            },
            {
              label: '电话',
              value: '0771-xxxxxx',
            },
          ],
          map: {
            city: '南宁市',
            elements: [
              {
                title: '创客城',
                address: '南宁市高科路八号创客城',
                params: {
                  address: '南宁市高科路八号创客城',
                  title: '创客城',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '张三',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '18878793xx',
                  },
                ],
              },
              {
                title: '中关村',
                address: '南宁市高新区创新路中关村',
                params: {
                  address: '南宁市高新区创新路中关村',
                  title: '中关村',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '李四',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '0771-78734454',
                  },
                ],
              },
              {
                title: '华尔街工谷',
                address: '南宁市高新区发展大道189号华尔街工谷',
                params: {
                  address: '南宁市高新区发展大道189号华尔街工谷',
                  title: '华尔街工谷',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '王五',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '0771-6543976',
                  },
                ],
              },
              {
                title: 'Dialog',
                address: '南宁市高科路八号创客城',
                params: {
                  address: '南宁市高科路八号创客城',
                  title: '创客城',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '张三',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '18878793xx',
                  },
                ],
                dialog: [
                  {
                    type: 'text',
                    spacer: 'md',
                    body: '信使UI是基于 Material 的 Angular 前端框架， 丰富的组件可提供优秀的数字创新体验，使用 Web Builder 可以通过拖拽快速构建响应式、多主题的 Web 页面。选择组件拖动到想要的位置：<ul class="list-done"><li>可视化编辑组件图文数据，所见即所得；</li><li>可以复制整个页面的 JSON 或者单个组件的 JSON；</li></ul><p>欢迎入群一起探索更多的可能性和数字创新体验，QQ 交流群：<span class="text-primary">1176468251</span></p><p style="display:flex"><img width="120px" src="/assets/icons/large-left-arrow.svg" /><video  muted  autoplay loop width="120px" src="/assets/video/drag-drop.mp4"></video></p>',
                    title: {
                      label:
                        '欢迎使用 <strong class="text-primary">Web Builder</strong> 快速构建页面',
                      style: 'style-v4',
                      classes: 'mat-display-2 bold',
                    },
                  },
                ],
              },
            ],
          },
        },
      },
      {
        label: '带边栏',
        content: {
          type: 'map-list-v1',
          title: {
            label: '南宁市创业孵化服务中心',
            style: 'style-v4',
          },
          meta: [
            {
              label: '地址',
              value: '良庆区玉洞街道玉洞大道x号',
            },
            {
              label: '电话',
              value: '0771-xxxxxx',
            },
          ],
          map: {
            city: '南宁市',
            elements: [
              {
                title: '创客城',
                address: '南宁市高科路八号创客城',
                params: {
                  address: '南宁市高科路八号创客城',
                  title: '创客城',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '张三',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '18878793xx',
                  },
                ],
              },
              {
                title: '中关村',
                address: '南宁市高新区创新路中关村',
                params: {
                  address: '南宁市高新区创新路中关村',
                  title: '中关村',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '李四',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '0771-78734454',
                  },
                ],
              },
              {
                title: '华尔街工谷',
                address: '南宁市高新区发展大道189号华尔街工谷',
                params: {
                  address: '南宁市高新区发展大道189号华尔街工谷',
                  title: '华尔街工谷',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '王五',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '0771-6543976',
                  },
                ],
              },
              {
                title: 'Dialog',
                address: '南宁市高科路八号创客城',
                params: {
                  address: '南宁市高科路八号创客城',
                  title: '创客城',
                },
                meta: [
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系人',
                    value: '张三',
                  },
                  {
                    icon: {
                      color: 'warn',
                      svg: 'arrow_right',
                      inline: true,
                    },
                    label: '联系电话',
                    value: '18878793xx',
                  },
                ],
                dialog: [
                  {
                    type: 'text',
                    spacer: 'md',
                    body: '信使UI是基于 Material 的 Angular 前端框架， 丰富的组件可提供优秀的数字创新体验，使用 Web Builder 可以通过拖拽快速构建响应式、多主题的 Web 页面。选择组件拖动到想要的位置：<ul class="list-done"><li>可视化编辑组件图文数据，所见即所得；</li><li>可以复制整个页面的 JSON 或者单个组件的 JSON；</li></ul><p>欢迎入群一起探索更多的可能性和数字创新体验，QQ 交流群：<span class="text-primary">1176468251</span></p><p style="display:flex"><img width="120px" src="/assets/icons/large-left-arrow.svg" /><video  muted  autoplay loop width="120px" src="/assets/video/drag-drop.mp4"></video></p>',
                    title: {
                      label:
                        '欢迎使用 <strong class="text-primary">Web Builder</strong> 快速构建页面',
                      style: 'style-v4',
                      classes: 'mat-display-2 bold',
                    },
                  },
                ],
              },
            ],
          },
          sidebarRight: [
            {
              type: 'title',
              label: '相关信息',
              style: 'style-v4',
            },
            {
              type: 'media-object-group',
              elements: [
                {
                  type: 'media-object',
                  img: {
                    src: '/assets/images/avatar/01.jpeg',
                    style: {
                      width: '45px',
                      height: '45px',
                    },
                    alt: 'logo',
                  },
                  meta: '2024-02',
                  title: '前端开发工程师',
                  subTitle: 'Davyin',
                  content:
                    '专注于 Drupal 前端主题开发，目前主要从事于 Angular 前端开发，终身学习体验者，热衷于健身，希望明天比今天好一点。',
                },
              ],
            },
          ],
        },
      },
    ],
  },
  {
    label: '配置',
    elements: [
      {
        label: '全局',
        type: 'json',
        provide: 'CORE_CONFIG',
        icon: {
          svg: 'cog',
        },
      },
      {
        label: '菜单',
        type: 'json',
        provide: 'BRANDING',
        icon: {
          svg: 'view-compact-outline',
        },
      },
    ],
  },
];
