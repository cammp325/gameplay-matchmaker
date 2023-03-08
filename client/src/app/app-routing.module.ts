import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { MemberProfileComponent } from './member-profile/member-profile.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { SettingsComponent } from './settings/settings.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'profile', component: ProfilePageComponent },
  { path: 'profile/:id', component: MemberProfileComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: ProfilePageComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
