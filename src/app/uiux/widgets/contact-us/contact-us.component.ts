import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormService } from '@core/service/form.service';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '@core/service/api.service';
import { UtilitiesService } from '@core/service/utilities.service';
import { UserState } from '@core/mobx/user/UserState';
// TODO: need move to combs
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactUsComponent implements OnInit {
  @Input() content: any;
  form: FormGroup;
  success = false;
  submited = false;
  constructor(
    private apiService: ApiService,
    private cd: ChangeDetectorRef,
    public formService: FormService,
    private http: HttpClient,
    private utilitiesService: UtilitiesService
  ) {}

  ngOnInit(): void {
    this.form = this.formService.toFormGroup(this.content.forms);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }
    this.submited = true;
    const data = this.formService.getwebFormData(
      this.content.params,
      this.form
    );
    this.http
      .post(
        `${this.apiService.apiUrl}/webform_rest/submit`,
        data,
        this.apiService.httpOptionsOfCommon
      )
      .subscribe(
        (res) => {
          this.submited = false;
          this.success = true;
          this.utilitiesService.openSnackbar('成功提交！');
          this.cd.detectChanges();
        },
        (error) => {
          this.submited = false;
          this.utilitiesService.openSnackbar(`Error: ${error.message}`);
          this.cd.detectChanges();
        }
      );
  }
}
