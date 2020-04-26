import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class MainService{
    medecinSubject = new Subject<any[]>();
    medecins : any[];

    rapportSubject = new Subject<any[]>();
    nbRapportSubject = new Subject<any[]>();

    maxRapport: any;
    unRapport : any[];
    mesRapports = [];

    constructor(private httpClient: HttpClient,
                private authService: AuthService){}


    emitmedecinSubject(){
        this.medecinSubject.next(this.medecins.slice());
    }

    emitRapportSubject(){
        this.rapportSubject.next(this.mesRapports.slice());
    }
    emitNbRapport(){
        this.nbRapportSubject.next(this.maxRapport.slice());
    }

    // Récupère un médecin en fonction de son nom
    getmedecinFromServer(nom){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?noms='+nom).subscribe(
            (reponse) => {
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

    getLesRapportsDate(date){
        let idV = this.authService.user;
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id5=&dateVisite='+date+'&id5='+idV[0].id).subscribe(
            (reponse) =>{
                this.mesRapports = [];
                for(let i = 0;i < reponse.length; i ++){
                    this.unRapport = (reponse[i]);
                    this.mesRapports.push(this.unRapport);
                }
                // this.unRapport = (reponse);
                // this.mesRapports.push(this.unRapport);
                this.emitRapportSubject();    

            }
        )
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
}
