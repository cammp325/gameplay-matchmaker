import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SettingsComponent } from './settings/settings.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ProfilePageComponent,
    HomePageComponent,
    NavBarComponent,
    SettingsComponent,
    MemberProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
