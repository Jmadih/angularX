import {Component, EventEmitter, OnInit} from '@angular/core';
import {UntypedFormGroup} from '@angular/forms';
import {MatLegacyDialogRef as MatDialogRef} from '@angular/material/legacy-dialog';
import {Introduction} from '../../shared/models/introduction';
import {SouscriptionInitFormService} from './introduction.init-form.service';

@Component({
  selector: 'app-intro-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class FormComponent implements OnInit {

  model: Introduction;

  cancel$;

  submit$;

  form: UntypedFormGroup;

  constructor(private dialogRef: MatDialogRef<FormComponent>,
              private souscriptionInitFormService: SouscriptionInitFormService) {
    this.submit$ = new EventEmitter();
    this.cancel$ = new EventEmitter();
  }

  ngOnInit() {
    this.form = this.souscriptionInitFormService.initForm(this.model);
  }

  cancel() {
    this.dialogRef.close();
  }

  submit(){
    this.dialogRef.close(this.form.value);
  }
}
