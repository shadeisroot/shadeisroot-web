import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Status } from './pages/status/status';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: 'status', component: Status },
];