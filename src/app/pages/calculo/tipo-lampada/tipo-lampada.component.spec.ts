import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLampadaComponent } from './tipo-lampada.component';

describe('TipoLampadaComponent', () => {
  let component: TipoLampadaComponent;
  let fixture: ComponentFixture<TipoLampadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TipoLampadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLampadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
