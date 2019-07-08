import {Introduction, Status} from '../shared/models/introduction';
import {HomeService} from './home.service';
import {MatDialog} from '@angular/material';
import {ActivatedRoute} from '@angular/router';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  introduction: Introduction;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private homeService: HomeService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      const key = 'intro';
      this.introduction = data[key];
    });
  }

  isAvailable(status: string): boolean{
    return Status[status] === Status.AVAILABLE;
  }

  edit() {
    this.homeService.openEditPopUp(this.introduction)
      .subscribe(introduction => {
        if (introduction) {
          this.introduction = introduction;
        }
      });
  }
}
