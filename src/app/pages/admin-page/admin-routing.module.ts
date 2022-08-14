import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AdminPageComponent } from './admin-page.component';
import { AuthGuard } from 'src/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: '', redirectTo: '/admin/edit', pathMatch: 'full' },
      {
        path: 'edit',
        component: EditPageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginPageComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
