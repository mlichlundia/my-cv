import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/services/auth/auth.guard';
import { AdminRoutingModule } from './admin-routing.module';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [LoginPageComponent, EditPageComponent],
  imports: [AdminRoutingModule, CommonModule, FormsModule, ReactiveFormsModule],
  providers: [AuthGuard],
})
export class AdminModule {}
