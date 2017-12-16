import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { YearsOfExperienceDirective } from './years-of-experience.directive';
import {HomeResolverService} from './home-resolver.service';
import {HomeService} from './home.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, YearsOfExperienceDirective],
  exports: [HomeComponent],
  providers: [HomeResolverService, HomeService]
})
export class HomeModule { }
