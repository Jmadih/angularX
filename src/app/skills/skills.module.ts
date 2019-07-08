import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {SkillsComponent} from './skills.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [SkillsComponent],
  exports: [SkillsComponent]
})
export class SkillsModule { }
