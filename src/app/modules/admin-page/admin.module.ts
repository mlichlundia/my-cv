import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthGuard} from "../shared/services/auth/auth.guard";
import {AdminRoutingModule} from './admin-routing.module';
import {AdminPageComponent} from "./admin-page.component";
import {EditPageComponent} from './pages/edit-page/edit-page.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {SharedModule} from '../shared/shared.module';
import { EditSkillsComponent } from './pages/edit-page/components/edit-skills/edit-skills.component';
import { EditProjectsComponent } from './pages/edit-page/components/edit-projects/edit-projects.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    LoginPageComponent,
    EditPageComponent,
    EditSkillsComponent,
    EditProjectsComponent,
  ],
  imports: [AdminRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, SharedModule, MatFormFieldModule, MatInputModule],
  providers: [AuthGuard],
})
export class AdminModule {
}
