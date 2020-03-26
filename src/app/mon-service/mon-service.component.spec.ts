import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonServiceComponent } from './mon-service.component';

describe('MonServiceComponent', () => {
  let component: MonServiceComponent;
  let fixture: ComponentFixture<MonServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
