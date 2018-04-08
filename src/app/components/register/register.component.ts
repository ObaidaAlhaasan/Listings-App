import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user = {
    email: '', password: ''
  };
  constructor(private user_service: UserService, private route: Router, public flash: FlashMessagesService) { }

  ngOnInit() {
  }

  createNewUser() {
    const email = this.user.email;
    const password = this.user.password;
    this.user_service.createUser(email, password).then(result => {
      this.flash.show('User Registered Successfully Please Login', { cssClass: 'alert-success', timeout: 5000 });
      this.route.navigate(['login']);
      return true;
    }).catch(err => {
      this.flash.show(err.message, { cssClass: 'alert-danger', timeout: 10000 });
      this.route.navigate(['/register']);
      return false;
    });

  }

}
