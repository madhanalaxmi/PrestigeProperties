import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private http:HttpClient) { }
  //now add get,post,put and delete method here
  //add property using post method
  addListing(data:any){
    return this.http.post('http://localhost:3000/properties',data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //get all property using get method
  getAllProp(){
    return this.http.get('http://localhost:3000/properties').pipe(map((res:any)=>{
      return res;
    }))
  }
  //update property using put method
  updateProp(data:any, id:number){
    return this.http.put('http://localhost:3000/properties/' +id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  //delete property using delete method
  deleteProp(id:number){
    return this.http.delete('http://localhost:3000/properties/' +id).pipe(map((res:any)=>{
      return res;
    }))
  }
  //service part done
}

