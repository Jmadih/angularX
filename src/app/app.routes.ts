import {Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';
import {HomeResolverService} from './home/home-resolver.service';
import {ConnectedGuard} from './security/connected.guard';

export const appRoutes: Routes = [
  {path: 'home/:id', component: HomeComponent, resolve: { intro: HomeResolverService}},
  {path: 'home', redirectTo: 'home/1'},
  {path: 'skills', component: SkillsComponent, canActivate: [ConnectedGuard]},
  {path: '**', component: NotFoundComponent},
  {path: '404', component: NotFoundComponent}
];
