import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class MainService{

    medecinSubject = new Subject<any[]>();
    private medecins : any[];

    constructor(private httpClient: HttpClient){}


    emitmedecinSubject(){
        this.medecinSubject.next(this.medecins.slice());
    }
    getmedecinFromServer(nom){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/?noms='+nom).subscribe(
            (reponse) => {
                this.medecins = reponse;
                this.emitmedecinSubject();
            }
        )
    }

}
