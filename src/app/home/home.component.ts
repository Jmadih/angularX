import { Component, OnInit } from '@angular/core';
import { Status} from './introduction';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

  isAvailable(status: Status): boolean {
    return status === Status.AVAILABLE;
  }

  edit() {
  }
}
