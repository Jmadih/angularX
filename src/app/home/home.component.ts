import { Component, OnInit } from '@angular/core';
import {Introduction, Status} from './introduction';
import {Link} from './link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private introduction: Introduction;
  private disable = false;

  constructor() {
    this.introduction = new Introduction();
  }

  ngOnInit() {
    this.introduction._firstname = 'Lucie';
    this.introduction._lastname = 'Macdonie';
    this.introduction._birthDate = '10/09/1985';
    this.introduction._email = 'lucie.macdonie@gmail.com';
    this.introduction._description = 'I am a professional tiger wrestler. I wrestled the biggest Siberian Tigers for the opening act at the Awesome and Dangerous Circus.';
    this.introduction._imageUrl = 'assets/images/me.jpg';
    this.introduction._status = Status.AVAILABLE;
    this.introduction._links = [
      new Link('', './assets/images/linkedin.png'),
      new Link('', './assets/images/github.png'),
      new Link('', './assets/images/codepen.png')];
  }

  isAvailable(status: Status): boolean {
    return status === Status.AVAILABLE;
  }

  edit() {
    this.disable = true;
    alert('edit');
  }
}
