import { MatDialogConfig } from '@angular/material/dialog';
import { Params } from '@angular/router';

export interface ILink {
  href?: string;
  classes?: any;
  target?: string;
  label: any;
  queryParams?: Params | null;
  fragment?: string;
  params?: object;
  dialog?: {
    params: MatDialogConfig;
    data: any[];
    afterClosed?: {
      sucess: {
        label: string;
      };
      emit: boolean;
    };
  };
}
