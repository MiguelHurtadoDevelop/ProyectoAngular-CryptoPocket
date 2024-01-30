import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
  importProvidersFrom(HttpClientModule),importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"cryptopocket-e6db1","appId":"1:731996184021:web:54d66343c184b0d874315c","storageBucket":"cryptopocket-e6db1.appspot.com","apiKey":"AIzaSyDuiE3Je3hmZKaTkdQMh04CnP_GelZeSso","authDomain":"cryptopocket-e6db1.firebaseapp.com","messagingSenderId":"731996184021"}))),importProvidersFrom(provideAuth(() => getAuth())),importProvidersFrom(provideFirestore(() => getFirestore())),
  ]
};

