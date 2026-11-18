import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Manohar Bethu | Software Developer' },
  {
    path: 'projects',
    loadComponent: () =>
      import('./features/projects/projects-page').then((module) => module.ProjectsPage),
    title: 'Projects | Manohar Bethu',
  },
  { path: '**', redirectTo: '' },
];
