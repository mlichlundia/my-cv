import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./modules/shared/shared.module";
import { httpIntrseptorProvider } from "./modules/shared/services/interseptors/InterseptorExport";
import { AppComponent } from './app.component';
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ArticlesComponent} from "./components/articles/articles.component";
import {SocialLinkComponent} from "./components/social-link/social-link.component";
import { MenuButtonComponent } from './components/menu-button/menu-button.component';

@NgModule({
  declarations: [
    AppComponent, SidebarComponent, MenuComponent, ArticlesComponent, SocialLinkComponent, MenuButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, SharedModule, BrowserAnimationsModule],
  providers: [httpIntrseptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
