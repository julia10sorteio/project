import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  provider: any;
  authError: any;
  user: any;

  form: FormGroup;

  constructor(private auth: AuthService) { }//, private fb: FormBuilder

  ngOnInit() {

    // this.initLoginForm();

    var provider = new firebase.auth.GoogleAuthProvider();
    this.provider = provider;
    firebase.auth().onAuthStateChanged(user => {
      this.user = user;
    });

    this.auth.eventAuthError$.subscribe(data => {
      this.authError = data;
    });
  }

  initLoginForm() {
    // this.form = this.fb.group({
    //   email: ['', Validators.compose([
    //     Validators.required,
    //     Validators.email,
    //     Validators.minLength(3),
    //     Validators.maxLength(320) // https://stackoverflow.com/questions/386294/what-is-the-maximum-length-of-a-valid-email-address
    //   ])
    //   ],
    //   password: ['', Validators.compose([
    //     Validators.required,
    //     Validators.minLength(3),
    //     Validators.maxLength(100)
    //   ])
    //   ]
    // });
  }

  login(frm) {

    console.log(frm);
    this.auth.login(frm.value.email, frm.value.password);
  }

  loginWithGmail() {
    firebase.auth().signInWithPopup(this.provider).then(function (result) {
      var user = result.user;
      console.log(user);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      // ...
    });
  }

  loginWithFacebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    this.provider = provider;

    firebase.auth().signInWithPopup(provider).then(function (result) {
      var user = result.user;
      console.log(user);
    }).catch(function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
  }

  logout() {
    firebase.auth().signOut().then(function () {
      console.log("sign out");

    }).catch(function (error) {

    });
  }

}

