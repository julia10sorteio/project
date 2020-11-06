import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesLampadaComponent } from './informacoes-lampada.component';

describe('InformacoesLampadaComponent', () => {
  let component: InformacoesLampadaComponent;
  let fixture: ComponentFixture<InformacoesLampadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformacoesLampadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformacoesLampadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
