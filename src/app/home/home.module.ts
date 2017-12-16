import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { YearsOfExperienceDirective } from './years-of-experience.directive';
import {HomeResolverService} from './home-resolver.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, YearsOfExperienceDirective],
  exports: [HomeComponent],
  providers: [HomeResolverService]
})
export class HomeModule { }
