import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlberoComponent } from './albero.component';

describe('AlberoComponent', () => {
  let component: AlberoComponent;
  let fixture: ComponentFixture<AlberoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlberoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlberoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
