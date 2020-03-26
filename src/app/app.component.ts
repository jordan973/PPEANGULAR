import { Component, OnInit } from '@angular/core';
import { Services } from './services/monService';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GSBCR-G4';
  visiteurs: any[];
  visiteurSubscription: Subscription;
  constructor(private visiteurService: Services){}
  ngOnInit(){
    this.visiteurSubscription = this.visiteurService.visiteurSubject.subscribe(
      (visiteurs: any[]) => {
        this.visiteurs = visiteurs;
      }
    );
    this.visiteurService.emitVisiteurSubject();
  }
  showVisiteur(){
    this.visiteurService.getVisiteurFromServer();
  }
}
