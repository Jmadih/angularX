import {FormBuilder, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Introduction} from '../../shared/models/introduction';

@Injectable()
export class SouscriptionInitFormService {

  constructor(private formBuilder: FormBuilder) {

  }

  initForm(introduction: Introduction): FormGroup {
    const  imgUrl = this.formBuilder.control('');
    return this.formBuilder.group({});
  }
}
