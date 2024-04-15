export const layoutBuilder: any[] = [
  {
    label: '默认',
    icon: {
      svg: 'view-week-outline',
    },
    content: {
      type: 'layout-builder',
      spacer: 'md',
      fullWidth: false,
      bg: {
        classes: 'bg-fill-width',
        img: {
          src: '/assets/images/bg/home-shape.png',
          alt: 'home-shape.png',
          classes: 'object-fit',
        },
      },
      direction: 'row wrap',
      horizontal: 'center',
      vertical: 'center',
      layoutAlign: 'center center',
      gap: {
        xs: 8,
        sm: 16,
        md: 32,
        lg: 48,
      },
      elements: [
        {
          row: {
            xs: 12,
            sm: 6,
            md: 6,
            lg: 7,
          },
          direction: 'column',
          horizontal: 'center',
          vertical: 'flex-start',
          layoutAlign: 'center start',
          gap: {
            xs: '10',
            sm: '10',
            md: '10',
            lg: '10',
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: '',
          style: {
            borderRadius: 'none',
            padding: '',
            margin: '',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              opacity: 0,
              delay: 0,
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              type: 'title',
              label:
                '欢迎使用 <strong class="text-primary">Web Builder</strong> 快速构建响应式页面',
              style: 'style-v4',
              classes: 'mat-display-1 bold',
            },
            {
              type: 'text',
              spacer: 'none',
              body: '信使UI是基于 Material 的 Angular 前端框架， 五十多个丰富的组件可提供优秀的数字创新体验，使用 Web Builder 可以通过拖拽快速构建响应式、多主题的 Web 页面。Builder 与众不同的是它完全融入到了 <strong class="text-primary">Storybook</strong> 当中，它是一个面向UI组件开发的工具，提供了组件驱动的开发方式、交互式展示和测试界面，以及文档化功能。',
              bg: {
                classes: 'bg- bg-fill-width',
              },
              classes: '',
            },
            {
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
            {
              type: 'btn',
              href: '/node/1',
              target: '_blank',
              label: '了解更多',
              mode: 'raised',
              color: 'primary',
            },
          ],
        },
        {
          classes: '',
          row: {
            xs: 12,
            sm: 6,
            md: 6,
            lg: 5,
          },
          direction: 'column',
          layoutAlign: 'center stretch',
          elements: [
            {
              classes: '',
              alt: 'alt',
              hostClasses: 'text-center',
              animate: {
                from: {
                  x: '100',
                  y: 0,
                  rotation: 0,
                  scale: 0.8,
                  opacity: 1,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                  scrub: false,
                },
              },
              type: 'img',
              src: '/assets/images/illustration/11.png',
              style: {
                'max-width': '60%',
              },
            },
          ],
        },
      ],
    },
  },
  {
    label: '两栏',
    icon: {
      svg: 'image-text',
    },
    content: {
      fullWidth: false,
      spacer: 'md',
      bgClasses: 'bg-fill-width',
      overlay: '',
      classes: '',
      id: '',
      bg: {
        img: {
          src: '',
          classes: 'object-fit',
          alt: '',
        },
        classes: 'bg-fill-width',
        overlay: '',
      },
      direction: 'row wrap',
      horizontal: 'center',
      vertical: 'stretch',
      layoutAlign: 'center stretch',
      gap: {
        xs: 0,
        sm: 16,
        md: 32,
        lg: 48,
      },
      animate: {
        from: {
          x: 0,
          y: '100',
          rotation: 0,
          scale: 1,
          opacity: 0,
          delay: 0,
          duration: 1,
          ease: 'none',
        },
        trigger: {
          onEnter: 'play',
          onLeave: 'none',
          onEnterBack: 'none',
          onLeaveBack: 'none',
          start: 'top 90%',
          end: 'top 40%',
        },
      },
      type: 'layout-builder',
      elements: [
        {
          row: {
            xs: 12,
            sm: 6,
            md: 6,
            lg: 6,
          },
          direction: 'column',
          horizontal: 'center',
          vertical: 'center',
          layoutAlign: 'center center',
          gap: {
            xs: '10',
            sm: '10',
            md: '10',
            lg: '10',
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-shadow bg-fill-width',
          },
          classes: '',
          style: {
            borderRadius: 'none',
            margin: '0 0 20px 0',
          },
          animate: {
            from: {
              x: 0,
              y: '0',
              rotation: 0,
              scale: 1,
              opacity: 1,
              delay: 0,
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              style: 'none',
              classes: 'mat-display-1 bold',
              typed: {
                enable: false,
                config: {
                  typeSpeed: 120,
                },
                strings: [
                  {
                    label: 'web builder',
                  },
                ],
              },
              animate: {
                from: {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                },
              },
              type: 'title',
              label: '自由搭配，玩出新意',
            },
            {
              type: 'link',
              label: '链接搭配你的风格',
              classes: '',
              href: '/',
            },
            {
              src: 'assets/images/products/huawei-watch-gt4-select-strap.webp',
              classes: '',
              alt: 'alt',
              style: {
                aspectRatio: 'auto',
                objectFit: 'initial',
              },
              hostClasses: 'text-center',
              animate: {
                from: {
                  x: '0',
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 0,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                  scrub: true,
                },
              },
              type: 'img',
            },
          ],
        },
        {
          row: {
            xs: 12,
            sm: 6,
            md: 6,
            lg: 6,
          },
          direction: 'column',
          horizontal: 'center',
          vertical: 'center',
          layoutAlign: 'center center',
          gap: {
            xs: '10',
            sm: '10',
            md: '10',
            lg: '10',
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-shadow bg-fill-width',
          },
          classes: '',
          style: {
            borderRadius: 'none',
            margin: '0 0 20px 0',
          },
          animate: {
            from: {
              x: 0,
              y: 0,
              rotation: 0,
              scale: 1,
              opacity: 1,
              delay: 0,
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              style: 'none',
              classes: 'mat-display-1 bold',
              typed: {
                enable: false,
                config: {
                  typeSpeed: 120,
                },
                strings: [
                  {
                    label: 'web builder',
                  },
                ],
              },
              animate: {
                from: {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                },
              },
              type: 'title',
              label: '款款亮眼，爱不释手',
            },
            {
              type: 'link',
              label: '探索更多',
              classes: '',
              href: '/',
            },
            {
              src: 'assets/images/products/huawei-watch-gt4-Huawei-wearables.webp',
              classes: '',
              alt: 'alt',
              style: {
                aspectRatio: 'auto',
                objectFit: 'initial',
              },
              hostClasses: 'text-center',
              animate: {
                from: {
                  x: '0',
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 0,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                  scrub: true,
                },
              },
              type: 'img',
            },
          ],
        },
      ],
    },
  },
  {
    label: '三栏',
    icon: {
      svg: 'view-week-outline',
    },
    content: {
      type: 'layout-builder',
      spacer: 'md',
      fullWidth: false,
      bg: {
        classes: 'bg-shadow bg-fill-width',
        img: {
          src: '/assets/images/bg/home-shape.png',
          alt: 'home-shape.png',
          classes: 'object-fit',
        },
      },
      direction: 'row wrap',
      horizontal: 'center',
      vertical: 'center',
      layoutAlign: 'center center',
      gap: {
        xs: 8,
        sm: 16,
        md: 32,
        lg: 48,
      },
      elements: [
        {
          row: {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 4,
          },
          direction: 'row',
          horizontal: 'center',
          vertical: 'stretch',
          layoutAlign: 'center stretch',
          bg: {
            img: {
              src: '',
              classes: 'object-fit',
              alt: '',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: '',
          style: {
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              delay: 0,
              duration: 1,
              ease: 'none',
              opacity: 0,
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
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
          ],
        },
        {
          row: {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 4,
          },
          direction: 'row',
          horizontal: 'center',
          vertical: 'stretch',
          layoutAlign: 'center stretch',
          bg: {
            img: {
              src: '',
              classes: 'object-fit',
              alt: '',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: '',
          style: {
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              delay: '0.6',
              duration: 1,
              ease: 'none',
              opacity: 0,
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              type: 'box',
              img: {
                src: '/assets/images/svg/Asset189.svg',
                alt: 'browser',
              },
              style: 'style-v3 use-image primary',
              title: {
                href: '#',
                label: '易用的编辑器',
              },
              content:
                '通过友好的预览、拖放媒体提高内容编辑的易用性，高效的工作；',
            },
          ],
        },
        {
          row: {
            xs: 12,
            sm: 4,
            md: 4,
            lg: 4,
          },
          direction: 'row',
          horizontal: 'center',
          vertical: 'stretch',
          layoutAlign: 'center stretch',
          bg: {
            img: {
              src: '',
              classes: 'object-fit',
              alt: '',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: '',
          style: {
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              delay: '1',
              duration: 1,
              ease: 'none',
              opacity: '0',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              type: 'box',
              img: {
                src: '/assets/images/svg/Asset190.svg',
                alt: 'browser',
              },
              style: 'style-v3 use-image',
              title: {
                href: '#',
                label: '多语言',
              },
              content:
                'Drupal 100多种语言提供了无以伦比的支持和翻译工作流程； ',
            },
          ],
        },
      ],
    },
  },
  {
    label: '四栏',
    icon: {
      svg: 'land-rows-vertical',
    },
    content: {
      fullWidth: false,
      spacer: 'md',
      bgClasses: 'bg-shadow bg-fill-width',
      overlay: '',
      classes: '',
      id: '',
      bg: {
        img: {
          src: '/assets/images/bg/home-shape.png',
          classes: 'object-fit',
          alt: 'home-shape.png',
        },
        classes: 'bg-shadow bg-fill-width',
        overlay: '',
      },
      direction: 'row wrap',
      horizontal: 'center',
      vertical: 'center',
      layoutAlign: 'center center',
      gap: {
        xs: 8,
        sm: 16,
        md: 32,
        lg: 48,
      },
      animate: {
        from: {
          x: 0,
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          delay: 0,
          duration: 1,
          ease: 'none',
        },
        trigger: {
          onEnter: 'play',
          onLeave: 'none',
          onEnterBack: 'none',
          onLeaveBack: 'none',
          start: 'top 90%',
          end: 'top 40%',
        },
      },
      type: 'layout-builder',
      elements: [
        {
          row: {
            xs: 12,
            sm: 6,
            md: 3,
            lg: 3,
          },
          direction: 'column',
          horizontal: 'flex-end',
          vertical: 'flex-end',
          layoutAlign: 'end end',
          gap: {
            xs: '10',
            sm: '10',
            md: '10',
            lg: '10',
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: '',
          style: {
            borderRadius: 'none',
            margin: '',
            padding: '',
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              opacity: '0',
              delay: 0,
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              spacer: 'none',
              body: '<p style="display: inline-block; margin-bottom: 0px;">把想法转化给设计稿，根据设计稿通过拖拽出响应式页面，大大降低开发成本，将注意力放在您的业务。</p>',
              animate: {
                from: {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                },
              },
              type: 'text',
            },
            {
              src: 'https://www2.bettyblocks.com/hubfs/RH-images/striped-arrow.svg',
              classes: 'm-bottom-md',
              alt: 'alt',
              style: {
                aspectRatio: 'auto',
                objectFit: 'initial',
              },
              hostClasses: 'text-center',
              animate: {
                from: {
                  x: 0,
                  y: 0,
                  rotation: 0,
                  scale: 1,
                  opacity: 1,
                  delay: 0,
                  duration: 1,
                  ease: 'none',
                },
                trigger: {
                  onEnter: 'play',
                  onLeave: 'none',
                  onEnterBack: 'none',
                  onLeaveBack: 'none',
                  start: 'top 90%',
                  end: 'top 40%',
                },
              },
              type: 'img',
            },
          ],
        },
        {
          row: {
            xs: 12,
            sm: 6,
            md: 3,
            lg: 3,
          },
          direction: 'row',
          horizontal: 'center',
          vertical: 'stretch',
          layoutAlign: 'center stretch',
          gap: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: 'm-bottom-md',
          style: {
            borderRadius: 'none',
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              opacity: '0',
              delay: '0.6',
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              type: 'card-1v1',
              link: {
                href: '/node/463',
                label: '信使 UI 应用初始化及页面渲染流程',
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
                  src: '/assets/images/hero/bg01.jpg',
                  alt: 'alt',
                  style: {
                    width: 'auto',
                    height: 'auto',
                    opacity: '1',
                    borderRadius: 0,
                    boxShadow: 'none',
                    aspectRatio: 'auto',
                    objectFit: 'initial',
                  },
                },
              },
              moreLabel: '查看更多',
            },
          ],
        },
        {
          row: {
            xs: 12,
            sm: 6,
            md: 3,
            lg: 3,
          },
          direction: 'row',
          horizontal: 'center',
          vertical: 'stretch',
          layoutAlign: 'center stretch',
          gap: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: 'm-bottom-md',
          style: {
            borderRadius: 'none',
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              opacity: '0',
              delay: '1.2',
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              type: 'card-1v1',
              link: {
                href: '/node/462',
                label: '信使Web builder 新增自定义组件流程',
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
                  src: '/assets/images/hero/bg02.jpg',
                  alt: 'alt',
                  style: {
                    width: 'auto',
                    height: 'auto',
                    opacity: '1',
                    borderRadius: 0,
                    boxShadow: 'none',
                    aspectRatio: 'auto',
                    objectFit: 'initial',
                  },
                },
              },
              moreLabel: '查看更多',
            },
          ],
        },
        {
          row: {
            xs: 12,
            sm: 6,
            md: 3,
            lg: 3,
          },
          direction: 'row',
          horizontal: 'center',
          vertical: 'stretch',
          layoutAlign: 'center stretch',
          gap: {
            xs: 0,
            sm: 0,
            md: 0,
            lg: 0,
          },
          bg: {
            img: {
              src: '',
              alt: '',
              classes: 'object-fit',
            },
            overlay: '',
            classes: 'bg-fill-width',
          },
          classes: 'm-bottom-md',
          style: {
            borderRadius: 'none',
            paddingTop: '0px',
            paddingRight: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            marginTop: '0px',
            marginRight: '0px',
            marginBottom: '0px',
            marginLeft: '0px',
          },
          animate: {
            from: {
              x: 0,
              y: '100',
              rotation: 0,
              scale: 1,
              opacity: '0',
              delay: '1.2',
              duration: 1,
              ease: 'none',
            },
            trigger: {
              onEnter: 'play',
              onLeave: 'none',
              onEnterBack: 'none',
              onLeaveBack: 'none',
              start: 'top 90%',
              end: 'top 40%',
            },
          },
          elements: [
            {
              type: 'card-1v1',
              link: {
                href: '/node/450',
                label: '作为前端开发，你应该知道的这十几个在线免费工具',
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
                  src: '/assets/images/hero/bg05.jpg',
                  alt: 'alt',
                  style: {
                    width: 'auto',
                    height: 'auto',
                    opacity: '1',
                    borderRadius: 0,
                    boxShadow: 'none',
                    aspectRatio: 'auto',
                    objectFit: 'initial',
                  },
                },
              },
              moreLabel: '查看更多',
            },
          ],
        },
      ],
    },
  },
  {
    label: '空白',
    icon: {
      svg: 'border-none-variant',
    },
    content: {
      type: 'layout-builder',
      spacer: 'md',
      fullWidth: false,
      bg: {
        classes: 'bg-fill-width',
      },
      direction: 'row wrap',
      horizontal: 'center',
      vertical: 'center',
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
];
