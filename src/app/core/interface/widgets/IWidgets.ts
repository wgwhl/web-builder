export interface IInlineLightbox {
  label: string[];
  elements: ILightboxElement[];
}

export interface ILightboxElement {
  src: string;
  preview?: string;
  caption: string;
  thumb: string;
  downloadUrl: string;
}

export interface IDynamicTable {
  params?: {
    sticky: boolean;
    style: object;
  };
  header: {
    label: string;
    key: string;
    classes?: string | string[] | Set<string> | { [klass: string]: any };
    style?: object;
    dialog?: {
      shorten: number;
      label: string;
    };
  }[];
  classes?: string | string[] | Set<string> | { [klass: string]: any };
  elements: any[];
}
