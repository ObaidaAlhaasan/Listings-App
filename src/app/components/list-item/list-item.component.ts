import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import * as firebase from 'firebase';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  imageUrl;
  id: any;
  list: any;

  constructor(private active_route: ActivatedRoute, private user_service: UserService, private router: Router,
    private flash: FlashMessagesService) { }

  ngOnInit() {
    this.id = this.active_route.snapshot.params['id'];

    this.user_service.getList(this.id).subscribe(data => {
      this.list = data;
      const storageRef = firebase.storage().ref();
      const spaceRef = storageRef.child(data.path);
      storageRef.child(data.path).getDownloadURL().then(url => {
        this.imageUrl = url;
      }).catch(err => {
        console.log(err);
      });
    });
  }
  onDeleteList() {
    this.user_service.DeleteList(this.id);

    this.router.navigate(['/listings']);
    this.flash.show('List Deleted SuccessFully', { cssClass: 'alert-info' });
    location.reload();
  }
}
