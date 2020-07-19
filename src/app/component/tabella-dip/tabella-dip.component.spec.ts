import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabellaDipComponent } from './tabella-dip.component';

describe('TabellaDipComponent', () => {
  let component: TabellaDipComponent;
  let fixture: ComponentFixture<TabellaDipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabellaDipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabellaDipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
