import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarLampadaComponent } from './cadastrar-lampada.component';

describe('CadastrarLampadaComponent', () => {
  let component: CadastrarLampadaComponent;
  let fixture: ComponentFixture<CadastrarLampadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastrarLampadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastrarLampadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
