import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-quantidade-lumens',
  templateUrl: './quantidade-lumens.component.html',
  styleUrls: ['./quantidade-lumens.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuantidadeLumensComponent implements OnInit, AfterViewInit {
  public model: any = {
    quantidade: 0,
  };

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.model.quantidade = localStorage.getItem('QUANTIDADE_LUMENS');
  }

  ngAfterViewInit(): void {
    this._cdr.markForCheck();
  }
}
