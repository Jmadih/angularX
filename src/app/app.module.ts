import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module';
import {LayoutModule} from './layout/layout.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {SharedModule} from './shared/shared.module';
import { SkillsComponent } from './skills/skills.component';
import {SecurityModule} from './security/security.module';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    SkillsComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HomeModule,
    LayoutModule,
    SharedModule,
    SecurityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
