import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormService } from 'src/app/service/form.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-search-sidebar',
  templateUrl: './search-sidebar.component.html',
  styleUrls: ['./search-sidebar.component.scss'],
})
export class SearchSidebarComponent implements OnInit {
  @Input() content: any;
  @Output() selectChange = new EventEmitter();

  treeView: any[];
  panelOpenState = true;
  form: FormGroup;
  constructor(private formService: FormService) {}

  ngOnInit(): void {
    this.initForm(this.content);
  }

  initForm(items: any[]): void {
    this.form = this.formService.toFormGroup(items);
    this.form.valueChanges.subscribe((value) => {
      console.log(value);
      this.selectChange.emit(value);
    });
  }

  clear(): void {
    this.form.reset();
    this.selectChange.emit(this.form.value);
  }
}
