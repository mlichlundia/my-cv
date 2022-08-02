import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SwiperModule } from 'swiper/angular';
import { ContactsComponent } from './components/contacts/contacts.component';
import { MainInfoComponent } from './components/main-info/main-info.component';
import { OtherComponent } from './components/other/other.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { MainPageComponent } from './main-page.component';
import { MainRoutingModule } from './main-routing.module';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProjectPageComponent } from './pages/project/project-page.component';

@NgModule({
  declarations: [
    MainPageComponent,
    MainInfoComponent,
    ContactsComponent,
    SkillsComponent,
    OtherComponent,
    ProjectsComponent,
    ProjectPageComponent,
    ProfileComponent,
  ],
  imports: [MainRoutingModule, CommonModule, SwiperModule],
})
export class MainModule {}
