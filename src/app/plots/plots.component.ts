import { Component,OnInit } from '@angular/core';
import { Land } from '../model/land';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-plots',
  templateUrl: './plots.component.html',
  styleUrls: ['./plots.component.css']
})
export class PlotsComponent implements OnInit {

  landsList : Land[] =[];
  landObj : Land = {
    id: '',
    land_name: '',
    land_price: '',
    land_location: '',
    land_details: ''
  };
  id : string = '';
  land_name : string = '';
  land_price : string = '';
  land_location : string = '';
  land_details : string ='';

  constructor(private data : DataService){}
  
  ngOnInit(): void {
    this.getAllLands();
    
  }

  getAllLands() {
    this.data.getAllLands().subscribe(res => {
      this.landsList = res.map((e: any) => {
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
    this.land_name ='';
    this.land_price='';
    this.land_location='';
    this.land_details=''; 
  }

  addLand(){
    if(this.land_name == '' || this.land_price == '' || this.land_location == '' || this.land_details == '') {
      alert('Fill all the input fields');
      return;
    } 

    this.landObj.id = '';
    this.landObj.land_name = this.land_name;
    this.landObj.land_price = this.land_price;
    this.landObj.land_location= this.land_location;
    this.landObj.land_details= this.land_details;
    
    this.data.addLand(this.landObj);
    this.resetForm();


  }

  updateLand(){

  }

  deleteLand(land : Land){
    if(window.confirm('Are you sure you want to delete'+land.land_name+''+'?')){
      this.data.deleteLand(land);
    }

  }
  

}
