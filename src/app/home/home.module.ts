import { NgModule } from '@angular/core';
import {HomeComponent} from './home.component';
import {SharedModule} from '../shared/shared.module';
import { YearsOfExperienceDirective } from './years-of-experience.directive';
import {HomeResolverService} from './home-resolver.service';
import {HomeService} from './home.service';
import {IntroFormComponent} from './form/form.component';
import {SouscriptionInitFormService} from './form/introduction.init-form.service';
import {UndefinedPipe} from './undefined.pipe';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HomeComponent, IntroFormComponent, YearsOfExperienceDirective, UndefinedPipe],
  exports: [HomeComponent],
  providers: [HomeResolverService, HomeService, SouscriptionInitFormService, SouscriptionInitFormService],
  entryComponents: [IntroFormComponent]
})
export class HomeModule { }
