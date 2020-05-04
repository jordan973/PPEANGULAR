import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, empty } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class MainService{
    medecinSubject = new Subject<any[]>();
<<<<<<< HEAD
    medecins = [];
    rapportsSubject = new Subject<any[]>();
    rapports = [];

=======
    medecins : any[];
    modfiRapport = [];

    rapportSubject = new Subject<any[]>();
    nbRapportSubject = new Subject<any[]>();
>>>>>>> 081ed6ac6427cccf6ccbe950d100eec604ad86ec

    maxRapport: any;
    unRapport : any[];
    mesRapports = [];

    constructor(private httpClient: HttpClient,
                private authService: AuthService){}


    emitSubject(){
        this.medecinSubject.next(this.medecins.slice());
        this.rapportsSubject.next(this.rapports.slice());
    }

    emitRapportSubject(){
        this.rapportSubject.next(this.mesRapports.slice());
    }
    emitNbRapport(){
        this.nbRapportSubject.next(this.maxRapport.slice());
    }

    // Récupère un médecin en fonction de son nom
    getmedecinFromServer(nom){
        this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?noms='+nom).subscribe(
            (reponse) => {
<<<<<<< HEAD
                this.medecins = reponse;
                this.emitSubject();
=======
                this.medecins = (reponse);
                this.emitmedecinSubject();
            }
        )
    }
    getmedecinFromServerId(id){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id='+id).subscribe(
            (reponse) => {
                this.medecins = (reponse);
                this.emitmedecinSubject();
>>>>>>> 081ed6ac6427cccf6ccbe950d100eec604ad86ec
            }
        )
    }

    getLesRapports(){
        this.mesRapports = [];
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id3').subscribe(
            (reponse) => {
                let i = 0;
                let maxID = reponse.length -1;
                this.maxRapport = (reponse[maxID].id);
                this.emitNbRapport();
                for(i; i<reponse.length; i++){
                    this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id6='+reponse[i].id).subscribe(
                        (reponse) => {
                            let idV = this.authService.user;
                            let i = 0;
                            if(idV[0].id === reponse[0].idVisiteur){
                                this.unRapport = (reponse[i]);
                                this.mesRapports.push(this.unRapport);
                                this.emitRapportSubject();
                            }
                        }
                    ) 
                }
            }
        )
    }

    getLesRapportsDate(date, idRapport){
        let idV = this.authService.user;
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id5=&dateVisite='+date+'&id5='+idV[0].id).subscribe(
            (reponse) =>{
                this.mesRapports = [];
                for(let i = 0;i < reponse.length; i ++){
                    if(!empty(idRapport) || idRapport === reponse[i].id){
                        this.unRapport = reponse[i];
                    }
                    this.unRapport = (reponse[i]);
                    this.mesRapports.push(this.unRapport);
                }
                this.emitRapportSubject();    

            }
        )
    }

    modifierRapport(idRapport3,date,motif,bilan,idMedecin){
        return new Promise((resolve, reject) => {
            console.log(idRapport3);
            console.log(date);

            console.log(motif);
            console.log(bilan);
            console.log(idMedecin);

            this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?idRapport3=&idRapport3='+idRapport3+'&date='+date+'&motif='+motif+'&bilan='+bilan+'&idMedecin='+idMedecin).subscribe();
            resolve("Modification bien été éffectué !");
        });
    }

    // Ajoute un rapport avec les informations passés en paramètres
    ajoutRapport(date,motif,bilan,idVisiteur,idMedecin) {
        return new Promise((resolve, reject) => {
            this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?addRapport=&date='+date+'&motif='+motif+'&bilan='+bilan+'&idVisiteur='+idVisiteur+'&idMedecin='+idMedecin).subscribe();
            resolve("L'ajout du nouveau rapport à bien été éffectué !");
        });
    }
    ajoutOffrirMedoc(idRapport2,idMedicament,quantite){
        return new Promise((resolve,reject) =>{
            this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?addOffrir=&idRapport2='+idRapport2+'&idMedicament='+idMedicament+'&quantite='+quantite).subscribe();
        });
    }

    getRapportFromServer(idMedecin){
        this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?idRapport='+idMedecin).subscribe(
            (reponse) => {
                this.rapports = reponse;
                this.emitSubject();
            });
    }
}
