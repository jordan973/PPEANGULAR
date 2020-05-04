import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MainService } from '../services/main.service';
import { testService } from '../services/testService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  medicaments: any[];
  nomMedoc = '';
  headElements = ['nom Commercial','Composition','effets','contre Indications'];
  
  medicamentSubscription: Subscription;
  constructor(private medicamentService: testService, private router: Router){}
  ngOnInit(){
    this.medicamentSubscription = this.medicamentService.medicamentSubject.subscribe(
      (medicaments: any[]) => {
        this.medicaments = medicaments;
      }
    );
    this.medicamentService.getmedicamentFromServer(this.nomMedoc);
    this.rechercheMedicament(event);

  }

  rechercheMedicament(event) {
    if (!event) {
      this.medicamentService.getmedicamentFromServer(this.nomMedoc);
    }

    if (event) {
      this.nomMedoc = event.target.value;
      this.medicamentService.getmedicamentFromServer(this.nomMedoc);
    }
  }

  onView(id: number)
  {
    this.router.navigate(['/medicament', 'details-medoc', id]);
  }

}
