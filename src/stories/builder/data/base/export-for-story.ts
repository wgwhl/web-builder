import { IBuilderComponent } from '@core/interface/IBuilder';
import { common } from './common.builder';
import { layoutBuilder } from './layout-builder-for-story';
import { sections } from './sections-for-story';
import { custom } from './custom-for-story';

export const base: IBuilderComponent[] = [
  {
    label: '动态构建',
    id: 'layout',
    elements: layoutBuilder,
  },
  {
    label: '自定义组件',
    id: 'custom',
    elements: custom,
  },
  {
    label: '常用 Section',
    id: 'section',
    elements: sections,
  },
  {
    label: '常用组件',
    id: 'base',
    elements: common,
  },
];
