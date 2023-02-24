import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage, provideImageKitLoader } from '@angular/common';
import { ArrowIconComponent } from './components/arrow.component';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { SidebarComponent } from "./components/sidebar-menu/sidebar/sidebar.component";
import { MenuButtonComponent } from "./components/sidebar-menu/menu-button/menu-button.component";
import { MenuComponent } from "./components/sidebar-menu/menu/menu.component";
import { ArticlesComponent } from "./components/sidebar-menu/articles/articles.component";
import { SocialLinkComponent } from "./components/sidebar-menu/social-link/social-link.component";
import { RouterModule } from "@angular/router";
import { TabsComponent } from "../admin-page/pages/edit-page/components/tabs/tabs.component";
import { IconComponent } from './components/UI/icon/icon.component';
import { NgxSkeletonLoaderModule } from "ngx-skeleton-loader";
import { MouseComponent } from './components/mouse/mouse.component';
import { BigButtonComponent } from './components/UI/big-button/big-button.component';
import { SmallButtonComponent } from './components/UI/small-button/small-button.component';
import { StickToMouseDirective } from "./directives/stickToMouse/stick-to-mouse.directive";
import { MakeMoveDirective } from './directives/makeMove/make-move.directive';
import {
  MakeMoveContainerComponent
} from './components/UI/makeMoveContainer/make-move-container/make-move-container.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import { LinkComponent } from './components/UI/link/link/link.component';
import {
  StickToMouseContainerComponent
} from './components/UI/stickToMouseContainer/stick-to-mouse-container/stick-to-mouse-container.component';

@NgModule({
  declarations: [
    ArrowIconComponent,
    SidebarComponent,
    MenuComponent,
    ArticlesComponent,
    MenuButtonComponent,
    SocialLinkComponent,
    TabsComponent,
    IconComponent,
    MouseComponent,
    BigButtonComponent,
    SmallButtonComponent,
    StickToMouseDirective,
    MakeMoveDirective,
    MakeMoveContainerComponent,
    ErrorPageComponent,
    LinkComponent,
    StickToMouseContainerComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    NgxSkeletonLoaderModule.forRoot({animation: 'pulse'}),
    NgOptimizedImage
  ],
  exports: [
    ArrowIconComponent,
    MatIconModule,
    MatButtonModule,
    SidebarComponent,
    MenuComponent,
    ArticlesComponent,
    MenuButtonComponent,
    SocialLinkComponent,
    TabsComponent,
    IconComponent,
    MouseComponent,
    BigButtonComponent,
    SmallButtonComponent,
    StickToMouseDirective,
    MakeMoveDirective,
    MakeMoveContainerComponent,
    LinkComponent,
    StickToMouseContainerComponent
  ],
  providers: [provideImageKitLoader('https://ik.imagekit.io/mlichlundia')],
})
export class SharedModule {
}
