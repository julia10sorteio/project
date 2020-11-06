import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadasInstaladasComponent } from './lampadas-instaladas.component';

describe('LampadasInstaladasComponent', () => {
  let component: LampadasInstaladasComponent;
  let fixture: ComponentFixture<LampadasInstaladasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampadasInstaladasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampadasInstaladasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
