import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from '../services/main.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-ajouter-rapport',
  templateUrl: './ajouter-rapport.component.html',
  styleUrls: ['./ajouter-rapport.component.css']
})
export class AjouterRapportComponent implements OnInit {

  ajoutForm: FormGroup;
  nomMedecin = '';
  idMedecin = this.mainService.medecins[0].id;
  idVisiteur = this.authService.user[0].id;

  constructor(private formBuilder: FormBuilder,
              private mainService: MainService,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(){
    this.initForm();
  }

  initForm(){
    this.ajoutForm = this.formBuilder.group({
      nomMedecin: ['', Validators.required],
      motif: ['', Validators.required],
      bilan: ['', Validators.required],
      date: ['', Validators.required],
      medocOffert: [''],
    });
  }

  rechercheMedecin(event){
    if(!event){
      this.mainService.getmedecinFromServer(this.nomMedecin);
    }
    else if(event){
      this.nomMedecin = event.target.value;
      this.mainService.getmedecinFromServer(this.nomMedecin);
    }
  }

  onSubmitForm(){
    const formValue = this.ajoutForm.value;
    const date = formValue.date;
    const motif = formValue.motif;
    const bilan = formValue.bilan;

    this.mainService.ajoutRapport(date,motif,bilan,this.idVisiteur,this.idMedecin).then(error =>{
      console.log('Le rapport à bien été ajouté dans la base de données');
      this.router.navigate(['mes-visites']);
    })
  }

}
