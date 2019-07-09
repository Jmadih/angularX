import { Component, OnInit } from '@angular/core';
import {Introduction, Status} from '../shared/models/introduction';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  private disable = false;

  introduction: Introduction;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const introKey = 'intro';
      this.introduction = data[introKey];
    });
  }

  isAvailable(status: Status): boolean{
    return status === Status.AVAILABLE;
  }

  edit() {
    this.disable = true;
    alert('edit');
  }

  save(model) {
    console.log(model);
  }

  cancel() {
    console.log('cancel');
  }
}
