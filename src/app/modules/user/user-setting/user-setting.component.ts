import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DestroyRef,
  Inject,
  OnInit,
  inject,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { IUser } from '@core/interface/IUser';
import { UserService } from '@core/service/user.service';
import { UtilitiesService } from '@core/service/utilities.service';
import { USER } from '@core/token/token-providers';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, catchError, of } from 'rxjs';

@Component({
  selector: 'app-user-setting',
  templateUrl: './user-setting.component.html',
  styleUrl: './user-setting.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSettingComponent implements OnInit {
  form = new FormGroup({});
  model: any = {};
  fields: FormlyFieldConfig[];
  loading = true;

  dialog = inject(MatDialog);
  userService = inject(UserService);
  util = inject(UtilitiesService);
  storage = inject(LocalStorageService);
  private cd = inject(ChangeDetectorRef);
  private destroyRef = inject(DestroyRef);
  constructor(@Inject(USER) public user$: Observable<IUser>) {}

  ngOnInit(): void {
    this.user$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((user: IUser) => {
      this.loading = false;
      if (user) {
        this.fields = [
          {
            key: 'name',
            type: 'input',
            defaultValue: user.current_user.name,
            props: {
              label: '用户名',
              placeholder: '输入用户名',
              min: 2,
            },
          },
          {
            key: 'full_name',
            type: 'input',
            defaultValue: user.display_name ?? '',
            props: {
              label: '昵称',
              placeholder: '输入昵称',
              min: 2,
            },
          },
          {
            key: 'mail',
            type: 'input',
            defaultValue: user.mail,
            props: {
              label: '邮箱',
              placeholder: '请输入邮箱',
            },
            validators: {
              email: {
                expression: (control: any) =>
                  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(control.value),
                message: (_: any, field: any) => `"${field.formControl?.value}"不是有效的邮箱格式`,
              },
            },
          },
          {
            key: 'pass',
            type: 'input',
            props: {
              label: '密码',
              placeholder: '请输入密码',
              required: true,
            },
            validation: {
              messages: {
                required: '修改以上信息要求验证密码',
              },
            },
            expressions: {
              hide: (field: FormlyFieldConfig) => {
                console.log(field);
                return field.parent?.model?.mail === user.mail;
              },
            },
          },
        ];
      }
      this.cd.detectChanges();
    });
  }

  onUpdate(value: any, user: IUser): void {
    this.loading = true;
    this.userService
      .editingUser(user, value)
      .pipe(
        catchError(error => {
          return of(false);
        }),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe((res: any) => {
        if (res) {
          this.userService.updateUserBySession();
          this.util.openSnackbar('更新成功！', 'ok');
        } else {
          this.util.openSnackbar('更新失败！', 'ok');
        }
        this.loading = false;
        this.cd.detectChanges();
      });
  }

  onLogout(): void {
    this.loading = true;
    const logoutToken = this.storage.retrieve(this.userService.logoutToken);
    this.userService.logout(logoutToken);
    this.userService.userSub$.subscribe(user => {
      if (!user) {
        this.loading = false;
        this.dialog.closeAll();
      }
    });
  }
}
