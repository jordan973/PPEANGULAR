import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonMedicamentComponent } from './mon-medicament.component';

describe('MonMedicamentComponent', () => {
  let component: MonMedicamentComponent;
  let fixture: ComponentFixture<MonMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
