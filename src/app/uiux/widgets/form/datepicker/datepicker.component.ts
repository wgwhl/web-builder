import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
})
export class DatepickerComponent implements OnInit {
  @Input() content: any;
  @Input() form: FormGroup;
  selected: Date | null;
  constructor() {}

  ngOnInit(): void {}

  get isValid(): boolean {
    if (!this.content.range && this.content?.key) {
      return this.form.controls[this.content.key].valid;
    } else {
      return false;
    }
  }

  onSelectedChange(value: Date): void {
    console.log(value);
    this.form.controls[this.content.key].setValue(value);
  }
}
