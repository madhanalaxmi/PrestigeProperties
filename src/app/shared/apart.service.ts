import { Injectable } from '@angular/core';
import { AngularFirestore } from'@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Block } from '../model/block'; 

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }

  addBlock(block : Block){
    block.id = this.afs.createId();
    return this.afs.collection('/blocks').add(block);
  }

  getAllBlocks() {
    return this.afs.collection('/blocks').snapshotChanges();

  }

  deleteBlock(block : Block){
  return this.afs.doc('/blocks/'+block.id).delete();
  }

  updateBlock(block : Block){
    this.deleteBlock(block);
    this.addBlock(block);
  }
}

