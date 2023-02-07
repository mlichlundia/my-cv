import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProjectsPageComponent } from "./pages/projects-page/projects-page.component";
import { SkillsPageComponent } from "./pages/skills-page/skills-page.component";
import { ProjectPageComponent } from "./pages/project-page/project-page/project-page.component";
import { ErrorPageComponent } from "../shared/pages/error-page/error-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', component: HomePageComponent},
      {path: 'projects', component: ProjectsPageComponent},
      {
        path: 'project',
        children: [{
          path: ':id', component: ProjectPageComponent
        }]
      },
      {path: 'skills', component: SkillsPageComponent},
      {
        path: 'error',
        children: [{
          path: ':message',
          component: ErrorPageComponent,
        }]
      },
      {path: '*', redirectTo: 'error'}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
