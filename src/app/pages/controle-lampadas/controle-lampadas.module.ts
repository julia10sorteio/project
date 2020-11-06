import { CadastrarLampadaComponent } from './cadastrar-lampada/cadastrar-lampada.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './../../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AmbienteComponent } from './ambiente/ambiente.component';
import { LampadasInstaladasComponent } from './lampadas-instaladas/lampadas-instaladas.component';
import { LampadasNotFoundComponent } from './lampadas-not-found/lampadas-not-found.component';
import { InformacoesLampadaComponent } from './informacoes-lampada/informacoes-lampada.component';

@NgModule({
  declarations: [
    CadastrarLampadaComponent,
    AmbienteComponent,
    LampadasInstaladasComponent,
    LampadasNotFoundComponent,
    InformacoesLampadaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ControleLampadasModule { }
