import { Component, OnInit } from '@angular/core';
import { ListModel } from '../../models/list.model';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})
export class AddListComponent implements OnInit {

  list: ListModel = {
    title: '', bedrooms: '', city: '', owner: '', type: '', image: '', price: ''
  };

  constructor(private user_service: UserService, private router: Router,
    public flash: FlashMessagesService) { }

  ngOnInit() {
  }

  onSubmitAddList() {
    this.user_service.createNewList(this.list);

    this.router.navigate(['/listings']);
    this.flash.show('List Added :) ', { cssClass: 'alert-success' });
  }

}
