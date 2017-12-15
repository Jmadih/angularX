import { Component, OnInit } from '@angular/core';
import {Introduction, Status} from '../shared/models/introduction';
import {Link} from '../shared/models/link';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private introduction : Introduction;

  constructor() {
    this.introduction = new Introduction();
  }

  ngOnInit() {
    this.introduction.firstname = "Lucie";
    this.introduction.lastname = "Macdonie"
    this.introduction.birthDate = "10/09/1985";
    this.introduction.email = "lucie.macdonie@gmail.com";
    this.introduction.description = "I am a professional tiger wrestler. I wrestled the biggest Siberian Tigers for the opening act at the Awesome and Dangerous Circus.";
    this.introduction.imageUrl = "assets/images/me.jpg";
    this.introduction.status = Status.AVAILABLE;
    this.introduction.experience = 11;
    this.introduction.links = [
      new Link("", "./assets/images/linkedin.png"),
      new Link("", "./assets/images/github.png"),
      new Link("", "./assets/images/codepen.png")];
  }

  isAvailable(status: Status): boolean{
    return status === Status.AVAILABLE;
  }

  edit(){
    alert('edit');
  }
}
