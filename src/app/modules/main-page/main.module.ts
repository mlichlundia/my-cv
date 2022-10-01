import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import {SharedModule} from "../shared/shared.module";
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ProjectComponent } from './components/project/project.component';
import { TagComponent } from './components/tag/tag.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HomePageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    ProjectComponent,
    TagComponent,
  ],
  imports: [MainRoutingModule, CommonModule, SharedModule],
})
export class MainModule {}
