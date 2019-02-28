import {NgModule} from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import {YearsOfExperienceDirective} from './years-of-experience.directive';
import {HomeResolverService} from './home-resolver.service';
import {HomeService} from './home.service';
import {IntroFormComponent} from './form/form.component';
import {SouscriptionInitFormService} from './form/souscription.init-form.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, IntroFormComponent, YearsOfExperienceDirective],
  exports: [HomeComponent],
  providers: [HomeResolverService, HomeService, SouscriptionInitFormService, SouscriptionInitFormService],
  entryComponents: [IntroFormComponent]
})
export class HomeModule { }
