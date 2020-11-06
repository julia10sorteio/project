import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Ambiente } from '../core';

@Component({
  selector: 'app-informar-tamanho',
  templateUrl: './informar-tamanho.component.html',
  styleUrls: ['./informar-tamanho.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformarTamanhoComponent implements OnInit, AfterViewInit {
  firstNumber: string;
  secondNumber: string;
  result: number;

  public model: any = {
    comprimento: undefined,
    largura: undefined,
  };

  constructor(private _router: Router, private _firestore: AngularFirestore) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.clearStorage();
  }

  addNumber(first: string, second: string) {
    this.result = parseFloat(first) * parseFloat(second);
    alert(this.result);
  }

  calcularLumens() {
    const params = {
      ambiente: localStorage.getItem('AMBIENTE'),
      atividade: localStorage.getItem('ATIVIDADE'),
      precisao: localStorage.getItem('PRECISAO'),
    };
    this._firestore
      .collection('ambientes_ds', (ref) =>
        ref
          .where('ambiente', '==', params.ambiente)
          .where('atividade', '==', params.atividade)
          .where('precisao', '==', params.precisao)
          .limit(1)
      )
      .snapshotChanges()
      .pipe(
        map(
          (m) =>
            m.map((a) => {
              const data = a.payload.doc.data() as Ambiente;
              data.id = a.payload.doc.id;
              return data;
            })[0]
        ),
        map((d) => {
          const metros =
            parseFloat(this.model.comprimento) * parseFloat(this.model.largura);
          return d.iluminancia * metros;
        })
      )
      .subscribe(
        (s) => {
          localStorage.setItem('QUANTIDADE_LUMENS', JSON.stringify(s));
          this._router.navigate(['/quantidade-lumens']);
        },
        (e) => {
          console.log(e);
        }
      );
  }

  clearStorage() {
    localStorage.removeItem('QUANTIDADE_LUMENS');
  }
}
