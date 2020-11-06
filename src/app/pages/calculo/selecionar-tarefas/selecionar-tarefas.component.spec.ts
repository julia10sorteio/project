import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarTarefasComponent } from './selecionar-tarefas.component';

describe('SelecionarTarefasComponent', () => {
  let component: SelecionarTarefasComponent;
  let fixture: ComponentFixture<SelecionarTarefasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarTarefasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarTarefasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
