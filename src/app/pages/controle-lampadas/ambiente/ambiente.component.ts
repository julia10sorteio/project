import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ambiente',
  templateUrl: './ambiente.component.html',
  styleUrls: ['./ambiente.component.scss']
})
export class AmbienteComponent implements OnInit {

  constructor() { }

  roomList = ['Quarto', 'Banheiro', 'Cozinha', 'Hall', 'Despensa', 'Sala de estar', 'Escadas', 'Garagem']
  ngOnInit(): void {
  }
//lampadas-instaladas

}
