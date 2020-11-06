import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-senha-incorreta',
  templateUrl: './modal-senha-incorreta.component.html',
  styleUrls: ['./modal-senha-incorreta.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ModalSenhaIncorretaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalSenhaIncorretaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

}
