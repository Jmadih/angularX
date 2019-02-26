import { NgModule } from '@angular/core';
import {ConnectedGuard} from './connected.guard';

@NgModule({
  imports: [
  ],
  declarations: [],
  providers: [ConnectedGuard]
})
export class SecurityModule { }
