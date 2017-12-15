import {Routes} from '@angular/router';
import {NotFoundComponent} from './not-found/not-found.component';
import {HomeComponent} from './home/home.component';
import {SkillsComponent} from './skills/skills.component';

export const appRoutes: Routes = [
  {path: 'home/:id', component: HomeComponent},
  {path: 'home', redirectTo: 'home/1'},
  {path: 'skills', component: SkillsComponent},
  {path: '**', component: NotFoundComponent},
  {path: '404', component: NotFoundComponent}
];
