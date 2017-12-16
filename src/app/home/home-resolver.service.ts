import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router';

import {HomeService} from './home.service';

@Injectable()
export class HomeResolverService implements Resolve<any> {

  constructor(private router: Router, private homeService: HomeService) { }

  resolve(activatedRoute: ActivatedRouteSnapshot){
    const id: number = activatedRoute.params['id'];
    const result = this.homeService.getIntroduction(id);
    if(!result) this.router.navigate(["/404"]);
    return result;
  }

}
