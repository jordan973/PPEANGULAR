import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';


@Injectable()
export class MainService{
    medecinSubject = new Subject<any[]>();
    medecins : any[];

    rapportSubject = new Subject<any[]>();
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
                                this.unRapport = (reponse);
                                this.mesRapports.push(this.unRapport);
                                this.emitRapportSubject();
                            }
                        }
                    ) 
                }
            }
        )
    }

    // Ajoute un rapport avec les informations passés en paramètres
    ajoutRapport(date,motif,bilan,idVisiteur,idMedecin) {
        return new Promise((resolve, reject) => {
            this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?ajoutRapport='+date+"&"+motif+"&"+bilan+"&"+idVisiteur+"&"+idMedecin).subscribe();
            resolve("L'ajout dans la base de donnée à bien fonctionné");
        });
    }
}
