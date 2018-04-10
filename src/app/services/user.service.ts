import { Injectable } from '@angular/core';
// import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ListModel } from '../models/list.model';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
@Injectable()
export class UserService {

  listings: FirebaseListObservable<any[]>;
  folder: any;


  constructor(private af: AngularFireDatabase, private Anugular2_auth_service: AngularFireAuth) {
    this.folder = 'listingimages';
    this.listings = this.af.list('/listings') as FirebaseListObservable<ListModel[]>;

  }


  getListings() {
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


  getList(id) {
    return this.af.object('listings/' + id);
  }


  createNewList(list) {
    const storageRef = firebase.storage().ref();
    for (const selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]) {
      const path = `/${this.folder}/${selectedFile.name}`;
      const iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        list.image = selectedFile.name;
        list.path = path;

        return this.listings.push(list);
      });
    }
  }


  updateList(id, list) {
    return this.listings.update(id, list);
  }


  DeleteList(id: string) {
    return this.listings.remove(id);
  }


  // End
}
