import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformarTamanhoComponent } from './informar-tamanho.component';

describe('InformarTamanhoComponent', () => {
  let component: InformarTamanhoComponent;
  let fixture: ComponentFixture<InformarTamanhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformarTamanhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformarTamanhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
