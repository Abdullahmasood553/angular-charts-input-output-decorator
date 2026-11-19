
import { Routes } from '@angular/router';
import { Account } from './account/account';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'balance',
    pathMatch: 'full'
  },
  {
    path: 'balance',
    loadComponent: () =>
      import('./charts/balance-chart/balance-chart')
        .then(m => m.BalanceChartComponent)
  },
  {
    path: 'uplot-dashboard',
    loadComponent: () =>
      import('./charts/uplot-balance-chart/uplot-balance-chart')
        .then(m => m.UplotBalanceChartComponent)
  },
   {
    path: 'account',
    component: Account
  },
  {
    path: '**',
    redirectTo: 'balance'
  }
];
