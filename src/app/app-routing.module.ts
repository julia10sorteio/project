import { InformacoesLampadaComponent } from './pages/controle-lampadas/informacoes-lampada/informacoes-lampada.component';
import { AmbienteComponent } from './pages/controle-lampadas/ambiente/ambiente.component';
import { LampadasNotFoundComponent } from './pages/controle-lampadas/lampadas-not-found/lampadas-not-found.component';
import { ResultadoComponent } from './pages/calculo/resultado/resultado.component';
import { RegistrationComponent } from './pages/login/registration/registration.component';
import { LoginComponent } from './pages/login/login/login.component';
import { QuantidadeLumensComponent } from './pages/calculo/quantidade-lumens/quantidade-lumens.component';
import { TipoLampadaComponent } from './pages/calculo/tipo-lampada/tipo-lampada.component';
import { InformarTamanhoComponent } from './pages/calculo/informar-tamanho/informar-tamanho.component';
import { SelecionarTarefasComponent } from './pages/calculo/selecionar-tarefas/selecionar-tarefas.component';
import { SelecionarSubcategoriaComponent } from './pages/calculo/selecionar-subcategoria/selecionar-subcategoria.component';
import { HeaderComponent } from './shared/header/header.component';
import { BotaoSelecaoComponent } from './shared/botao-selecao/botao-selecao.component';
import { BotaoAvancarComponent } from './shared/botao-avancar/botao-avancar.component';
import { SelecionarAmbienteComponent } from './pages/calculo/selecionar-ambiente/selecionar-ambiente.component';
import { CadastrarLampadaComponent } from './pages/controle-lampadas/cadastrar-lampada/cadastrar-lampada.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LampadasInstaladasComponent } from './pages/controle-lampadas/lampadas-instaladas/lampadas-instaladas.component';

import { AuthGuard } from './guard/auth.guard';
const routes: Routes = [
  // {
  // path: 'smart-lamp',
  // component: GerenciarotasComponent,
  // data: { depth: 1},
  // children: [
  { path: 'auth', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent, },
      { path: 'selecionar-ambiente', component: SelecionarAmbienteComponent, },
      { path: 'botao-avancar', component: BotaoAvancarComponent, },
      { path: 'botao-selecao', component: BotaoSelecaoComponent, },
      { path: 'header', component: HeaderComponent, },
      { path: 'subcategoria', component: SelecionarSubcategoriaComponent, },
      { path: 'tarefa', component: SelecionarTarefasComponent, },
      { path: 'informar-tamanho', component: InformarTamanhoComponent, },
      { path: 'tipo-lampada', component: TipoLampadaComponent, },
      { path: 'quantidade-lumens', component: QuantidadeLumensComponent, },//quantity-lumens
      { path: 'resultado', component: ResultadoComponent, },//Outcome

      { path: 'lampadas-instaladas/:room', component: LampadasInstaladasComponent, },

      { path: 'cadastrar-lampada/:room', component: CadastrarLampadaComponent, },//register-lamp
      { path: 'cadastrar-lampada/:room/:lamp', component: CadastrarLampadaComponent, },//register-lamp

      { path: 'informacoes-lampadas/:room/:lamp', component: InformacoesLampadaComponent, },
      { path: 'informacoes-lampadas/:room/:lamp', component: CadastrarLampadaComponent, },


      { path: 'not-found', component: LampadasNotFoundComponent, },
      { path: 'not-found/:room', component: LampadasNotFoundComponent, },
      { path: 'ambiente', component: AmbienteComponent, },
      


      { path: '**', redirectTo: 'home', pathMatch: 'full' },
    ]
  },



  // { path: '**', redirectTo: 'home' },
  // ],
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
