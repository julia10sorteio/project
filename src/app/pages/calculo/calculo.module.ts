import { ResultadoComponent } from './resultado/resultado.component';
import { SelecionarAmbienteComponent } from './selecionar-ambiente/selecionar-ambiente.component';
import { SelecionarSubcategoriaComponent } from './selecionar-subcategoria/selecionar-subcategoria.component';
import { SelecionarTarefasComponent } from './selecionar-tarefas/selecionar-tarefas.component';
import { InformarTamanhoComponent } from './informar-tamanho/informar-tamanho.component';
import { QuantidadeLumensComponent } from './quantidade-lumens/quantidade-lumens.component';
import { TipoLampadaComponent } from './tipo-lampada/tipo-lampada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';


@NgModule({
  declarations: [
    SelecionarAmbienteComponent,
    SelecionarSubcategoriaComponent,
    SelecionarTarefasComponent,
    InformarTamanhoComponent,
    QuantidadeLumensComponent,
    TipoLampadaComponent,
    ResultadoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule
  ]
})
export class CalculoModule { }
