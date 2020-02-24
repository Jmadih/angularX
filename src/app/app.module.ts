import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module';
import {LayoutModule} from './layout/layout.module';
import {NotFoundComponent} from './not-found/not-found.component';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app.routes';
import {ConnectedGuard} from './security/connected.guard';
import {SecurityModule} from './security/security.module';
import {SkillsModule} from './skills/skills.module';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HomeModule,
    LayoutModule,
    SharedModule,
    SecurityModule,
    SkillsModule
  ],
  providers: [ConnectedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
