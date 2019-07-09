import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import {RouterModule} from '@angular/router';
import {FooterComponent} from './footer/footer.component';
import {MenubarComponent} from './menubar/menubar.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [RouterModule, SharedModule],
  declarations: [FooterComponent, MenubarComponent],
  exports: [FooterComponent, MenubarComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class LayoutModule {

}
