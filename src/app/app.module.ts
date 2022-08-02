import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { MainInfoComponent } from './pages/main-page/components/main-info/main-info.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { httpIntrseptorProvider } from 'src/services/interseptors/InterseptorExport';
import { ContactsComponent } from './pages/main-page/components/contacts/contacts.component';
import { SkillsComponent } from './pages/main-page/components/skills/skills.component';
import { OtherComponent } from './pages/main-page/components/other/other.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { SwiperModule } from 'swiper/angular';
import { ProjectsComponent } from './pages/main-page/components/projects/projects.component';

const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginPageComponent },
];

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
    MainPageComponent,
    ProjectsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
    }),
  ],
  providers: [httpIntrseptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
