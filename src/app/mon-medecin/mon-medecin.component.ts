import { Component, OnInit, Input } from '@angular/core';
import { MainService } from '../services/main.service';
import { Subscription } from 'rxjs';
import { ngModuleJitUrl } from '@angular/compiler';


@Component({
  selector: 'app-mon-medecin',
  templateUrl: './mon-medecin.component.html',
  styleUrls: ['./mon-medecin.component.css']
})
export class MonMedecinComponent implements OnInit {
  medecins: any[];
  nomMedecin = '';
  headElements = ['nom','prenom','téléphone','adresse','département'];
  
  medecinSubscription: Subscription;
  constructor(private mainService: MainService){}
  ngOnInit(){
    this.medecinSubscription = this.mainService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    this.mainService.getmedecinFromServer(this.nomMedecin);
    this.rechercheMedecin(event);

  }

  rechercheMedecin(event) {
    if (!event) {
      this.mainService.getmedecinFromServer(this.nomMedecin);
    }

    if (event) {
      this.nomMedecin = event.target.value;
      this.mainService.getmedecinFromServer(this.nomMedecin);
    }
  }

}
