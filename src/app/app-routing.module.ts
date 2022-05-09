import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo  } from '@angular/fire/auth-guard';
import { OverlayComponentComponent } from './overlay-component/overlay-component.component';
import { ChatsComponent } from './chats/chats.component';
import { ChannelsComponent } from './channels/channels.component';

const redirectToLogin = ()  => redirectUnauthorizedTo(['login']);
const redirectToHome = ()  =>  redirectLoggedInTo(['home']);

const routes: Routes = [
  {path:'', 
  pathMatch: 'full',
  component:LandingComponent},
  {
    path: 'login',
    component:LogInComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'Signup',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  },
  {
    path: 'home',
    component:HomeComponent,
    ...canActivate(redirectToLogin)
  },

  { path: 'overlay', component: OverlayComponentComponent },

 { path: 'chats', component: ChatsComponent },

 { path: 'user', component: ChannelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
