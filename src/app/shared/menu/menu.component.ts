import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../pages/login/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onTapLogOut() {
    this.auth.logout().then(r => {
      this.router.navigate(['/']);
    })
  }

}
