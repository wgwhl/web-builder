export const widgets = [
  {
    label: 'Layout',
    icon: {
      svg: 'view-dashboard-outline',
    },
    content: {
      type: 'layout-builder',
      spacer: 'md',
      fullWidth: false,
      bg: {
        classes: 'bg-fill-width',
      },
      layoutAlign: 'center center',
      gap: {
        xs: 8,
        sm: 16,
        md: 32,
        lg: 48,
      },
      elements: [
        {
          classes: '',
          row: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          },
          direction: 'column',
          layoutAlign: 'start start',
          elements: [],
        },
        {
          classes: '',
          row: {
            xs: 12,
            sm: 12,
            md: 6,
            lg: 6,
          },
          direction: 'column',
          layoutAlign: 'start start',
          elements: [],
        },
      ],
    },
  },
  {
    label: '标题',
    icon: {
      svg: 'format-header-2',
    },
    content: {
      type: 'title',
      label:
        '欢迎使用 <strong class="text-primary">Web Builder</strong> 快速构建响应式页面',
      style: 'style-v4',
      classes: 'mat-display-2 bold',
    },
  },
  {
    label: '富文本',
    icon: {
      svg: 'format-text',
    },
    content: {
      type: 'text',
      spacer: 'none',
      body: '信使UI是基于 Material 的 Angular 前端框架，丰富的组件可提供优秀的数字创新体验，使用 Web Builder 可以通过拖拽快速构建响应式、多主题的 Web 页面。',
    },
  },
  {
    label: '图片',
    icon: {
      svg: 'image-outline',
    },
    content: {
      type: 'img',
      hostClasses: 'text-center',
      classes: '',
      src: '/assets/images/illustration/08.png',
      alt: 'alt',
    },
  },
  {
    label: '链接',
    icon: {
      svg: 'link',
    },
    content: {
      type: 'link',
      label: '更多',
      classes: '',
      href: '/',
    },
  },
  {
    label: '按钮',
    icon: {
      svg: 'button-cursor',
    },
    content: {
      type: 'btn',
      href: '/node/1',
      target: '_blank',
      label: '了解更多',
      mode: 'raised',
      color: 'primary',
    },
  },
  {
    label: '间距',
    icon: {
      svg: 'border-horizontal',
    },
    content: {
      type: 'spacer',
      size: 'sm',
    },
  },
  {
    label: '图标',
    icon: {
      svg: 'svg',
    },
    content: {
      type: 'icon',
      color: 'primary',
      svg: 'border-color',
    },
  },
  {
    label: '幻灯片',
    icon: {
      svg: 'view-array-outline',
    },
    preview: '/assets/images/builder/widgets/swiper.png',
    content: {
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
  },
  {
    label: '联系我们',
    icon: {
      svg: 'account-box-outline',
    },
    preview: '/assets/images/builder/widgets/contact.png',
    content: {
      type: 'contact-us',
      params: {
        webform_id: 'contact',
      },
      bg: {
        classes: 'bg-fill-width',
        icon: 'wave',
      },
      action: {
        label: '提交',
      },
      formOrder: '1',
      contact: [
        {
          title: {
            label: '地址',
          },
          icon: {
            name: 'location_on',
          },
          style: 'style-v7 small-box',
          content: '创客城2栋',
        },
        {
          title: {
            label: '电话号码',
          },
          style: 'style-v7 small-box',
          icon: {
            name: 'phone',
          },
          content: '+086 0771xxxx',
        },
        {
          title: {
            label: '邮件',
          },
          style: 'style-v7 small-box',
          icon: {
            name: 'mail',
          },
          content: 'service@example.com',
        },
        {
          title: {
            label: '微信',
          },
          style: 'style-v7 small-box',
          icon: {
            name: 'chat_bubble',
          },
          content: 'biaogebusy',
        },
      ],
      forms: [
        {
          type: 'input',
          label: '姓名',
          key: 'name',
          params: {
            required: true,
          },
        },
        {
          type: 'input',
          label: '邮箱',
          key: 'email',
          params: {
            required: true,
          },
        },
        {
          type: 'input',
          label: '主题',
          key: 'subject',
          params: {
            required: true,
          },
        },
        {
          type: 'textarea',
          label: '内容',
          params: {
            required: true,
            matAutosizeMinRows: 5,
          },
          key: 'message',
          placeholder: 'Message',
        },
      ],
    },
  },
  {
    label: '柱状图',
    icon: {
      svg: 'chart-bar',
    },
    preview: '/assets/images/builder/widgets/bar.png',
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
    content: {
      type: 'chart',
      title: {
        text: '年度活动金额预算',
        subtext: '南宁',
      },
      legend: {
        bottom: '10px',
      },
      tooltip: {
        trigger: 'axis',
      },
      dataset: {
        source: [
          ['红包预算', '2020', '2021', '2022'],
          ['第一季度', 6353, 7988, 6453],
          ['第二季度', 7174, 7938, 9217],
          ['第三季度', 5585, 3661, 7115],
        ],
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
        },
        {
          type: 'bar',
        },
        {
          type: 'bar',
        },
      ],
    },
  },
  {
    label: '折线图',
    icon: {
      svg: 'chart-line',
    },
    preview: '/assets/images/builder/widgets/line.png',
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
    content: {
      type: 'chart',
      title: {
        text: '年度活动金额预算',
        subtext: '南宁',
      },
      legend: {
        bottom: '10px',
      },
      tooltip: {
        trigger: 'axis',
      },
      dataset: {
        source: [
          ['红包预算', '2020', '2021', '2022'],
          ['第一季度', 6353, 7988, 6453],
          ['第二季度', 7174, 7938, 9217],
          ['第三季度', 5585, 3661, 7115],
        ],
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {},
      series: [
        {
          type: 'line',
        },
        {
          type: 'line',
        },
        {
          type: 'line',
        },
      ],
    },
  },
  {
    label: '饼图',
    icon: {
      svg: 'chart-pie',
    },
    preview: '/assets/images/builder/widgets/pie.png',
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
    content: {
      type: 'chart',
      title: {
        text: '金额预算占比',
        subtext: '2022年9月',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
      },
      legend: {
        orient: 'vertical',
        left: 'left',
      },
      xAxis: {
        type: 'category',
      },
      yAxis: {},
      dataset: {
        source: [
          ['预算', '费用'],
          ['大额红包总金额', 590],
          ['小额红包总金额', 906],
          ['提成总额', 971],
        ],
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: '50%',
          label: {
            formatter: '{b}: {d}%',
          },
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
  },
  {
    label: '折叠面板',
    icon: {
      svg: 'format-line-weight',
    },
    content: {
      type: 'panel',
      elements: [
        {
          title: '组件驱动开发',
          icon: 'person',
          params: {
            expanded: true,
          },
          elements: [
            {
              type: 'text',
              spacer: 'none',
              body: 'Storybook采用了组件驱动开发的方法，即将UI组件作为开发的核心单元。开发人员可以在Storybook中为每个UI组件创建"stories"，描述组件在不同状态和交互方式下的行为和外观。这种方法能够提高组件的可重用性和可测试性。',
            },
          ],
        },
        {
          title: '组件展示和测试',
          icon: 'faviores',
          elements: [
            {
              type: 'text',
              spacer: 'none',
              body: 'Storybook提供了一个交互式的界面，用于展示和测试UI组件。开发人员可以在浏览器中浏览和交互组件，以便检查其外观和行为，并确保它们在各种条件下正常工作。这有助于加快开发迭代周期，提高组件的质量。',
            },
          ],
        },
        {
          title: '文档化',
          icon: 'faviores',
          elements: [
            {
              type: 'text',
              spacer: 'none',
              body: 'Storybook不仅可以展示和测试组件，还可以自动生成组件的文档。开发人员可以使用Markdown或其他文档格式编写组件文档，并将其与组件关联。这使得团队成员可以更好地理解和使用组件，减少了沟通成本。',
            },
          ],
        },
        {
          title: '插件和工具生态系统',
          icon: 'faviores',
          elements: [
            {
              type: 'text',
              spacer: 'none',
              body: 'Storybook拥有丰富的插件和工具生态系统，可以扩展其功能。这些插件可以用于模拟数据、测试组件的不同状态和交互，并生成自动化测试报告。这样，开发人员可以根据自己的需求定制和扩展Storybook。',
            },
          ],
        },
      ],
    },
  },
  {
    label: '表格',
    icon: {
      svg: 'table',
    },
    preview: '/assets/images/builder/widgets/table.png',
    content: {
      type: 'dynamic-table',
      header: [
        {
          label: '模块',
          key: 'module',
        },
        {
          label: '描述',
          key: 'info',
        },
        {
          label: '安装量',
          key: 'tatol',
        },
        {
          label: '备注',
          key: 'remarks',
          dialog: {
            shorten: 5,
            label: '更多',
          },
        },
      ],
      elements: [
        {
          module: 'Slick Carousel',
          tatol: 1007,
          info: 'Slick 轮播，强大响应式且性能优异的图片轮播解决方案，有非常丰富的配置选项，slick 官网自己调侃这是你最后使用的图片轮播',
          remarks: '查看',
        },
        {
          module: 'Views Slideshow',
          tatol: 3023,
          info: '视图轮播模块，该模块是最受欢迎的幻灯片模块，可放任何内容，高度定制\t',
          remarks: '查看',
        },
        {
          module: 'Colorbox',
          tatol: 1397,
          info: '轻量级高可定制幻灯片模块，高度集成在 Drupal 中，可放图片，Iframed 或者在线内容等等\t',
          remarks: '查看',
        },
        {
          module: 'Flex Slider',
          tatol: 5537,
          info: '响应式、可调整大小、适配浏览器和移动设备，支持移动设备手势滑动\t',
          remarks: '查看',
        },
        {
          module: 'Owl Carousel',
          tatol: 1000,
          info: '提供视图样式，字段格式化和管理 UI，支持响应式、移动手势、高定制幻灯片，CSS3 动画，JSON，有可用的回调，自定义事件等\t',
          remarks: '查看',
        },
      ],
    },
  },
  {
    label: '播放按钮',
    icon: {
      svg: 'play-circle-outline',
    },
    content: {
      type: 'btn-video',
      color: 'primary',
      video: {
        type: 'player',
        options: {
          controls: true,
          aspectRatio: '16:9',
          poster: '/assets/video/poster01.png',
          sources: [
            {
              src: '/assets/video/storybook.mp4',
              type: 'video/mp4',
            },
          ],
        },
      },
    },
  },
  {
    label: 'Box',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      img: {
        src: '/assets/images/svg/Asset187.svg',
        alt: 'browser',
      },
      style: 'style-v3 use-image',
      title: {
        href: '#',
        label: '高性能',
      },
      content:
        '默认情况下，Drupal 运行速度很快，您可以优化部署，使其运行得更快；',
    },
  },
  {
    label: 'Box v1',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v1',
      icon: {
        name: 'fingerprint',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v2',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v2',
      icon: {
        name: 'verified_user',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v3',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v3',
      icon: {
        name: 'verified_user',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v4',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v4',
      icon: {
        name: 'verified_user',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v5',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v5',
      icon: {
        name: 'verified_user',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v6',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v6',
      icon: {
        name: 'verified_user',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v7',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v7',
      icon: {
        name: 'verified_user',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v9',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v9',
      icon: {
        name: 'fingerprint',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: 'Box v10',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      img: {
        src: '/assets/images/svg/Asset187.svg',
        alt: 'browser',
      },
      style: 'style-v3 use-image',
      title: {
        href: '#',
        label: '高性能',
      },
      content:
        '默认情况下，Drupal 运行速度很快，您可以优化部署，使其运行得更快；',
    },
  },
  {
    label: 'Box',
    icon: {
      svg: 'box',
    },
    content: {
      type: 'box',
      style: 'style-v10',
      icon: {
        name: 'fingerprint',
      },
      title: {
        href: '/',
        label: '组件编辑',
      },
      content: '通过简单的管理界面对复杂的可视化编辑',
      more: {
        href: '#',
        label: '更多',
      },
    },
  },
  {
    label: '卡片',
    icon: {
      svg: 'card-outline',
    },
    preview: '/assets/images/builder/widgets/card.png',
    content: {
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
          src: '/assets/images/cases/porto3.jpg',
          alt: 'alt',
        },
      },
    },
  },
  {
    label: '卡片1v1',
    icon: {
      svg: 'numeric-1',
    },
    preview: '/assets/images/builder/widgets/card-1v1.png',
    content: {
      type: 'card-1v1',
      link: {
        href: '#',
        label: 'Drupal 100多种语言提供了无以伦比的支持和翻译工作流程',
      },
      user: '表歌',
      time: '2022/09/27',
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
      moreLabel: '查看更多',
    },
  },
  {
    label: '卡片2v2',
    icon: {
      svg: 'numeric-2',
    },
    preview: '/assets/images/builder/widgets/card-1v2.png',
    content: {
      type: 'card-1v2',
      link: {
        href: '#',
        label: 'Drupal 100多种语言提供了无以伦比的支持和翻译工作流程',
      },
      subTitle: '多语言',
      img: {
        href: '#',
        src: '/assets/images/cases/porto3.jpg',
        alt: 'alt',
      },
      bg: {
        classes: 'object-fit',
        img: {
          hostClasses: '',
          src: '/assets/images/showcase/pattern-01.png',
        },
      },
    },
  },
  {
    label: '卡片1v4',
    icon: {
      svg: 'numeric-4',
    },
    content: {
      type: 'card-1v4',
      img: {
        classes: 'object-fit',
        src: '/assets/images/avatar/01.jpeg',
      },
      star: 5,
      title: '- Johnson',
      subTitle: '前端开发',
      body: '信使是一个灵活可扩展性高的前端Anuglar框架，动态组件可以使得组件之间变得更加灵活，但是依赖循环也变得复杂。',
    },
  },
  {
    label: '卡片1v5',
    icon: {
      svg: 'numeric-5',
    },
    content: {
      type: 'card-1v5',
      title: '讨论 Builder 架构',
      body: '讨论未来的发展方向和基础架构，是否可以融入 AI 生成相应的内容，为用户提供优秀的数字创新体验。',
      more: {
        href: '/node/1',
        target: '_blank',
        label: '查看更多',
      },
      footer: {
        label: 'Step 01.',
        icon: {
          svg: 'chevron-double-right',
        },
      },
    },
  },
  {
    label: '卡片1v6',
    icon: {
      svg: 'numeric-6',
    },
    content: {
      title: {
        classes: 'text-primary',
        label: '免费',
      },
      type: 'card-1v6',
      prefix: '¥',
      number: '79',
      suffix: '/月',
      body: '<ul class="list-done"><li>完全开放</li><li>安全检测机制</li><li>高质量交付源码文件</li><li>免费一个域名绑定</li><li>二十四小时免费技术支持</li></ul>',
      classes: '',
      actionsAlign: 'start center',
      actions: [
        {
          href: '#',
          label: '开始',
          type: 'btn',
          color: 'primary',
          mode: 'raised',
        },
        {
          type: 'btn',
          label: '立即购买',
          href: '#',
          mode: 'raised',
          color: 'primary',
        },
      ],
    },
  },
  {
    label: '进步器',
    icon: {
      svg: 'debug-step-over',
    },
    content: {
      type: 'stepper',
      params: {
        mode: 'horizontal',
        labelPosition: 'bottom',
        linear: true,
      },
      steps: [
        {
          label: '指派中',
        },
        {
          label: '接受',
          completed: true,
        },
        {
          label: '停止',
        },
        {
          label: '转移',
        },
        {
          label: '已完成',
        },
      ],
    },
  },
  {
    label: '进度组',
    icon: {
      svg: 'format-list-group',
    },
    content: {
      type: 'progress-group',
      elements: [
        {
          label: 'HTML/CSS',
          value: 95,
        },
        {
          label: 'Angular/JavaScript',
          value: 79,
        },
        {
          label: 'Drupal',
          value: 60,
        },
      ],
    },
  },
  {
    label: '列表',
    icon: {
      svg: 'format-list-checkbox',
    },
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
          changed: '2024-03-10',
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
          changed: '2024-03-10',
        },
        {
          link: {
            label: '你应该了解的 Angular 最佳实践',
            href: '2024-03-10',
          },
          img: {
            src: '../assets/images/showcase/blog3-large.jpeg',
            alt: '',
          },
          changed: '2024-03-10',
        },
        {
          link: {
            label: 'Angular 5 rxjs 5.5.2 多个 http 并行 forkJoin 请求',
            href: '2024-03-10',
          },
          img: {
            src: '../assets/images/showcase/blog4-large.jpeg',
            alt: '',
          },
          changed: '2024-03-10',
        },
      ],
    },
  },
  {
    label: '对象',
    icon: {
      svg: 'format-list-bulleted-type',
    },
    content: {
      type: 'media-object',
      img: {
        src: '/assets/images/avatar/01.jpeg',
        style: {
          width: '45px',
          height: '45px',
        },
        alt: 'logo',
      },
      meta: '2024-03',
      title: '前端开发工程师',
      subTitle: 'Davyin',
      content:
        '专注于 Drupal 前端主题开发，目前主要从事于 Angular 前端开发，终身学习体验者，热衷于健身，希望明天比今天好一点。',
    },
  },
  {
    label: '感言',
    icon: {
      svg: 'format-wrap-square',
    },
    content: {
      type: 'testimonial',
      style: 'style-v2',
      title: 'Johnson',
      subTitle: 'FrontEnd',
      img: {
        src: '/assets/images/avatar/01.jpeg',
        alt: '',
      },
      body: '作为一名非专业的Web开发者，我曾经因为缺乏编码和设计技能而感到十分困惑。然而自从我开始使用Builder构建页面后，我的许多顾虑就消失了。',
    },
  },
  {
    label: 'Lightbox',
    icon: {
      svg: 'view-carousel-outline',
    },
    content: {
      type: 'inline-lightbox',
      label: ['查看图片', 'Word 下载', 'PDF 预览'],
      elements: [
        {
          src: '/assets/images/cases/porto1.jpg',
          caption: '描述',
          thumb: '/assets/images/cases/porto1.jpg',
        },
        {
          src: '/assets/images/cases/porto2.doc',
          preview: '/assets/images/cases/porto2.pdf',
          thumb: '',
        },
        {
          src: '/assets/images/cases/porto3.pdf',
          preview: '/assets/images/cases/porto3.pdf',
          thumb: '',
        },
      ],
    },
  },
];
