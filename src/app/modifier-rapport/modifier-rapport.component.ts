import { Component, OnInit } from '@angular/core';
import { MainService } from '../services/main.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription, empty } from 'rxjs';

@Component({
  selector: 'app-modifier-rapport',
  templateUrl: './modifier-rapport.component.html',
  styleUrls: ['./modifier-rapport.component.css']
})
export class ModifierRapportComponent implements OnInit {

  modifForm: FormGroup;
  rapport = this.mainService.modfiRapport;
  rapportSubscription: Subscription;
  rapports: any[];

  constructor(private mainService: MainService,
              private formBuilder: FormBuilder,) { }

  ngOnInit() {
    this.rapportSubscription = this.mainService.rapportSubject.subscribe(
      (rapports: any[]) => {
        this.rapports = rapports;
      }
    );
    this.mainService.getLesRapportsDate(this.rapport[0].date,this.rapport[0].idRapport);

    this.initForm();
  }

  initForm(){
    this.modifForm = this.formBuilder.group({
      motif: ['', Validators.required],
      bilan: ['', Validators.required],
    })
  }

  
  onSubmitForm(){
    const formValue = this.modifForm.value;
    const idRapport3 = this.rapports[0].id;
    const date = this.rapports[0].date;
    const idMedecin = this.rapports[0].idMedecin;
    const motif = formValue.motif;
    const bilan = formValue.bilan;
    
    this.mainService.modifierRapport(idRapport3, date, motif,bilan,idMedecin).then(error =>{
      alert('Le rapport à bien été modifié dans la base de données');
    });   
  }
}
