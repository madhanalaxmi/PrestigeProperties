import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PropertyService } from '../shared/propertis.service';
import { Property } from './propertis.model';

@Component({
  selector: 'app-propertis',
  templateUrl: './propertis.component.html',
  styleUrls: ['./propertis.component.css']
})
export class PropertisComponent {
  allProperty: any;
  formValue!: FormGroup;
  propertyModelObj: Property = new Property()
  showAdd!:boolean;
  showEdit!:boolean;



  constructor(private fb: FormBuilder, private api: PropertyService) { }

  ngOnInit(): void {
    this.formValue = this.fb.group({
      ptitle: [''],
      pprice: [''],
      plocation: [''],
      pdetails: ['']
    })
    this.getAllProperty()
 }
 clickAddProp(){
  this.formValue.reset();
  this.showAdd = true;
  this.showEdit = false;
 }


  getAllProperty() {
    this.api.getAllProp().subscribe((res) => {
      this.allProperty = res;
      console.warn(this.allProperty)
    })
  }
  //add property
  addProp() {
    this.propertyModelObj.ptitle = this.formValue.value.ptitle;
    this.propertyModelObj.pprice = this.formValue.value.pprice;
    this.propertyModelObj.plocation = this.formValue.value.plocation;
    this.propertyModelObj.pdetails = this.formValue.value.pdetails;
    this.api.addListing(this.propertyModelObj).subscribe((res) => {
      console.log(res);
      alert("Record Added Successfully 0")
      let ref = document.getElementById('clear');
      ref?.click();
      this.formValue.reset();
      this.getAllProperty();
    }, err => {
      alert("Something went wrong")

    })
  }

  deleteProp(data:any){
    this.api.deleteProp(data.id).subscribe((res)=>{
      alert('Property Deleted Successfully')
      this.getAllProperty();

    })
  }

}

