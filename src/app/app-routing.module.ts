import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './pages/dash-board/dash-board.component';

const routes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./pages/main-page/main.module').then((m) => m.MainModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin-page/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
