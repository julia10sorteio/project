import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() routeLink: string;
  @Input() disabledRouteLink = false;

  constructor(
    private router: Router,
    private location: Location,
  ) { }

  ngOnInit(): void {
  }


  back() {
    if (!this.disabledRouteLink) {
      if (this.routeLink) {
        this.router.navigate([this.routeLink]);
      } else {
        this.location.back();
      }
    }
  }
}
