import { Routes } from '@angular/router';
import { Hero } from './components/common/hero/hero';
import { MyServices } from './components/common/my-services/my-services';
import { MyExperince } from './components/common/my-experince/my-experince';
import { MyProject } from './components/common/my-project/my-project';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Hero },
  { path: 'service', component: MyServices },
  { path: 'experience', component: MyExperince },
  { path: 'project', component: MyProject },
];
