import { Component, OnInit } from '@angular/core';
import {Introduction, Status} from '../shared/models/introduction';
import {Link} from '../shared/models/link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private disable = false;
  introduction: Introduction;
  introductions: Introduction[] = [{
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
      new Link('', './assets/images/linkedin.png'),
      new Link('', './assets/images/github.png'),
      new Link('', './assets/images/codepen.png')],
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
        new Link('', './assets/images/linkedin.png'),
        new Link('', './assets/images/github.png'),
        new Link('', './assets/images/codepen.png')],
      experience: 5
    }];



  constructor() {
  }

  ngOnInit() {
    this.introduction = this.introductions[0];
  }

  isAvailable(status: Status): boolean {
    return status === Status.AVAILABLE;
  }

  edit(){
    this.disable = true;
    alert('edit');
  }
}
