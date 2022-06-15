import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from '../components/navigation/navigation.component';
import { HeaderComponent } from '../components/header/header.component';
import { MainInfoComponent } from '../components/main-info/main-info.component';
import { LoginPageComponent } from '../pages/login-page/login-page.component';
import { httpIntrseptorProvider } from 'src/services/interseptors/InterseptorExport';
import { ContactsComponent } from '../components/contacts/contacts.component';
import { SkillsComponent } from '../components/skills/skills.component';
import { OtherComponent } from '../components/other/other.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    MainInfoComponent,
    LoginPageComponent,
    ContactsComponent,
    SkillsComponent,
    OtherComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [httpIntrseptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
