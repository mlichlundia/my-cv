import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MainRoutingModule } from './main-routing.module';
import { MainPageComponent } from './main-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { SharedModule } from "../shared/shared.module";
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { ProjectPreviewComponent } from './components/project-preview/project-preview.component';
import { TagComponent } from './components/tag/tag.component';
import { ReactiveFormsModule } from "@angular/forms";
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { ProjectPageComponent } from './pages/project-page/project-page/project-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    HomePageComponent,
    ProjectsPageComponent,
    SkillsPageComponent,
    SkillsComponent,
    EducationComponent,
    LanguagesComponent,
    ProjectPreviewComponent,
    TagComponent,
    ProjectPageComponent,
  ],
  imports: [MainRoutingModule, CommonModule, SharedModule, ReactiveFormsModule, NgxSkeletonLoaderModule],
})
export class MainModule {
}
