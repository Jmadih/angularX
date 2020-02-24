import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { YearsOfExperienceDirective } from './years-of-experience.directive';
import {HomeResolverService} from './home-resolver.service';
import {HomeService} from './home.service';
import {FormComponent} from './form/form.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, FormComponent, YearsOfExperienceDirective],
  exports: [HomeComponent, FormComponent],
  providers: [HomeResolverService, HomeService]
})
export class HomeModule { }
