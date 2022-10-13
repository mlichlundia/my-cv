import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {AppRoutingModule} from './app-routing.module';
import {SharedModule} from "./modules/shared/shared.module";
import {httpInterceptorProvider} from "./modules/shared/services/interseptors/InterseptorExport";
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule, SharedModule, BrowserAnimationsModule],
  providers: [httpInterceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {
}
