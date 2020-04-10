import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

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


import { MainService } from './services/main.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth-guard';
import { MedicamentService } from './services/MedicamentService';


const appRoutes : Routes = [
  { path: 'accueil', canActivate: [AuthGuard],component: MonAccueilComponent },
  { path: 'auth', component: AuthentificationComponent },
  { path: 'mes-visites',canActivate: [AuthGuard], component: MonVisiteurComponent },
  { path: 'mes-visites/ajouter-rapport',component: AjouterRapportComponent },
  { path: 'mes-visites/modifier-rapport', component: ModifierRapportComponent },
  { path: 'medecin',canActivate: [AuthGuard], component: MonMedecinComponent },
  { path: 'medicament',canActivate: [AuthGuard], component: MonMedicamentComponent },

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
    ModifierRapportComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    MainService,
    AuthService,
    AuthGuard,
    MedicamentService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
