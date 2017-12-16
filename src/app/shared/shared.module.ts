import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModule} from './mat.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    HttpClientModule
  ],
  exports: [MatModule, CommonModule, HttpClientModule],
  declarations: []
})
export class SharedModule { }
