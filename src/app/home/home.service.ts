import { Injectable } from '@angular/core';
import {Link} from '../shared/models/link';
import {Introduction, Status} from '../shared/models/introduction';
import * as _ from 'lodash';

@Injectable()
export class HomeService {

  introductions : Introduction[] = [{
    id : 1,
    firstname :  'Lucie',
    lastname :  'Macdonie',
    imageUrl :  'assets/images/lucie.jpg',
    birthDate :  '10/09/1985',
    gender:  'W',
    email:  'lucie.macdonie@gmail.com',
    status: Status.AVAILABLE,
    description:  'I am a professional tiger wrestler. I wrestled the biggest Siberian Tigers for the opening act at the Awesome and Dangerous Circus.',
    links : [
      new Link("", "./assets/images/linkedin.png"),
      new Link("", "./assets/images/github.png"),
      new Link("", "./assets/images/codepen.png")],
    experience: 11
  },
    {
      id : 2,
      firstname :  'Jean',
      lastname :  'Dsputer',
      imageUrl :  'assets/images/jean.jpg',
      birthDate :  '03/02/1989',
      gender:  'M',
      email:  'jean.dsputer@gmail.com',
      status: Status.UNAVAILABLE,
      description:  'I am a mechanical engineer. I\'ve worked at the biggest aerospace company',
      links : [
        new Link("", "./assets/images/linkedin.png"),
        new Link("", "./assets/images/github.png"),
        new Link("", "./assets/images/codepen.png")],
      experience: 5
    }];

  constructor() { }

  // Endpoint Introductions: `${BASE_URL + "/" + appConst.urls.intros}/${id}`
  getIntroduction(id: number){
    return _.find(this.introductions, { 'id': +id});
  }

}
