import {Component, OnInit} from '@angular/core';
import {Introduction, Status} from '../shared/models/introduction';
import {ActivatedRoute} from '@angular/router';
import {HomeService} from './home.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  private introduction: Introduction;

  constructor(private route: ActivatedRoute,
              private dialog: MatDialog,
              private homeService: HomeService) {
  }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.introduction = data.intro;
    });
  }

  isAvailable(status: Status): boolean {
    return status === Status.AVAILABLE;
  }

  edit(){
   this.homeService.openEditPopUp(this.introduction)
      .subscribe(introduction => {
        if (introduction) {
          this.introduction = introduction;
        }
      });
  }
}

