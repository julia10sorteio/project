import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ModalAlertaComponent } from '../../../shared/modal-alerta/modal-alerta.component';
import { Lampada } from '../core';

@Component({
  selector: 'app-tipo-lampada',
  templateUrl: './tipo-lampada.component.html',
  styleUrls: ['./tipo-lampada.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TipoLampadaComponent implements OnInit, AfterViewInit {
  constructor(
    private _router: Router,
    private _firestore: AngularFirestore,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.clearStorage();
  }

  procurarLampada(_e: any, tipoLampada: any) {
    const qtdLumens = localStorage.getItem('QUANTIDADE_LUMENS');
    const baselm = Math.ceil(parseFloat(qtdLumens));

    this._firestore
      .collection('lampadas_ds', (ref) =>
        ref
          .where('tipo', '==', tipoLampada)
          .where('lumen', '>=', baselm)
          .orderBy('lumen', 'asc')
          .limit(1)
      )
      .snapshotChanges()
      .pipe(
        map(
          (m) =>
            m.map((a) => {
              const data = a.payload.doc.data() as Lampada;
              data.id = a.payload.doc.id;
              return data;
            })[0]
        ),
        map((d) => {
          if (d) {
            return d;
          }
          return false;
        })
      )
      .subscribe(
        (s) => {
          if (!s) {
            let dialogRef = this._dialog.open(ModalAlertaComponent, {
              data: {
                description:
                  'Hmm... não conseguimos encotrar uma lâmpada que atenda a suas necessidades',
                title: 'Erro!!',
              },
              width: '80%',
              height: '50%',
              hasBackdrop: true,
            });
            dialogRef.afterClosed().subscribe((res) => {
              this._router.navigate(['/selecionar-ambiente']);
            });
            return;
          }
          localStorage.setItem('RESULTADO', JSON.stringify(s));
          this._router.navigate(['/resultado']);
        },
        (_e) => {
          let dialogRef = this._dialog.open(ModalAlertaComponent, {
            data: {
              description:
                'Hmm... não conseguimos encotrar uma lâmpada que atenda a suas necessidades',
              title: 'Erro!!',
            },
            height: '60%',
            width: '40%',
            hasBackdrop: true,
          });
          dialogRef.afterClosed().subscribe((res) => {
            if (!res) {
              return;
            }
            this._router.navigate(['/selecionar-ambiente']);
          });
        }
      );
  }

  clearStorage() {
    localStorage.removeItem('RESULTADO');
  }
}
