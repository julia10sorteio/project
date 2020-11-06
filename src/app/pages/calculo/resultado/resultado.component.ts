import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultadoComponent implements OnInit, AfterViewInit {
  public model: any = {
  };

  constructor(private _cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.model = JSON.parse(localStorage.getItem('RESULTADO'));
  }

  ngAfterViewInit(): void {
    this._cdr.markForCheck();
  }
}
