import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ProjectsPageComponent } from "./pages/projects-page/projects-page.component";
import { SkillsPageComponent } from "./pages/skills-page/skills-page.component";
import { ProjectPageComponent } from "./pages/project-page/project-page/project-page.component";
import { ROUTES } from "../shared/constants/routes";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'home', title: ROUTES.HOME, component: HomePageComponent},
      {path: 'projects', title: ROUTES.PROJECTS, component: ProjectsPageComponent},
      {
        path: 'project',
        title: ROUTES.PROJECT,
        children: [{
          path: ':id', component: ProjectPageComponent
        }]
      },
      {path: 'skills', title: ROUTES.SKILLS, component: SkillsPageComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {
}
