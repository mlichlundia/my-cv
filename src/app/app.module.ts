import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { AppWrapperComponent } from '../components/app-wrapper/app-wrapper.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainInfoComponent } from '../components/main-info/main-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    AppWrapperComponent,
    HeaderComponent,
    MainInfoComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
