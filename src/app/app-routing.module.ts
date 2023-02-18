import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from "./modules/shared/pages/error-page/error-page.component";
import { ROUTES } from "./modules/shared/constants/routes";

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    title: ROUTES.HOME,
    loadChildren: () =>
        import('./modules/main-page/main.module').then((m) => m.MainModule),
  },
  {
    path: 'admin',
    title: ROUTES.ADMIN,
    loadChildren: () =>
        import('./modules/admin-page/admin.module').then((m) => m.AdminModule),
  },
  {path: 'error', title: ROUTES.ERROR, component: ErrorPageComponent},
  {path: '**', redirectTo: 'error'}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules}),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
