import {
  Component,
  Inject,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'modal-alerta.component',
  templateUrl: 'modal-alerta.component.html',
  styleUrls: ['./modal-alerta.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ModalAlertaComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalAlertaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
