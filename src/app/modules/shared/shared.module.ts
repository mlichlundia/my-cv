import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArrowIconComponent} from './components/arrow.component';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {SidebarComponent} from "./components/sidebar-menu/sidebar/sidebar.component";
import {MenuButtonComponent} from "./components/sidebar-menu/menu-button/menu-button.component";
import {MenuComponent} from "./components/sidebar-menu/menu/menu.component";
import {ArticlesComponent} from "./components/sidebar-menu/articles/articles.component";
import {SocialLinkComponent} from "./components/sidebar-menu/social-link/social-link.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    ArrowIconComponent,
    SidebarComponent,
    MenuComponent,
    ArticlesComponent,
    MenuButtonComponent,
    SocialLinkComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ],
  exports: [
    ArrowIconComponent,
    MatIconModule,
    MatButtonModule,
    SidebarComponent,
    MenuComponent,
    ArticlesComponent,
    MenuButtonComponent,
    SocialLinkComponent
  ],
})
export class SharedModule {
}
