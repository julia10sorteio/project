import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import {
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
} from '@angular/material/dialog';
import { BotaoAvancarComponent } from './botao-avancar/botao-avancar.component';
import { BotaoSelecaoComponent } from './botao-selecao/botao-selecao.component';
import { HeaderComponent } from './header/header.component';
import { TextoSuperiorComponent } from './texto-superior/texto-superior.component';
import { ModalAlertaComponent } from './modal-alerta/modal-alerta.component';
import { ModalSenhaIncorretaComponent } from './modal-senha-incorreta/modal-senha-incorreta.component';

@NgModule({
  declarations: [
    MenuComponent,
    BotaoAvancarComponent,
    BotaoSelecaoComponent,
    HeaderComponent,
    TextoSuperiorComponent,
    ModalAlertaComponent,
    ModalSenhaIncorretaComponent,
  ],
  imports: [CommonModule, RouterModule, MatDialogModule],
  exports: [
    MenuComponent,
    BotaoAvancarComponent,
    BotaoSelecaoComponent,
    HeaderComponent,
    TextoSuperiorComponent,
    ModalAlertaComponent,
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: {
        hasBackdrop: false,
        panelClass: 'm-mat-dialog-container__wrapper',
        height: 'auto',
        width: '990px',
      },
    },
  ],
})
export class SharedModule {}
