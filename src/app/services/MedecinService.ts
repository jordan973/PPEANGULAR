import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MedecinServices{
    medecinSubject = new Subject<any[]>();

    private medecins : any[];


    emitmedecinSubject(){
        this.medecinSubject.next(this.medecins.slice());
    }

    constructor(private httpClient: HttpClient){}

    getmedecinFromServer(){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/').subscribe(
            (reponse) => {
                this.medecins = reponse;
                this.emitmedecinSubject();
            }
        )
    }
}
