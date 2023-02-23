import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

toABOUT(){
  document.getElementById("about")?.scrollIntoView({behavior:'smooth'})
}
toCONTACT(){
  document.getElementById("contact")?.scrollIntoView({behavior:'smooth'})

}
toTESTIMONIALS(){
  document.getElementById("testimonials")?.scrollIntoView({behavior:'smooth'})
}


}
