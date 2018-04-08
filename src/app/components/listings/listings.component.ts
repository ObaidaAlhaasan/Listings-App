import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';



@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css']
})
export class ListingsComponent implements OnInit {

  constructor(private user_serivces: UserService) { }
  listings;
  ngOnInit() {
    this.user_serivces.getListings().subscribe(data => {
      this.listings = data;
    });
  }


}
