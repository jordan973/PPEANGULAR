import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MedicamentService{
    medicamentSubject = new Subject<any[]>();
    medicaments: any[];

    constructor(private httpClient: HttpClient){}


    emitMedicamentSubject(){
        this.medicamentSubject.next(this.medicaments.slice());
    }


    getMedicamentFromServer(nomMedicament){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?nomMed'+nomMedicament).subscribe(
            (reponse) => {
                this.medicaments = reponse;
                this.emitMedicamentSubject();
            }
        )
    }
}
