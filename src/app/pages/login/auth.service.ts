import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';
import { BehaviorSubject } from 'rxjs';
import { auth } from 'firebase/app';
import { from } from 'rxjs';
import { switchMap, first, mapTo, take } from 'rxjs/operators';
import * as firebase from 'firebase';
import { MatDialog } from '@angular/material/dialog';
import { ModalSenhaIncorretaComponent } from 'src/app/shared/modal-senha-incorreta/modal-senha-incorreta.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();

  newUser: any;

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFirestore,
    private router: Router,
    public _dialog: MatDialog) { }

  getUserState() {
    return this.afAuth.authState;
  }

  login( email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        let dialogRef = this._dialog.open(ModalSenhaIncorretaComponent, {
          data: {
            description:
              'Dados incorretos! Informe seu email e senha novamente!',
            title: 'Erro!!',
          },
          width: '70%',
          height: '60%',
          hasBackdrop: true,
        });
        dialogRef.afterClosed().subscribe((res) => {
          this.router.navigate(['/auth/login']);
        });
        return;
      })
      .then(userCredential => {
        if(userCredential) {
          this.router.navigate(['/home']);
        }
      });
  }

  createUser(user) {
    console.log(user);
    this.afAuth.createUserWithEmailAndPassword( user.email, user.password)
      .then( userCredential => {
        this.newUser = user;
        console.log(userCredential);
        userCredential.user.updateProfile( {
          displayName: user.firstName + ' ' + user.lastName
        });

        this.insertUserData(userCredential)
          .then(() => {
            this.router.navigate(['/auth/login']);
          });
      })
      .catch( error => {
        let dialogRef = this._dialog.open(ModalSenhaIncorretaComponent, {
          data: {
            description:
              'Dados incorretos! Tente novamente!',
            title: 'Erro!!',
          },
          width: '70%',
          height: '42%',
          hasBackdrop: true,
        });
        dialogRef.afterClosed().subscribe((res) => {
          this.router.navigate(['/auth/login']);
        });
        return;
      });
  }

  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      firstname: this.newUser.firstName,
      lastname: this.newUser.lastName,
      role: 'network user'
    });
  }

  logout() {
    return this.afAuth.signOut();
  }
}
