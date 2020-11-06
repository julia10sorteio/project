import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-informacoes-lampada',
  templateUrl: './informacoes-lampada.component.html',
  styleUrls: ['./informacoes-lampada.component.scss']
})
export class InformacoesLampadaComponent implements OnInit {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    type: new FormControl('Fluorescente', Validators.required),
    fabricante: new FormControl('', Validators.required),
    tensao: new FormControl('', Validators.required),
    potencia: new FormControl('', Validators.required),
    lumens: new FormControl('', Validators.required),
    'data-install': new FormControl('', Validators.required),
    'data-queimo': new FormControl('', Validators.required),
    tempo: new FormControl('', Validators.required),
    room: new FormControl('', Validators.required),
  });

  constructor(private db: AngularFirestore, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
  roomName = '';
  lampId = ''

  ngOnInit(): void {
    this.roomName = this.route.snapshot.paramMap.get('room');
    this.lampId = this.route.snapshot.paramMap.get('lamp');
    console.log(this.lampId)
    var uid = localStorage.getItem('uid');
    this.form.get('room').setValue(this.roomName);
    if (this.lampId) {
      this.db.collection(`Users/${uid}/lampadas_ds`).doc(this.lampId).get().subscribe(r => {
        this.form.patchValue(r.data())
      })
    }
  }
  submit() {
    var value = this.form.value;
    var uid = localStorage.getItem('uid');

    if (this.form.invalid) {
      Swal.fire('Error', 'Insira informações válidas', 'error');
      return;
    }
    if (this.lampId != null) {
      if (!this.form.dirty) {
        this.router.navigate(['/lampadas-instaladas', this.roomName]);
        return
      }
      this.db.collection(`Users/${uid}/lampadas_ds`).doc(this.lampId).set(value)
        .then(r => {
          this.router.navigate(['/lampadas-instaladas', this.roomName]);
        })
        .catch(e => {
          console.error(e)
        });
      return
    }
    this.db.collection(`Users/${uid}/lampadas_ds`).add(value)
      .then(r => {
        console.log(r.id)
        this.router.navigate(['/cadastrar-lampada/', this.roomName, r.id])
      })
      .catch(e => {
        console.error(e)
      });
  }

  delete() {
    var uid = localStorage.getItem('uid');
    this.db.collection(`Users/${uid}/lampadas_ds`).doc(this.lampId).delete().then(r => {
      this.router.navigate(['/lampadas-instaladas', this.roomName]);
    })
  }

}
