import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ShareLand } from './shareland.model';

@Injectable({
  providedIn: 'root'
})
export class SharelandService {

  
  constructor(private angularFirestore : AngularFirestore ) { }
  

  getSharedlandDoc(id: any){
    return this.angularFirestore
    .collection('shareland-collection')
    .doc(id)
    .valueChanges()
  }

  getSharedlandList() {
    return this.angularFirestore
    .collection("shareland-collection")
    .snapshotChanges
  }

  createShareland(shareland: ShareLand){
    return new Promise<any>((resolve, reject) =>{
      this.angularFirestore
      .collection("shareland-collection")
      .add(shareland)
      .then(response => {console.log(response)}, error => reject(error));
    });
  }

  deleteShareland(shareland: ShareLand) {
    return this.angularFirestore
    .collection("shareland-collection")
    .doc(shareland.id)
    .delete();

  }

  updateShareland(shareland: ShareLand, id: string | undefined) {
    return this.angularFirestore
    .collection("shareland-collection")
    .doc(id)
    .update({
      ltitle: shareland.ltitle,
      lprice: shareland.lprice,
      llocation: shareland.llocation,
      ldetails: shareland.ldetails,

      
  });

  }
}
