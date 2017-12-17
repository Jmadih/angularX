import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatModule} from './mat.module';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports: [MatModule, CommonModule, HttpClientModule, ReactiveFormsModule],
  declarations: []
})
export class SharedModule { }
