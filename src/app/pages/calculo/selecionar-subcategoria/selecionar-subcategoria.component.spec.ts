import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarSubcategoriaComponent } from './selecionar-subcategoria.component';

describe('SelecionarSubcategoriaComponent', () => {
  let component: SelecionarSubcategoriaComponent;
  let fixture: ComponentFixture<SelecionarSubcategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelecionarSubcategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelecionarSubcategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
