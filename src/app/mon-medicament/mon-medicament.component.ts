import { Component, OnInit, Input } from '@angular/core';
import { MedicamentService } from '../services/MedicamentService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-mon-medicament',
  templateUrl: './mon-medicament.component.html',
  styleUrls: ['./mon-medicament.component.css']
})
export class MonMedicamentComponent implements OnInit {

  medicaments: any[];
  headElements = ['nom','prenom','téléphone','adresse','département'];

  medicamentSubscription: Subscription;
  constructor(private medicamentService: MedicamentService){}

  ngOnInit(){
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe(
      (medicaments: any[]) => {
        this.medicaments = medicaments;
      }
    );
    this.medicamentService.getMedicamentFromServer();

  }

}
