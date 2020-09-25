import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-intro-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() model: any = {};

  @Output() cancel$;

  @Output() submit$;

  constructor() {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
  }

  ngOnInit() {
  }

  cancel() {
    this.cancel$.emit();
  }

  submit(model) {
    this.submit$.emit(model);
  }
}
