import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarAmbienteComponent } from './selecionar-ambiente.component';

describe('SelecionarAmbienteComponent', () => {
  let component: SelecionarAmbienteComponent;
  let fixture: ComponentFixture<SelecionarAmbienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarAmbienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarAmbienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
