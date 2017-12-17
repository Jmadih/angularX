import {Component, OnInit, Output, Input, EventEmitter} from '@angular/core';
import {FormGroup, FormControl} from "@angular/forms";
import {Introduction} from '../../shared/models/introduction';
import {MatDialog, MatDialogRef} from '@angular/material';
import {SouscriptionInitFormService} from './introduction.init-form.service';

@Component({
  selector: 'app-intro-form',
  templateUrl: 'form.component.html',
  styleUrls: ['form.component.scss']
})
export class IntroFormComponent implements OnInit {

  model: Introduction;

  form: FormGroup;

  constructor(private dialogRef: MatDialogRef<IntroFormComponent>,
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
