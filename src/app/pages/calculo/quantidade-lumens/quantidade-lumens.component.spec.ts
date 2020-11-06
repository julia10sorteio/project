import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuantidadeLumensComponent } from './quantidade-lumens.component';

describe('QuantidadeLumensComponent', () => {
  let component: QuantidadeLumensComponent;
  let fixture: ComponentFixture<QuantidadeLumensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuantidadeLumensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuantidadeLumensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
