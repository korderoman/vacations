import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { FIREBASE_CONFIG } from '../keys/firebase-config';
import { AngularFireModule } from '@angular/fire/compat';

const FIREBASE_MODULES = [
  AngularFireModule.initializeApp(FIREBASE_CONFIG),
  provideFirebaseApp(() => initializeApp(FIREBASE_CONFIG)),
  provideAuth(() => getAuth()),
  provideFirestore(() => getFirestore()),
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, ...FIREBASE_MODULES],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
