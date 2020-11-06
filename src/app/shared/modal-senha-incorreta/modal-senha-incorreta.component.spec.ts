import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSenhaIncorretaComponent } from './modal-senha-incorreta.component';

describe('ModalSenhaIncorretaComponent', () => {
  let component: ModalSenhaIncorretaComponent;
  let fixture: ComponentFixture<ModalSenhaIncorretaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSenhaIncorretaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSenhaIncorretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
