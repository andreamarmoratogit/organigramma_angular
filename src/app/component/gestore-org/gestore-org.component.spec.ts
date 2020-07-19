import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoreComponent } from './gestore-org.component';

describe('GestoreComponent', () => {
  let component: GestoreComponent;
  let fixture: ComponentFixture<GestoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
