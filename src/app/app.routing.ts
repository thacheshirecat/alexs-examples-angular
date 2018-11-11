import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { AlgorithmsComponent } from './algorithms/algorithms.component';
import { GhostsComponent } from './ghosts/ghosts.component';

const appRoutes: Routes =
[
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'algorithms',
    component: AlgorithmsComponent
  },
  {
    path: 'ghosts',
    component: GhostsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
