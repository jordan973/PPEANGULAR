import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonVisiteurComponent } from './mon-visiteur.component';

describe('MonVisiteurComponent', () => {
  let component: MonVisiteurComponent;
  let fixture: ComponentFixture<MonVisiteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonVisiteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonVisiteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
