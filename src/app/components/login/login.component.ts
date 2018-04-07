import { Component, OnInit } from '@angular/core';
import { Validators, NgForm, NgControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = {
    name: '', password: ''
  };

  constructor() { }

  ngOnInit() {
  }


  onSubmitForm() {

  }

}
