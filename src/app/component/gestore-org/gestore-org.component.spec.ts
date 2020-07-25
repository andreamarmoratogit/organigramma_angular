import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestoreOrgComponent } from './gestore-org.component';

describe('GestoreComponent', () => {
  let component: GestoreOrgComponent;
  let fixture: ComponentFixture<GestoreOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestoreOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestoreOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
