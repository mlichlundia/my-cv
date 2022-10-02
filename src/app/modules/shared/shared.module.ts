import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArrowIconComponent } from './components/arrow.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [
    ArrowIconComponent,
  ],
  imports: [
    CommonModule, MatIconModule, MatButtonModule
  ],
    exports: [
      ArrowIconComponent, MatIconModule, MatButtonModule
    ],
})
export class SharedModule { }
