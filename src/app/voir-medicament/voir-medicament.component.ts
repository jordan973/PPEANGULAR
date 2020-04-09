import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-voir-medicament',
  templateUrl: './voir-medicament.component.html',
  styleUrls: ['./voir-medicament.component.css']
})
export class VoirMedicamentComponent implements OnInit {
  @Input() mNomCommercial: string;
  @Input() mFamille: string;
  @Input() mComposition: string;
  @Input() mEffets: string;
  @Input() mContreIndications: string;

  constructor() { }

  ngOnInit(): void {
  }

}
