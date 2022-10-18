import { Routes } from '@angular/router';

export const routes: Routes = [
    {
      path: 'login',
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
        },
      ]
    },
    {
      path: 'dashboard',
      children: [
        {
          path: '',
          loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
        },
      ]
    }, 
    {
      path: '**',
      redirectTo: 'login'
    },
]