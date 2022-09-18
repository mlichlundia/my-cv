import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { AdminRoutingModule } from './admin-routing.module';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ContactsComponent } from './pages/edit-page/components/blocks/contacts/contacts.component';
import { SkillsComponent } from './pages/edit-page/components/blocks/skills/skills.component';
import { ProjectsComponent } from './pages/edit-page/components/blocks/projects/projects.component';
import { SectionComponent } from './pages/edit-page/components/section/section.component';
import { EducationComponent } from './pages/edit-page/components/blocks/education/education.component';
import { LanguageComponent } from './pages/edit-page/components/blocks/language/language.component';
import { MainInfoComponent } from './pages/edit-page/components/blocks/main-info/main-info.component';
import { ButtonComponent } from './pages/edit-page/components/button/button.component';
import { NamedInputComponent } from './pages/edit-page/components/named-input/named-input.component';
import { InputComponent } from './pages/edit-page/components/input/input.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    EditPageComponent,
    ContactsComponent,
    SkillsComponent,
    ProjectsComponent,
    SectionComponent,
    EducationComponent,
    LanguageComponent,
    MainInfoComponent,
    ButtonComponent,
    NamedInputComponent,
    InputComponent,
  ],
  imports: [AdminRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard],
})
export class AdminModule {}
