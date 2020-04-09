import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MedicamentService{
    medicamentSubject = new Subject<any[]>();

    medicaments: any[];

    emitMedicamentSubject(){
        this.medicamentSubject.next(this.medicaments.slice());
    }

    constructor(private httpClient: HttpClient){}

    getMedicamentFromServer(){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?nomMed').subscribe(
            (reponse) => {
                this.medicaments = reponse;
                this.emitMedicamentSubject();
            }
        )
    }
}
