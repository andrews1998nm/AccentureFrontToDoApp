import { Injectable, OnInit } from '@angular/core';
//import { FirebaseApp } from '@angular/fire/app';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { BehaviorSubject } from 'rxjs';
import { getRemoteConfig } from "firebase/remote-config";
import { initializeApp } from "firebase/app";

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService implements OnInit {
  

  private searchBarEnabledSource = new BehaviorSubject<boolean>(false);
  searchBarEnabled$ = this.searchBarEnabledSource.asObservable();

  IonSearchbar:boolean;

  constructor(private remoteConfig: AngularFireRemoteConfig) {}

   async ngOnInit() {
    const firebaseConfig = {

      apiKey: "AIzaSyBjmTmUdrYYp7qBnbijrEjhjMKtaLnEsSE",
      authDomain: "accentureremoteconfig.firebaseapp.com",
      projectId: "accentureremoteconfig",
      storageBucket: "accentureremoteconfig.firebasestorage.app",
      messagingSenderId: "588624389820",
      appId: "1:588624389820:web:a592498e7ee93b97e7d2b9",
      measurementId: "G-ED48SETWL6"
    };
    
    const app = initializeApp(firebaseConfig);
    const remoteConfiguration = getRemoteConfig(app);
    remoteConfiguration.settings.minimumFetchIntervalMillis = 0;
    
    this.remoteConfig.fetchAndActivate()
    .then(() => {
      const valorVariable = this.remoteConfig.getValue('mostrar_search_tareas');
      console.log("HOLA:" + valorVariable);
      this.habilitarBarraBusqueda();
    })
    .catch((err) => {
      // ...
    });
   }

  private async habilitarBarraBusqueda() {
    const valorVariable = await this.remoteConfig.getValue('mostrar_search_tareas');
    this.searchBarEnabledSource.next(valorVariable.asBoolean());
  }

  private async habilitarBarraBusqueda2() {
    const valorVariable = await this.remoteConfig.getValue('mostrar_search_tareas');
    console.log(valorVariable);
    this.searchBarEnabledSource.next(valorVariable.asBoolean());
  }
}
