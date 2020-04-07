import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mon-visiteur',
  templateUrl: './mon-visiteur.component.html',
  styleUrls: ['./mon-visiteur.component.css']
})
export class MonVisiteurComponent implements OnInit {

  constructor(private route: Router,) { }

  ngOnInit(): void {
  }


}
