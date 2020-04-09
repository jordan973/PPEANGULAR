import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';


@Injectable()
export class Services{
    visiteurSubject = new Subject<any[]>();

    private visiteurs: any[];

    emitVisiteurSubject(){
        this.visiteurSubject.next(this.visiteurs.slice());
    }

    constructor(private httpClient: HttpClient){}

    getVisiteurFromServer(){
        this.httpClient.get<any[]>('https://webserv-gr4.sio-carriat.com/gsbapi/').subscribe(
            (reponse) => {
                this.visiteurs = reponse;
                this.emitVisiteurSubject();
            }
        )
    }
}
