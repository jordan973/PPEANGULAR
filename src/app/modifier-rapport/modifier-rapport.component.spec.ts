import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierRapportComponent } from './modifier-rapport.component';

describe('ModifierRapportComponent', () => {
  let component: ModifierRapportComponent;
  let fixture: ComponentFixture<ModifierRapportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierRapportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierRapportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
