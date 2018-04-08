import { Injectable } from '@angular/core';
// import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ListModel } from '../models/list.model';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class UserService {
  listings: FirebaseListObservable<any[]>;
  constructor(private af: AngularFireDatabase, private Anugular2_auth_service: AngularFireAuth) { }


  getListings() {
    this.listings = this.af.list('/listings') as FirebaseListObservable<ListModel[]>;
    return this.listings;
  }

  createUser(email: string, pass: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.Anugular2_auth_service.auth.createUserWithEmailAndPassword(email, pass).then(userData => resolve(userData), err => reject(err));
    });
  }


  loginUseEmai_Pass(email: string, pass: string) {
    return this.Anugular2_auth_service.auth.signInWithEmailAndPassword(email, pass);
  }


}
