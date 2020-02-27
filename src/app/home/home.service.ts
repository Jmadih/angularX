import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {appConst} from '../shared/constants';
import {BASE_URL} from '../../app.config';
import {Introduction} from '../shared/models/introduction';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HomeService {

  constructor(private http: HttpClient) { }

  getIntroduction(id: number): Observable<Introduction> {
    return this.http.get<Introduction>(`${BASE_URL + '/' + appConst.urls.intros}/${id}`);
  }

}
