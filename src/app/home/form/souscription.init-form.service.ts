import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Introduction} from '../../shared/models/introduction';

@Injectable()
export class SouscriptionInitFormService {

  constructor(private formBuilder: FormBuilder) {

  }

  initForm(introduction: Introduction): FormGroup {
    const id = this.formBuilder.control(introduction ? introduction.id : '', [Validators.required]);
    const imageUrl = this.formBuilder.control(introduction ? introduction.imageUrl : '', [Validators.required]);
    const firstname = this.formBuilder.control(introduction ? introduction.firstname : '', [Validators.required]);
    const lastname = this.formBuilder.control(introduction ? introduction.lastname : '', [Validators.required]);
    const birthDate = this.formBuilder.control(introduction ? introduction.birthDate : '', [Validators.required]);
    const email = this.formBuilder.control(introduction ? introduction.email : '', [Validators.required]);
    const status = this.formBuilder.control(introduction ? introduction.status : '', [Validators.required]);
    const links =  this.formBuilder.control(introduction ? introduction.links : '', [Validators.required]);
    const description = this.formBuilder.control(introduction ? introduction.description : '', [Validators.required, Validators.minLength(20)]);
    return this.formBuilder.group(
      {
        id,
        imageUrl,
        firstname,
        lastname,
        birthDate,
        email,
        status,
        links,
        description});
  }
}
