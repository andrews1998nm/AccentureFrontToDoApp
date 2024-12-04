import { Injectable, OnInit } from '@angular/core';
import { AngularFireRemoteConfig } from '@angular/fire/compat/remote-config';
import { BehaviorSubject } from 'rxjs';
import { getRemoteConfig } from "firebase/remote-config";
import { initializeApp } from "firebase/app";
import { getValue } from "firebase/remote-config";
import { fetchAndActivate } from "firebase/remote-config";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RemoteConfigService{
  
  private comportamientoParametro = new BehaviorSubject<boolean>(false);
  barraBusqueda$ = this.comportamientoParametro.asObservable();
  remoteConfiguration;
  //IonSearchbar:boolean;

  constructor(private remoteConfig: AngularFireRemoteConfig) {
    this.inicializar();
  }

  private inicializar(){
    const firebaseConfig = {

      apiKey: environment.firebase.apiKey,
      authDomain: environment.firebase.authDomain,
      projectId: environment.firebase.projectId,
      storageBucket: environment.firebase.storageBucket,
      messagingSenderId: environment.firebase.messagingSenderId,
      appId: environment.firebase.appId,
      measurementId: environment.firebase.measurementId
    };

    //ACTUALIZA CADA VEZ QUE HAYA UN CAMBIO
    this.remoteConfig.changes.subscribe(() => {
      this.configFirebase(firebaseConfig);
    });

    //ACTAULIZA DE MANERA INICIAL
    this.configFirebase(firebaseConfig);
  }

  private async configFirebase(apiConnection){
    const app = initializeApp(apiConnection);
    const remoteConfiguration = getRemoteConfig(app);
    remoteConfiguration.settings.minimumFetchIntervalMillis = 0;
    remoteConfiguration.settings.fetchTimeoutMillis = 60000;
    this.remoteConfiguration = remoteConfiguration;

    this.getRemote();
  }

  private async getRemote(){

    await fetchAndActivate(this.remoteConfiguration)
    .then(() => {
      const val = getValue(this.remoteConfiguration, "mostrar_search_tareas");
      this.comportamientoParametro.next(val.asBoolean());
    })
    .catch((err) => {
      console.log("error realizando fetch a firebase: " + err)
    });
  }
}
