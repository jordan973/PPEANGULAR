import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import { VoirMedicamentComponent } from './voir-medicament/voir-medicament.component';
import { MonVisiteurComponent } from './mon-visiteur/mon-visiteur.component';
import { MonServiceComponent } from './mon-service/mon-service.component';
import { MonMedicamentComponent } from './mon-medicament/mon-medicament.component';
import { MonMedecinComponent } from './mon-medecin/mon-medecin.component';
import { MonAccueilComponent } from './mon-accueil/mon-accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MajMedecinComponent } from './maj-medecin/maj-medecin.component';
import { ModifierRapportComponent } from './modifier-rapport/modifier-rapport.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterRapportComponent,
    VoirMedicamentComponent,
    MonVisiteurComponent,
    MonServiceComponent,
    MonMedicamentComponent,
    MonMedecinComponent,
    MonAccueilComponent,
    AuthentificationComponent,
    MajMedecinComponent,
    ModifierRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
