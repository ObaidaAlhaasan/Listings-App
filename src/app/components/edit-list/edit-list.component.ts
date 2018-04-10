import { Component, OnInit } from '@angular/core';
import { ListModel } from '../../models/list.model';
import { FirebaseService } from '@firebase/app-types/private';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-list',
  templateUrl: './edit-list.component.html',
  styleUrls: ['./edit-list.component.css']
})
export class EditListComponent implements OnInit {
  id;
  list: ListModel;


  constructor(private user_service: UserService, private router: Router, private activat_route: ActivatedRoute,
    private flash: FlashMessagesService) { }

  ngOnInit() {
    this.id = this.activat_route.snapshot.params['id'];
    this.user_service.getList(this.id).subscribe(data => {
      this.list = data;
    });
  }

  onSubmitEditList() {
    this.user_service.updateList(this.id, this.list);
    this.router.navigate(['/listings']);

    this.flash.show('List Edited SuccessFully', { cssClass: 'alert-success' });
  }

}
