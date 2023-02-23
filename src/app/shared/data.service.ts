import { Injectable } from '@angular/core';
import { AngularFirestore } from'@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Land } from '../model/land';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  addLand(land : Land){
    land.id = this.afs.createId();
    return this.afs.collection('/lands').add(land);
  }

  getAllLands() {
    return this.afs.collection('/lands').snapshotChanges();

  }

  deleteLand(land : Land){
  return this.afs.doc('/lands/'+land.id).delete();
  }

  updateLand(land : Land){
    this.deleteLand(land);
    this.addLand(land);
  }
}
