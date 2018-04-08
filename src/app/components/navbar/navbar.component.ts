import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private router: Router, private flash: FlashMessagesService) { }

  ngOnInit() {
  }


  logout() {
    if (confirm('Are You Sure !')) {
      this.afAuth.auth.signOut();
      this.router.navigate(['login']);
      this.flash.show('You Logged Out ', { cssClass: 'alert-info' });
    }
  }

}
