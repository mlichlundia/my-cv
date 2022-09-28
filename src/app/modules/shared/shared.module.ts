import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowIconComponent } from './components/arrow.component';

@NgModule({
  declarations: [
    ArrowIconComponent,
  ],
  imports: [
    CommonModule
  ],
    exports: [
      ArrowIconComponent,
    ],
})
export class SharedModule { }
