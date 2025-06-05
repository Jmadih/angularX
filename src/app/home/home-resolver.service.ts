import {Injectable} from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';

import {HomeService} from './home.service';
import {catchError} from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class HomeResolverService  {

  constructor(private router: Router, private homeService: HomeService) {
  }

  resolve(activatedRoute: ActivatedRouteSnapshot) {
    const id: number = activatedRoute.params['id'];
    return this.homeService.getIntroduction(id).pipe(
      catchError((err) => {
        if (err.status === 404) {
          this.router.navigate(["/404"]);
          return of(null);
        }
      })
    )
  }
}
