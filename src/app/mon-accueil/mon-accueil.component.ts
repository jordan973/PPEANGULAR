import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-accueil',
  templateUrl: './mon-accueil.component.html',
  styleUrls: ['./mon-accueil.component.css']
})
export class MonAccueilComponent implements OnInit {
  @Input() vNom: string;
  @Input() vPrenom: string;
  @Input() vAdresse: string;
  @Input() vLogin: string;

  constructor() { }

  ngOnInit() {
  }

}
