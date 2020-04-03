import { Component, OnInit } from '@angular/core';
import { MedicamentService } from '../services/MedicamentService';

@Component({
  selector: 'app-mon-medicament',
  templateUrl: './mon-medicament.component.html',
  styleUrls: ['./mon-medicament.component.css']
})
export class MonMedicamentComponent implements OnInit {

  constructor(private medicamentService: MedicamentService){}

  ngOnInit(): void {
  }

  showMedicament(){
    this.medicamentService.getMedicamentFromServer();
  }

}
