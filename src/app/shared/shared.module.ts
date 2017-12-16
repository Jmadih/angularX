import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModule} from './mat.module';

@NgModule({
  imports: [
    CommonModule,
    MatModule
  ],
  exports: [MatModule, CommonModule],
  declarations: []
})
export class SharedModule { }
