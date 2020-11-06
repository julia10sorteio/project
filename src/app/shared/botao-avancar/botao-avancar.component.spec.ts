import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoAvancarComponent } from './botao-avancar.component';

describe('BotaoAvancarComponent', () => {
  let component: BotaoAvancarComponent;
  let fixture: ComponentFixture<BotaoAvancarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotaoAvancarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotaoAvancarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
