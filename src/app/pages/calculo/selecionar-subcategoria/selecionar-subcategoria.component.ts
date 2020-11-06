import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-subcategoria',
  templateUrl: './selecionar-subcategoria.component.html',
  styleUrls: ['./selecionar-subcategoria.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelecionarSubcategoriaComponent implements OnInit, AfterViewInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.clearStorage();
  }

  navigateTo(_e: any, atividade: any) {
    localStorage.setItem('ATIVIDADE', atividade);
    this._router.navigate(['/tarefa']);
  }

  clearStorage() {
    localStorage.removeItem('ATIVIDADE');
    localStorage.removeItem('PRECISAO');
  }
}
