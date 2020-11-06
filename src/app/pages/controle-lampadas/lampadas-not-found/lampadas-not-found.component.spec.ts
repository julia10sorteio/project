import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampadasNotFoundComponent } from './lampadas-not-found.component';

describe('LampadasNotFoundComponent', () => {
  let component: LampadasNotFoundComponent;
  let fixture: ComponentFixture<LampadasNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampadasNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampadasNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
