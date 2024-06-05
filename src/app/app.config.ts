import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideClientHydration(),
    provideFirebaseApp(() =>
      initializeApp({"projectId":"compartilhagram-com",
        "appId":"1:995313668366:web:bdd7c22f1ad366581f075f",
        "databaseURL":"https://compartilhagram-com-default-rtdb.firebaseio.com",
        "storageBucket":"compartilhagram-com.appspot.com",

        "apiKey":"AIzaSyAd2mX0UDN8pEwmJMRpL7V6OYWo_0grRgw",
        "authDomain":"compartilhagram-com.firebaseapp.com",
        "messagingSenderId":"995313668366","measurementId":"G-JDCRMJ416M"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideMessaging(() => getMessaging()), provideStorage(() => getStorage())]
};
