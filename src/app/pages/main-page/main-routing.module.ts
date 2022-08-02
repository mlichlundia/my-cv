import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectPageComponent } from './pages/project/project-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: '/profile', pathMatch: 'full' },
      { path: 'profile', component: ProfileComponent },
      { path: 'project/:id', component: ProjectPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
