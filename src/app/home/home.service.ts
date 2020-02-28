import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {appConst} from '../shared/constants';
import {BASE_URL} from '../../app.config';
import {Introduction} from '../shared/models/introduction';
import {Observable} from 'rxjs/Observable';
import {MatDialog, MatDialogRef} from '@angular/material';
import {FormComponent} from './form/form.component';
import {mergeMap, filter} from 'rxjs/operators';

@Injectable()
export class HomeService {

  introFormDialogRef: MatDialogRef<FormComponent>;

  constructor(private http: HttpClient,
              private dialog: MatDialog) { }

  getIntroduction(id: number): Observable<Introduction> {
    return this.http.get<Introduction>(`${BASE_URL + '/' + appConst.urls.intros}/${id}`);
  }

  openEditPopUp(model: Introduction): Observable<Introduction> {
    this.introFormDialogRef = this.dialog.open(FormComponent);
    this.introFormDialogRef.componentInstance.model = model;
    return this.introFormDialogRef
      .afterClosed()
      .pipe(
        filter(introduction => introduction),
        mergeMap(introduction => this.editIntroduction(introduction)));
  }

  private editIntroduction(introduction: Introduction): Observable<Introduction> {
    return this.http.put<Introduction>(`${BASE_URL + '/' + appConst.urls.intros}/${introduction.id}`, introduction);
  }
}
