import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Injectable} from '@angular/core';
import {Introduction} from '../../shared/models/introduction';

@Injectable()
export class SouscriptionInitFormService {

  constructor(private formBuilder: FormBuilder) {

  }

  initForm(introduction: Introduction): FormGroup {
    const id = this.formBuilder.control(introduction ? introduction.id : '');
    const imageUrl = this.formBuilder.control(introduction ? introduction.imageUrl : '');
    const firstname = this.formBuilder.control(introduction ? introduction.firstname : '');
    const lastname = this.formBuilder.control(introduction ? introduction.lastname : '');
    const birthDate = this.formBuilder.control(introduction ? introduction.birthDate : '');
    const email = this.formBuilder.control(introduction ? introduction.email : '');
    const status = this.formBuilder.control(introduction ? introduction.status : '');
    const links =  this.formBuilder.control(introduction ? introduction.links : '');
    const description = this.formBuilder.control(introduction ? introduction.description : '');
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
