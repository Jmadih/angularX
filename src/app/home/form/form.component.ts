import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {SouscriptionInitFormService} from './souscription.init-form.service';
import {MatDialogRef} from '@angular/material/dialog';
import {Introduction} from '../../shared/models/introduction';

@Component({
  selector: 'app-intro-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class FormComponent implements OnInit {

  model: Introduction;

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<FormComponent>,
              private souscriptionInitFormService: SouscriptionInitFormService) {
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
