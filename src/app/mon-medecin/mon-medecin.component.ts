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
  constructor(private medecinService: MainService){}
  ngOnInit(){
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    this.medecinService.getmedecinFromServer(this.nomMedecin);
    this.rechercheMedecin(event);

  }

  rechercheMedecin(event) {
    if (!event) {
      this.medecinService.getmedecinFromServer(this.nomMedecin);
    }

    if (event) {
      this.nomMedecin = event.target.value;
      this.medecinService.getmedecinFromServer(this.nomMedecin);
    }
  }

}
