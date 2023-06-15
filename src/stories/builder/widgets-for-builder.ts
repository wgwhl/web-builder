import { IBuilderWidget } from '@core/interface/IBuilder';
import * as textStory from '../widgets/base/Text.stories';
import * as imgStory from '../widgets/base/Img.stories';
import * as chartStory from '../widgets/chart/ChartBar.stories';
import * as spacerStory from '../theme/Spacer.stories';
import * as formStory from '../widgets/Form.stories';
import * as iframeStory from '../widgets/Iframe.stories';
import * as lightboxStory from '../widgets/InlineLightbox.stories';
import * as locationStory from '../components/map/location.stories';
import * as panelStory from '../widgets/Panel.stories';
import * as shapeStory from '../widgets/Shape.stories';
import * as stepperStory from '../widgets/Stepper.stories';
import * as swiperStory from '../widgets/Swiper.stories';
import * as tabStory from '../widgets/Tab.stories';
import * as searchActionStory from '../widgets/actions/SearchAction.stories';
import * as btnStory from '../widgets/base/Btn.stories';
import * as btnVideoStory from '../widgets/base/BtnVideo.stories';
import * as dynamicTableStory from '../widgets/base/DynamicTable.stories';
import * as iconStory from '../widgets/base/Icon.stories';
import * as linkStory from '../widgets/base/Link.stories';
const {
  Center: { args: text },
} = textStory;

const {
  Default: { args: img },
} = imgStory;

const {
  Bar: { args: chart },
} = chartStory;

const {
  Normal: { args: spacer },
} = spacerStory as any;

const {
  Default: { args: form },
} = formStory as any;

const {
  CustomSize: { args: iframe },
} = iframeStory;

const {
  Default: { args: lightbox },
} = lightboxStory;

const {
  Default: { args: location },
} = locationStory;

const {
  Default: { args: panel },
} = panelStory;

const {
  Default: { args: shape },
} = shapeStory;

const {
  Horizontal: { args: stepper },
} = stepperStory;

const {
  Default: { args: swiper },
} = swiperStory;

const {
  Pills: { args: tab },
} = tabStory;

const {
  Default: { args: searchAction },
} = searchActionStory;

const {
  BtnLink: { args: btn },
} = btnStory;

const {
  Default: { args: btnVideo },
} = btnVideoStory;

const {
  DialogColumn: { args: dynamicTable },
} = dynamicTableStory;

const {
  Primary: { args: icon },
} = iconStory;

const {
  Default: { args: link },
} = linkStory;

export const widgets: IBuilderWidget[] = [
  {
    label: 'Basic',
    elements: [
      {
        label: 'Text',
        icon: {
          svg: 'format-size',
        },
        ...text,
      },
      {
        label: 'Image',
        icon: {
          svg: 'image-outline',
        },
        ...img,
      },
      {
        label: 'Btn',
        icon: { svg: 'button-cursor' },
        ...btn,
      },
      {
        label: 'Link',
        icon: { svg: 'link' },
        ...link,
      },
      {
        label: 'Btn Video',
        icon: { svg: 'play-circle-outline' },
        ...btnVideo,
      },
      {
        label: 'Tabel',
        icon: { svg: 'table' },
        ...dynamicTable,
      },
      {
        label: 'Chart',
        icon: {
          svg: 'chart-line',
        },
        ...chart,
      },
      {
        label: 'Icon',
        icon: {
          svg: 'svg',
        },
        ...icon,
      },
      {
        label: 'Spacer',
        icon: {
          svg: 'color-helper',
        },
        ...spacer,
      },
      {
        label: 'Tab',
        icon: {
          svg: 'tab',
        },
        ...tab,
      },

      {
        label: 'Form',
        icon: {
          svg: 'checkbox-marked-outline',
        },
        content: {
          type: 'formly',
          fields: form.fields,
        },
      },
      {
        label: 'Panel',
        icon: {
          svg: 'format-line-weight',
        },
        ...panel,
      },
    ],
  },
  {
    label: '常用',
    elements: [
      {
        label: 'SearchBar',
        icon: { svg: 'magnify' },
        ...searchAction,
      },
      {
        label: 'Iframe',
        icon: {
          svg: 'application-array-outline',
        },
        ...iframe,
      },
      {
        label: 'Lightbox',
        icon: {
          svg: 'view-carousel-outline',
        },
        ...lightbox,
      },
      {
        label: 'Swiper',
        icon: {
          svg: 'view-array-outline',
        },
        ...swiper,
      },
      {
        label: 'Map',
        icon: {
          svg: 'map-marker',
        },
        ...location,
      },
      {
        label: '形状',
        icon: {
          svg: 'cosine-wave',
        },
        ...shape,
      },
      {
        label: 'Stepper',
        icon: {
          svg: 'debug-step-over',
        },
        ...stepper,
      },
    ],
  },
];
