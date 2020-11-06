import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-tarefas',
  templateUrl: './selecionar-tarefas.component.html',
  styleUrls: ['./selecionar-tarefas.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelecionarTarefasComponent implements OnInit, AfterViewInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.clearStorage();
  }

  navigateTo(_e: any, precisao: any) {
    localStorage.setItem('PRECISAO', precisao);
    this._router.navigate(['/informar-tamanho']);
  }

  clearStorage() {
    localStorage.removeItem('PRECISAO');
  }
}
