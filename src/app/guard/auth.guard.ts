// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AngularFireAuth } from "@angular/fire/auth";
import { first } from 'rxjs/operators';
@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router, public afAuth: AngularFireAuth) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return new Observable(o => {
            this.afAuth.authState.subscribe(user => {
                if (user) {
                    // do something
                    // localStorage.setItem('user', JSON.stringify(user))
                    localStorage.setItem('uid', user.uid);

                    o.next(true);
                } else {
                    this.router.navigate(['/auth']);
                    // do something else
                    o.next(false);
                }
            })
        })

    }
}
