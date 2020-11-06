import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'smartlamp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'SmartLamp';

  constructor(private _firestore: AngularFirestore) {}

  ngOnInit(): void {
    // debugger;
    // this.cargaTabelaLampadas();
    // this.cargaTabelaAmbiente();
  }

  cargaTabelaLampadas() {
    const all = [...this.LED(), ...this.FLUORESCENTE()];
    all.forEach((item) => {
      try {
        this._firestore
          .collection('lampadas_ds')
          .doc(this._firestore.createId())
          .set(item);
      } catch (e) {
        console.log(e);
      }
    });
  }

  cargaTabelaAmbiente() {
    const all = [
      ...this.SALA_DE_ESTAR(),
      ...this.COZINHA(),
      ...this.QUARTO(),
      ...this.BANHEIRO(),
      ...this.HALL(),
      ...this.ESCADAS(),
      ...this.GARAGEM(),
      ...this.DESPENSA(),
    ];
    all.forEach((item) => {
      try {
        this._firestore
          .collection('ambientes_ds')
          .doc(this._firestore.createId())
          .set(item);
      } catch (e) {
        console.log(e);
      }
    });
  }

  SALA_DE_ESTAR() {
    return [
      {
        ambiente: 'SALA_DE_ESTAR',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 100,
      },
      {
        ambiente: 'SALA_DE_ESTAR',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 150,
      },
      {
        ambiente: 'SALA_DE_ESTAR',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 200,
      },
      {
        ambiente: 'SALA_DE_ESTAR',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 300,
      },
      {
        ambiente: 'SALA_DE_ESTAR',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 500,
      },
      {
        ambiente: 'SALA_DE_ESTAR',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 750,
      },
    ];
  }

  COZINHA() {
    return [
      {
        ambiente: 'COZINHA',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 100,
      },
      {
        ambiente: 'COZINHA',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 150,
      },
      {
        ambiente: 'COZINHA',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 200,
      },

      {
        ambiente: 'COZINHA',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'COZINHA',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'COZINHA',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  QUARTO() {
    return [
      {
        ambiente: 'QUARTO',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 100,
      },
      {
        ambiente: 'QUARTO',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 150,
      },
      {
        ambiente: 'QUARTO',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 200,
      },

      {
        ambiente: 'QUARTO',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'QUARTO',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'QUARTO',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  BANHEIRO() {
    return [
      {
        ambiente: 'BANHEIRO',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 100,
      },
      {
        ambiente: 'BANHEIRO',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 150,
      },
      {
        ambiente: 'BANHEIRO',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 200,
      },

      {
        ambiente: 'BANHEIRO',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'BANHEIRO',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'BANHEIRO',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  HALL() {
    return [
      {
        ambiente: 'HALL',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 75,
      },
      {
        ambiente: 'HALL',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 100,
      },
      {
        ambiente: 'HALL',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 150,
      },

      {
        ambiente: 'HALL',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'HALL',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'HALL',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  DESPENSA() {
    return [
      {
        ambiente: 'DESPENSA',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 75,
      },
      {
        ambiente: 'DESPENSA',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 100,
      },
      {
        ambiente: 'DESPENSA',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 150,
      },

      {
        ambiente: 'DESPENSA',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'DESPENSA',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'DESPENSA',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  ESCADAS() {
    return [
      {
        ambiente: 'ESCADAS',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 75,
      },
      {
        ambiente: 'ESCADAS',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 100,
      },
      {
        ambiente: 'ESCADAS',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 150,
      },

      {
        ambiente: 'ESCADAS',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'ESCADAS',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'ESCADAS',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  GARAGEM() {
    return [
      {
        ambiente: 'GARAGEM',
        atividade: 'GERAL',
        precisao: 'BAIXA',
        iluminancia: 75,
      },
      {
        ambiente: 'GARAGEM',
        atividade: 'GERAL',
        precisao: 'MEDIA',
        iluminancia: 100,
      },
      {
        ambiente: 'GARAGEM',
        atividade: 'GERAL',
        precisao: 'ALTA',
        iluminancia: 150,
      },

      {
        ambiente: 'GARAGEM',
        atividade: 'LOCAL',
        precisao: 'BAIXA',
        iluminancia: 200,
      },
      {
        ambiente: 'GARAGEM',
        atividade: 'LOCAL',
        precisao: 'MEDIA',
        iluminancia: 300,
      },
      {
        ambiente: 'GARAGEM',
        atividade: 'LOCAL',
        precisao: 'ALTA',
        iluminancia: 500,
      },
    ];
  }

  LED() {
    return [
      {
        tipo: 'LED',
        lumen: 80,
        watts: '2W',
        valor: 'R$ 5,50',
      },
      {
        tipo: 'LED',
        lumen: 270,
        watts: '3W',
        valor: 'R$ 6,50',
      },
      {
        tipo: 'LED',
        lumen: 450,
        watts: '4.7W',
        valor: 'R$ 6,99',
      },
      {
        tipo: 'LED',
        lumen: 400,
        watts: '5W',
        valor: 'R$ 7,80',
      },
      {
        tipo: 'LED',
        lumen: 600,
        watts: '6W',
        valor: 'R$ 7,80',
      },
      {
        tipo: 'LED',
        lumen: 700,
        watts: '7W',
        valor: 'R$ 8,20',
      },
      {
        tipo: 'LED',
        lumen: 806,
        watts: '7.5W',
        valor: 'R$ 8,61',
      },
      {
        tipo: 'LED',
        lumen: 810,
        watts: '8W',
        valor: 'R$ 7,80',
      },
      {
        tipo: 'LED',
        lumen: 900,
        watts: '9W',
        valor: 'R$ 8,20',
      },
      {
        tipo: 'LED',
        lumen: 1018,
        watts: '10W',
        valor: 'R$ 9,20',
      },
      {
        tipo: 'LED',
        lumen: 1311,
        watts: '12W',
        valor: 'R$ 9,67',
      },
      {
        tipo: 'LED',
        lumen: 1600,
        watts: '14W',
        valor: 'R$ 9,40',
      },
      {
        tipo: 'LED',
        lumen: 1507,
        watts: '15W',
        valor: 'R$ 10,20',
      },
      {
        tipo: 'LED',
        lumen: 1840,
        watts: '16W',
        valor: 'R$ 9,69',
      },
      {
        tipo: 'LED',
        lumen: 1836,
        watts: '17W',
        valor: 'R$ 15,70',
      },
      {
        tipo: 'LED',
        lumen: 2000,
        watts: '20W',
        valor: 'R$ 17,90',
      },
      {
        tipo: 'LED',
        lumen: 2250,
        watts: '24W',
        valor: 'R$ 23,46',
      },
      {
        tipo: 'LED',
        lumen: 2700,
        watts: '25W',
        valor: 'R$ 26,50',
      },
      {
        tipo: 'LED',
        lumen: 3000,
        watts: '30W',
        valor: 'R$ 32,90',
      },
      {
        tipo: 'LED',
        lumen: 3605,
        watts: '35W',
        valor: 'R$ 38,80',
      },
      {
        tipo: 'LED',
        lumen: 3700,
        watts: '37W',
        valor: 'R$ 54,90',
      },
      {
        tipo: 'LED',
        lumen: 4120,
        watts: '40W',
        valor: 'R$ 44,60',
      },
      {
        tipo: 'LED',
        lumen: 4600,
        watts: '42W',
        valor: 'R$ 55,58',
      },
      {
        tipo: 'LED',
        lumen: 5000,
        watts: '45W',
        valor: 'R$ 60,12',
      },
      {
        tipo: 'LED',
        lumen: 4500,
        watts: '50W',
        valor: 'R$ 59,76',
      },
      {
        tipo: 'LED',
        lumen: 6000,
        watts: '65W',
        valor: 'R$ 80,20',
      },
      {
        tipo: 'LED',
        lumen: 6000,
        watts: '70W',
        valor: 'R$ 75,26',
      },
    ];
  }

  FLUORESCENTE() {
    return [
      {
        tipo: 'FLUORESCENTE',
        lumen: 80,
        watts: '6W',
        valor: 'R$ 8,20',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 270,
        watts: '8W',
        valor: 'R$ 7,80',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 400,
        watts: '11W',
        valor: 'R$ 10,20',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 600,
        watts: '12W',
        valor: 'R$ 9,80',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 700,
        watts: '14W',
        valor: 'R$ 10,50',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 806,
        watts: '16W',
        valor: 'R$ 10,33',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 810,
        watts: '18W',
        valor: 'R$ 12,19',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 900,
        watts: '20W',
        valor: 'R$ 12,27',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 1018,
        watts: '26W',
        valor: 'R$ 12,80',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 1311,
        watts: '30W',
        valor: 'R$ 15,22',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 1600,
        watts: '32W',
        valor: 'R$ 15,80',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 1507,
        watts: '37W',
        valor: 'R$ 23,20',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 1840,
        watts: '40W',
        valor: 'R$ 28,98',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 1836,
        watts: '45W',
        valor: 'R$ 27,00',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 2000,
        watts: '54W',
        valor: 'R$ 42,45',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 2250,
        watts: '60W',
        valor: 'R$ 52,80',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 2700,
        watts: '72W',
        valor: 'R$ 61,12',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 3000,
        watts: '74W',
        valor: 'R$ 63,01',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 3605,
        watts: '82W',
        valor: 'R$ 81,19',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 3700,
        watts: '90W',
        valor: 'R$ 65,12',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 4120,
        watts: '92W',
        valor: 'R$ 68,19',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 4600,
        watts: '100W',
        valor: 'R$ 90,80',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 5000,
        watts: '120W',
        valor: 'R$ 97,99',
      },
      {
        tipo: 'FLUORESCENTE',
        lumen: 4600,
        watts: '140W',
        valor: 'R$ 112,00',
      },
    ];
  }
}
