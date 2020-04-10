import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class MainService{
    medecinSubject = new Subject<any[]>();
    medecins : any[];

    rapportSubject = new Subject<any[]>();
    mesRapports : any[];

    // lesRapports: Array<{id: string, date: string, motif: string, bilan: string, idVisiteur: string, idMedecin: string}>;

    constructor(private httpClient: HttpClient,
                private authService: AuthService){}


    emitmedecinSubject(){
        this.medecinSubject.next(this.medecins.slice());
    }

    emitRapportSubject(){
        this.rapportSubject.next(this.mesRapports.slice());
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

    getLesRapports(){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id3').subscribe(
            (reponse) => {
                let i = 0;
                for(i; i<reponse.length; i++){
                    this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?id6='+reponse[i].id).subscribe(
                        (reponse) => {
                            let idV = this.authService.user;
    
                            if(idV[0].id === reponse[0].idVisiteur){
                                this.mesRapports = (reponse);
                                console.log('RAPPORT :'+this.mesRapports[0]);
                                this.emitRapportSubject();
                            }
                        }
                    ) 
                }
            }
        )
    }


    // getLesRapports() {
    //     return new Promise((resolve, reject) => {
    //       this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?id3=').subscribe(
    //         authData => {
    //             let i = 0;
    //             for(i; i<authData.length; i++){
    //                 this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?id6='+authData[i].id).subscribe(
    //                     otherData => {
    //                         let idV = this.authService.user;

    //                         if(idV[0].id === otherData[0].idVisiteur){
    //                             console.log(otherData[0]);

    //                             // this.lesRapports = [
    //                             //     {id: otherData[0].id, date :otherData[0].date, motif:otherData[0].motif,bilan : otherData[0].bilan, idVisiteur: otherData[0].idVisiteur, idMedecin: otherData[0].idMedecin},
    //                             // ];
    //                             // this.lesRapports = otherData[0];
    //                             this.mesRapports = otherData[0];
    //                             // console.log('MES RAPPORTS :' + this.mesRapports);
    //                             // console.log("LES RAPPORT  ="+this.lesRapports["id"]);


    //                             resolve(this.mesRapports);
    //                             this.emitRapportSubject();


    //                         }
    //                     }
    //                 )
    //             }
    //         });
    //     })
    // }








    // Ajoute un rapport avec les informations passés en paramètres
    ajoutRapport(date,motif,bilan,idVisiteur,idMedecin) {
        return new Promise((resolve, reject) => {
            this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?ajoutRapport='+date+"&"+motif+"&"+bilan+"&"+idVisiteur+"&"+idMedecin).subscribe();
            resolve("L'ajout dans la base de donnée à bien fonctionné");
        });
    }
}
