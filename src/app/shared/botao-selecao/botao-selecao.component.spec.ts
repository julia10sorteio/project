import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSelecaoComponent } from './botao-selecao.component';

describe('BotaoSelecaoComponent', () => {
  let component: BotaoSelecaoComponent;
  let fixture: ComponentFixture<BotaoSelecaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoSelecaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoSelecaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
