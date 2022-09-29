import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  declarations: [
    MainPageComponent,
    HomePageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
  ],
  imports: [MainRoutingModule, CommonModule, SharedModule],
})
export class MainModule {}
