import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ajouter-rapport',
  templateUrl: './ajouter-rapport.component.html',
  styleUrls: ['./ajouter-rapport.component.css']
})
export class AjouterRapportComponent  {

  ajoutForm: FormGroup;
  nomMedecin = '';
  idMedecin = '';
  medecins: any[];
  medecinSubscription: Subscription;
  formAjoutRapport = true;

  constructor(private formBuilder: FormBuilder,
              private mainService: MainService,
              private router: Router,
              private location: Location) { }

  ngOnInit(){
    this.initForm();
    this.medecinSubscription = this.mainService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    this.mainService.getmedecinFromServer(this.nomMedecin);
    this.rechercheMedecin(event);
  }

  initForm(){
    this.ajoutForm = this.formBuilder.group({
      motif: ['', Validators.required],
      bilan: ['', Validators.required],
      date: ['', Validators.required],
      idMedecin:['', Validators.required],
    });
  }

  rechercheMedecin(event){
    if(event){
      this.nomMedecin = event.target.value;
      this.mainService.getmedecinFromServer(this.nomMedecin);
      
    }
    else{
      this.mainService.getmedecinFromServer(this.nomMedecin);

    }
  }

  

  onSubmitForm(){
    const formValue = this.ajoutForm.value;
    const date = formValue.date;
    const motif = formValue.motif;
    const bilan = formValue.bilan;
    const idMedecin = formValue.idMedecin;
    

    // this.mainService.ajoutRapport(date,motif,bilan,idVisiteur,idMedecin).then(error =>{
    //   console.log('Le rapport à bien été ajouté dans la base de données');
    //   this.router.navigate(['mes-visites']);
    //})
  }

  formMedocOffert(){
  }

}
