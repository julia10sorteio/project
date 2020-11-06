import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-ambiente',
  templateUrl: './selecionar-ambiente.component.html',
  styleUrls: ['./selecionar-ambiente.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelecionarAmbienteComponent implements OnInit, AfterViewInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.clearStorage();
  }

  navigateTo(_e: any, ambiente: any) {
    localStorage.setItem('AMBIENTE', ambiente);
    this._router.navigate(['/subcategoria']);
  }

  clearStorage() {
    localStorage.removeItem('AMBIENTE');
    localStorage.removeItem('ATIVIDADE');
    localStorage.removeItem('PRECISAO');
  }
}
