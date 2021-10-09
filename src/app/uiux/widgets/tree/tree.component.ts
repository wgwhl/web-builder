import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.scss'],
})
export class TreeComponent implements OnInit {
  @Input() content: any;
  @Output() activate = new EventEmitter();
  @Output() deactivate = new EventEmitter();

  // https://angular2-tree.readme.io/docs/getting-started
  default = {
    idField: 'value',
    displayField: 'label',
    childrenField: 'elements',
  };
  options: any;
  constructor() {}

  ngOnInit(): void {
    this.options = Object.assign(this.default, this.content.options);
  }

  onActivate(event: any): void {
    this.activate.emit(event);
  }

  onDeactivate(event: any): void {
    this.deactivate.emit(event);
  }
}
