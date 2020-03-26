import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirMedicamentComponent } from './voir-medicament.component';

describe('VoirMedicamentComponent', () => {
  let component: VoirMedicamentComponent;
  let fixture: ComponentFixture<VoirMedicamentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoirMedicamentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoirMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
