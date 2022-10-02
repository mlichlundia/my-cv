import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "../shared/services/auth/auth.guard";
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from "./admin-page.component";
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";

@NgModule({
  declarations: [
    AdminPageComponent,
    LoginPageComponent,
    EditPageComponent,
  ],
  imports: [AdminRoutingModule, CommonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule],
  providers: [AuthGuard],
})
export class AdminModule {}
