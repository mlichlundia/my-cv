import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from "../../services/auth/auth.guard";
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from "./admin-page.component";
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AdminPageComponent,
    LoginPageComponent,
    EditPageComponent,
  ],
  imports: [AdminRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard],
})
export class AdminModule {}
