import { Component,OnInit } from '@angular/core';
import { Block } from '../model/block';
import { ApartService } from '../shared/apart.service';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.css']
})
export class ApartmentComponent implements OnInit {

  blocksList : Block[] =[];
  blockObj : Block = {
    id: '',
    block_name: '',
    block_price: '',
    block_location: '',
    block_details: ''
  };
  id : string = '';
  block_name : string = '';
  block_price : string = '';
  block_location : string = '';
  block_details : string ='';

  constructor(private apart : ApartService){}
  
  ngOnInit(): void {
    this.getAllBlocks();
    
  }

  getAllBlocks() {
    this.apart.getAllBlocks().subscribe(res => {
      this.blocksList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching land data');
    })
  }


  resetForm() {
    this.id = '';
    this.block_name ='';
    this.block_price='';
    this.block_location='';
    this.block_details=''; 
  }

  addBlock(){
    if(this.block_name == '' || this.block_price == '' || this.block_location == '' || this.block_details == '') {
      alert('Fill all the input fields');
      return;
    } 

    this.blockObj.id = '';
    this.blockObj.block_name = this.block_name;
    this.blockObj.block_price = this.block_price;
    this.blockObj.block_location= this.block_location;
    this.blockObj.block_details= this.block_details;
    
    this.apart.addBlock(this.blockObj);
    this.resetForm();


  }

  updateBlock(){

  }

  deleteBlock(block : Block){
    if(window.confirm('Are you sure you want to delete'+block.block_name+''+'?')){
      this.apart.deleteBlock(block);
    }

  }
  

}

