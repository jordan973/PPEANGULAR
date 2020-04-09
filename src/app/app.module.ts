import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterRapportComponent } from './ajouter-rapport/ajouter-rapport.component';
import { VoirMedicamentComponent } from './voir-medicament/voir-medicament.component';
import { MonVisiteurComponent } from './mon-visiteur/mon-visiteur.component';
import { MonMedicamentComponent } from './mon-medicament/mon-medicament.component';
import { MonMedecinComponent } from './mon-medecin/mon-medecin.component';
import { MonAccueilComponent } from './mon-accueil/mon-accueil.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { MajMedecinComponent } from './maj-medecin/maj-medecin.component';
import { ModifierRapportComponent } from './modifier-rapport/modifier-rapport.component';
import { Services } from './services/monService';
import { MedecinServices } from './services/MedecinService';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MedicamentService } from './services/MedicamentService';

const appRoutes : Routes = [
  { path: 'accueil', component: MonAccueilComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'mes-visites', component: MonVisiteurComponent },
  { path: 'medecin', component: MonMedecinComponent },
  { path: 'medicament', component: MonMedicamentComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AjouterRapportComponent,
    VoirMedicamentComponent,
    MonVisiteurComponent,
    MonMedicamentComponent,
    MonMedecinComponent,
    MonAccueilComponent,
    AuthentificationComponent,
    MajMedecinComponent,
    ModifierRapportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    Services,
    MedicamentService,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
