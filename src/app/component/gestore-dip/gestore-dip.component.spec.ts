import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoreDipComponent } from './gestore-dip.component';

describe('GestoreDipComponent', () => {
  let component: GestoreDipComponent;
  let fixture: ComponentFixture<GestoreDipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoreDipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoreDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
