import { Component, OnInit, Input } from '@angular/core';
import { MedicamentService } from '../services/MedicamentService';

@Component({
  selector: 'app-mon-medicament',
  templateUrl: './mon-medicament.component.html',
  styleUrls: ['./mon-medicament.component.css']
})
export class MonMedicamentComponent implements OnInit {
  @Input() mNomCommercial: string;
  @Input() mFamille: string;
  @Input() mComposition: string;
  @Input() mEffets: string;
  @Input() mContreIndications: string;
  medicaments: any[];

  constructor(private medicamentService: MedicamentService){}

  ngOnInit(): void {
  }

  showMedicament(){
    this.medicamentService.getMedicamentFromServer();
  }

}
