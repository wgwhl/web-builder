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
import { BRANDING, PAGE_CONTENT } from '@core/token/token-providers';
import { of } from 'rxjs';
import { canvasHeader, medicalInverse } from '../../branding/Branding.json';

export default {
  title: '示例页面/首页示例/11 客户故事',
  id: 'home-v11',
  component: BlockComponent,
  decorators: [
    moduleMetadata({
      entryComponents: [...StorysModule.forEntryComponents()],
      declarations: [],
      imports: [StorysModule.forRoot(), BlockModule, BrandingModule],
      providers: [
        {
          provide: BRANDING,
          useValue: of({
            ...canvasHeader,
            ...medicalInverse,
          }),
        },
      ],
    }),
    componentWrapperDecorator(
      (story) => `
      <app-header></app-header>
      <div style="overflow:hidden">
      ${story}
      </div>
      <app-footer></app-footer>
    `
    ),
  ],
  parameters: {
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
Page.storyName = '预览';
const content = of({
  title: 'Stories',
  configBak: {
    headerMode: {
      transparent: true,
      style: 'light',
    },
  },
  meta: [
    {
      name: 'description',
      content: '',
    },
    {
      name: 'keywords',
      content: '',
    },
  ],
  body: [
    {
      type: 'hero-1v2',
      spacer: 'none',
      classes: 'text-light text-center',
      sliders: {
        params: {
          slidesPerView: 1,
          spaceBetween: 0,
          pagination: true,
        },
        elements: [
          {
            title: 'Fake Drugs 101: Facts on Illegal, Counterfeit Drugs',
            subTitle:
              'People all over the world rely on medication for things like managing chronic illness, preventing pregnancy, and treating life-threatening diseases.',
            img: {
              src: '/assets/images/hero/hero-1-v2-4.jpeg',
              alt: '',
            },
            btn: {
              href: '#',
              mode: 'raised',
              color: 'primary',
              label: 'Read More',
              classes: 'round-btn',
            },
          },
          {
            title:
              'Five Ways Climate Change Impacts Our Health—and What We Can Do About It',
            subTitle:
              'It took a split second, recalls Louise Proud. Something in the air triggered an asthma attack in her 18-month-old daughter. The baby’s lips turned blue as Proud rushed her to the hospital in a panic.',
            img: {
              src: '/assets/images/hero/hero-1-v2-3.jpeg',
              alt: '',
            },
            btn: {
              href: '#',
              mode: 'raised',
              color: 'primary',
              label: 'Read More',
              classes: 'round-btn',
            },
          },
          {
            title: 'Understanding Obesity as a Complex Disease',
            subTitle:
              'Some people think obesity is simply caused by unhealthy eating habits and not exercising enough.',
            img: {
              src: '/assets/images/hero/hero-1-v2-2.jpeg',
              alt: '',
            },
            btn: {
              href: '#',
              mode: 'raised',
              color: 'primary',
              label: 'Read More',
              classes: 'round-btn',
            },
          },
        ],
      },
      bg: {
        classes: 'bg-center overlay overlay-60',
        img: {
          src: '/assets/images/medical/hero-02.jpeg',
          mobile: '/assets/images/medical/hero-02.jpeg',
        },
      },
    },
    {
      type: 'carousel-1v2',
      title: {
        label: 'Articles',
        style: 'style-v6 line-full-width',
      },
      bg: {
        classes: 'bg-white bg-fill-width',
      },
      sliders: {
        params: {
          slidesPerView: 1.2,
          spaceBetween: 10,
          navigation: false,
          pagination: false,
          breakpoints: {
            '600': {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            '960': {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          },
        },
        classes: 'p-bottom',
        elements: [
          {
            type: 'card',
            classes: 'card-no-shadow',
            link: {
              href: '#',
              label: 'A Two-Pronged Approach to Addressing COVID-19',
            },
            body: 'Explore how vaccinations and treatment with authorized oral medication for those eligible are working to combat COVID-19.',
            moreLabel: 'Learn More',
            feature: {
              fullIcon: 'fullscreen',
              openIcon: 'open_in_new',
              link: '#',
              ratios: 'media-4-3',
              img: {
                classes: 'object-fit',
                src: '/assets/images/medical/card-01.jpg',
                alt: 'alt',
              },
            },
          },
          {
            type: 'card',
            link: {
              href: '#',
              label: 'Our Vaccine Efforts',
            },
            classes: 'card-no-shadow',
            body: 'Follow the latest progress in the development, manufacturing, and distribution of our vaccine to help protect against the novel coronavirus.',
            feature: {
              fullIcon: 'fullscreen',
              openIcon: 'open_in_new',
              link: '#',
              ratios: 'media-4-3',
              img: {
                classes: 'object-fit',
                src: '/assets/images/medical/card-02.jpg',
                alt: 'alt',
              },
            },
          },
          {
            type: 'card',
            link: {
              href: '#',
              label: 'Our Treatment Efforts',
            },
            classes: 'card-no-shadow',
            body: 'Orally administered treatments for COVID-19 are designed to be prescribed at the first sign of infection, potentially helping patients avoid severe illness, which can lead to hospitalization and death.',
            feature: {
              fullIcon: 'fullscreen',
              openIcon: 'open_in_new',
              link: '#',
              ratios: 'media-4-3',
              img: {
                classes: 'object-fit',
                src: '/assets/images/medical/card-03.jpg',
                alt: 'alt',
              },
            },
          },
          {
            type: 'card',
            link: {
              href: '#',
              label:
                'Recursos para Hispanohablantes (Resources for Spanish-Speakers)',
            },
            classes: 'card-no-shadow',
            body: 'El Dr. Santiago López informa en temas relacionados a la atención médica tales como vacunas, noticias falsas, y ensayos clínicos.',
            feature: {
              fullIcon: 'fullscreen',
              openIcon: 'open_in_new',
              link: '#',
              ratios: 'media-4-3',
              img: {
                classes: 'object-fit',
                src: '/assets/images/medical/card-04.jpg',
                alt: 'alt',
              },
            },
          },
          {
            type: 'card',
            link: {
              href: '#',
              label: 'Collaborating to Address COVID-19',
            },
            classes: 'card-no-shadow',
            body: 'We’re collaborating across the healthcare innovation ecosystem to help advance research and address the COVID-19 global health crisis.',
            feature: {
              fullIcon: 'fullscreen',
              openIcon: 'open_in_new',
              link: '#',
              ratios: 'media-4-3',
              img: {
                classes: 'object-fit',
                src: '/assets/images/medical/card-05.jpg',
                alt: 'alt',
              },
            },
          },
          {
            type: 'card',
            link: {
              href: '#',
              label: 'Supporting Those Fighting on the Front Lines',
            },
            classes: 'card-no-shadow',
            body: 'The Pfizer Foundation is supporting our partners who are working tirelessly to address the evolving health needs related to COVID-19 in the U.S. and around the world.',
            feature: {
              fullIcon: 'fullscreen',
              openIcon: 'open_in_new',
              link: '#',
              ratios: 'media-4-3',
              img: {
                classes: 'object-fit',
                src: '/assets/images/medical/card-06.jpg',
                alt: 'alt',
              },
            },
          },
        ],
      },
    },
    {
      type: 'list-2v1',
      title: {
        label: 'Latest Articles',
        style: 'style-v4',
        classes: 'mat-display-1',
      },
      params: {
        apiBak: '/api/v2/xxx',
      },
      more: {
        label: 'More Articles',
        href: '#',
        mode: 'raised',
        color: 'primary',
      },
      elements: [
        {
          link: {
            label:
              'Cancer Biomarkers: Paving the Way for Better Lung Cancer Treatment',
            href: '#',
          },
          subTitle: 'Science & Innovation',
          body: 'Advancements with cancer biomarkers are paving the way for better lung cancer treatments and personalization for patients.',
          img: {
            src: '/assets/images/medical/showcase-03.jpg',
            alt: '',
          },
        },
        {
          link: {
            label:
              'Maternal Immunization: Protecting Children from RSV and GBS',
            href: '#',
          },
          subTitle: 'Science & Innovation',
          body: 'Scientists at the forefront of fetal health innovation are studying ways that vaccines given during pregnancy can continue to protect children in the months after birth.',
          img: {
            src: '/assets/images/medical/showcase-04.jpg',
            alt: '',
          },
        },
        {
          link: {
            label:
              'Pfizer’s Biopharma Global Chief Marketing Officer Drew Panayiotou is ‘Radically Obsessed’ with Listening to Patients',
            href: '#',
          },
          subTitle: 'Real People',
          body: "For Pfizer's Biopharma Global Chief Marketing Officer Drew Panayiotou, working at Pfizer comes with an enormous perk. The potential to change the world.",
          img: {
            src: '/assets/images/medical/showcase-05.jpg',
            alt: '',
          },
        },
      ],
    },
  ],
});
Page.args = {
  pageContent$: content,
};
