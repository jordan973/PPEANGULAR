import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class testService{
    medicamentSubject = new Subject<any[]>();
     medicaments : any[];

    constructor(private httpClient: HttpClient){}


    emitmedicamentSubject(){
        this.medicamentSubject.next(this.medicaments.slice());
    }

    // Récupère un médecin en fonction de son nom
    getmedicamentFromServer(nom){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?nomMed='+nom).subscribe(
            (reponse) => {
                this.medicaments = (reponse);
                this.emitmedicamentSubject();
            }
        )
    }

    // // Ajoute un rapport avec les informations passés en paramètres
    // ajoutRapport(date,motif,bilan,idVisiteur,idMedecin) {
    //     return new Promise((resolve, reject) => {
    //         this.httpClient.get<any>('https://webserv-gr4.sio-carriat.com/gsbapi/?ajoutRapport='+date+"&"+motif+"&"+bilan+"&"+idVisiteur+"&"+idMedecin).subscribe();
    //         resolve("L'ajout dans la base de donnée à bien fonctionné");
    //     });
    // }
}
