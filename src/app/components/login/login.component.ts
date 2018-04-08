import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, NgControl } from '@angular/forms';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { UserService } from '../../services/user.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  addClActive = false;
  public user = {
    email: '', password: ''
  };

  constructor(public afAuth: AngularFireAuth, private user_services: UserService,
    public flash: FlashMessagesService, private router: Router) { }

  ngOnInit() {
  }


  onSubmitForm() {
    this.user_services.loginUseEmai_Pass(this.user.email, this.user.password).then(result => {
      this.flash.show('Welcom Back', { cssClass: 'alert-success', timeout: 5000 });
      this.router.navigate(['listings']);
      return true;
    }).catch(err => {
      this.flash.show(err.message, { cssClass: 'alert-danger', timeout: 10000 });
      this.router.navigate(['login']);
      return false;

    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  loginUsingFacebook() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
  }

}
