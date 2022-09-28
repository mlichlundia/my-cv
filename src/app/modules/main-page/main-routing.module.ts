import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page.component';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {ProjectsPageComponent} from "./pages/projects-page/projects-page.component";
import {SkillsPageComponent} from "./pages/skills-page/skills-page.component";

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomePageComponent },
      { path: 'projects', component: ProjectsPageComponent },
      { path: 'skills', component: SkillsPageComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
