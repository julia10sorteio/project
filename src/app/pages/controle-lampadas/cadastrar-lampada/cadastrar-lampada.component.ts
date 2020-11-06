import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../login/auth.service';
@Component({
  selector: 'app-cadastrar-lampada',
  templateUrl: './cadastrar-lampada.component.html',
  styleUrls: ['./cadastrar-lampada.component.scss']
})
export class CadastrarLampadaComponent implements OnInit {

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

  constructor(private db: AngularFirestore, private authService: AuthService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) { }
  roomName = '';
  lampId = ''
  ngOnInit(): void {
    this.roomName = this.route.snapshot.paramMap.get('room');
    this.lampId = this.route.snapshot.paramMap.get('lamp');
    console.log(this.lampId)

    this.form.get('room').setValue(this.roomName);
    if (this.lampId) {
      var uid = localStorage.getItem('uid');
      this.db.collection(`Users/${uid}/lampadas_ds`).doc(this.lampId).get().subscribe(r => {
        this.form.patchValue(r.data())
      })
    }
  }


  submit(frm) {
    var value = frm.value;
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
    value.time = new Date().getTime();
    this.db.collection(`Users/${uid}/lampadas_ds`).doc(new Date().getTime() + '').set(value)
      .then(r => {
        // console.log(r.id)
        // this.router.navigate(['/cadastrar-lampada/', this.roomName, r.id])
        this.router.navigate(['/lampadas-instaladas', this.roomName]);
      })
      .catch(e => {
        console.error(e)
      });
  }
}
