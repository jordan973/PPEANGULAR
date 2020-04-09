import { Component, OnInit, Input } from '@angular/core';
import { MedecinServices } from '../services/MedecinService';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-mon-medecin',
  templateUrl: './mon-medecin.component.html',
  styleUrls: ['./mon-medecin.component.css']
})
export class MonMedecinComponent implements OnInit {
  medecins: any[];
  view : boolean;
  medecinSubscription: Subscription;
  constructor(private medecinService: MedecinServices){}
  ngOnInit(){
    this.view = false;
    this.medecinSubscription = this.medecinService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
        console.log(this.medecins)
      }
    );
    this.medecinService.emitmedecinSubject();
  }
  showmedecin(){
    this.medecinService.getmedecinFromServer();
    this.medecinService.emitmedecinSubject();
    this.view = true;
  }
}

