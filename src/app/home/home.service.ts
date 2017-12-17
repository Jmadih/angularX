import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {appConst} from '../shared/constants';
import {BASE_URL} from '../../app.config';
import {Introduction} from '../shared/models/introduction';
import {Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogRef} from '@angular/material';
import {IntroFormComponent} from './form/form.component';
import {filter, mergeMap} from 'rxjs/operators';

@Injectable()
export class HomeService {

  introFormDialogRef: MatDialogRef<IntroFormComponent>;

  constructor(private http: HttpClient,
              private dialog: MatDialog) { }

  getIntroduction(id: number): Observable<Introduction> {
    return this.http.get<Introduction>(`${BASE_URL + "/" + appConst.urls.intros}/${id}`);
  }

  openEditPopUp(model: Introduction): Observable<Introduction> {
    this.introFormDialogRef = this.dialog.open(IntroFormComponent);
    this.introFormDialogRef.componentInstance.model = model;
    return this.introFormDialogRef
      .afterClosed();
    // edit the introduction with the endpoint
  }

  private editIntroduction(introduction: Introduction): Observable<Introduction> {
    // call the put endpoint
    return Observable.of(null);
  }
}
