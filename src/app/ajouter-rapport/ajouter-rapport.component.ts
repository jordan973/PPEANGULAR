import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';
import { Subscription } from 'rxjs';
import { MedicamentService } from '../services/MedicamentService';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-rapport',
  templateUrl: './ajouter-rapport.component.html',
  styleUrls: ['./ajouter-rapport.component.css']
})
export class AjouterRapportComponent  {

  ajoutForm: FormGroup;
  nomMedecin = '';
  nomMedicament= '';
  idMedecin = '';

  medecins: any[];
  medicaments: any[];
  medocs = [];
  maxId: any[];
  headElements = ['ID Medicament','Quantité','Supprimer'];

  medecinSubscription: Subscription;
  medicamentSubscription: Subscription;
  maxIdSubscription: Subscription;

  formAjoutRapport = true;
  formMedoc = true;

  constructor(private formBuilder: FormBuilder,
              private mainService: MainService,
              private authService: AuthService,
              private router: Router,
              private medicamentService: MedicamentService,) { }

  ngOnInit(){
    this.initForm();
    this.medecinSubscription = this.mainService.medecinSubject.subscribe(
      (medecins: any[]) => {
        this.medecins = medecins;
      }
    );
    this.mainService.getmedecinFromServer(this.nomMedecin);
    this.rechercheMedecin(event);
    
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe(
      (medicaments: any[]) =>{
        this.medicaments = medicaments;
      }
    );
    this.maxIdSubscription = this.mainService.nbRapportSubject.subscribe(
      (maxId) =>{
        this.maxId = maxId;
      }
    );
    this.mainService.getLesRapports();
    // console.log(this.maxId);

    this.medicamentService.getMedicamentFromServer(this.nomMedicament);
    this.rechercheMedicament(event);


  }

  initForm(){
    this.ajoutForm = this.formBuilder.group({
      motif: ['', Validators.required],
      bilan: ['', Validators.required],
      date: ['', Validators.required],
      idMedecin:['', Validators.required],
      idMedicament:['',Validators.required],
      qte:['',Validators.required],
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

  rechercheMedicament(event){
    if(event){
      this.nomMedicament = event.target.value;
      this.medicamentService.getMedicamentFromServer(this.nomMedicament);
    }
    else{
      this.medicamentService.getMedicamentFromServer(this.nomMedicament);
    }
  }

  onSubmitForm(){
    const formValue = this.ajoutForm.value;
    const date = formValue.date;
    const motif = formValue.motif;
    const bilan = formValue.bilan;
    const idMedecin = formValue.idMedecin;
    const idVisiteur = this.authService.user[0].id;
    let i =0;
        
    this.mainService.ajoutRapport(date,motif,bilan,idVisiteur,idMedecin).then(error =>{
      console.log('Le rapport à bien été ajouté dans la base de données');
      this.formAjoutRapport
    });

    for(i;i<this.medocs.length;i++)
    {
      this.mainService.ajoutOffrirMedoc(this.medocs[i].idRapport2,this.medocs[i].idMedicament,this.medocs[i].qte).then(error=>{
        console.log('medicament offert ajouté');
      });
    };

    this.router.navigate(['mes-visites']);

  }

  formMedocOffert(){
    if(this.formMedoc === true){
      this.formMedoc = false;
    }
    else{
      const formValue = this.ajoutForm.value;
      const qte = formValue.qte;
      const idMedicament = formValue.idMedicament;
      let idRapport2 = Number(this.maxId) + 1;
      console.log("idRapport2 = "+idRapport2);
      this.medocs.push({idRapport2,idMedicament, qte});
    }
  }

  supprimerMedoc(idMedoc, qte){
    let idx = this.medocs.indexOf(idMedoc,qte);
    this.medocs.splice(idx);
    console.log(this.medocs);
  }

}
