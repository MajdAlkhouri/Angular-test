import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { HotToastModule } from '@ngneat/hot-toast';
import {MatMenuModule} from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import {MatDialogModule} from '@angular/material/dialog';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ChatsComponent } from './chats/chats.component';
import { ChannelsComponent } from './channels/channels.component';
import { AngularFireModule } from '@angular/fire/compat';
import { DirektChatComponent } from './direkt-chat/direkt-chat.component';
import { ThreadsComponent } from './threads/threads.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';






@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    LandingComponent,
    SignUpComponent,
    HomeComponent,

    ChatsComponent,
    ChannelsComponent,
    DirektChatComponent,
    ThreadsComponent,
  ],
  imports: [
    AngularFireStorageModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', 
    }),
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    HotToastModule.forRoot(),
    MatMenuModule,
    MatSliderModule,
    MatSidenavModule,
    MatCardModule,
    MatDialogModule,
    MatProgressBarModule,
    MatDatepickerModule,
   
AngularFireModule.initializeApp({
  apiKey: "AIzaSyAWNJlpU1y_A7jm2aJtjmFomo6DVWotL5I",
  authDomain: "angular-sign-in-a034b.firebaseapp.com",
//databaseURL: "https://angular-sign-in-a034b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "angular-sign-in-a034b",
  storageBucket: "angular-sign-in-a034b.appspot.com",
  messagingSenderId: "566786025529",
  appId: "1:566786025529:web:046f30e4b6c018e24385e8"
}),



  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
