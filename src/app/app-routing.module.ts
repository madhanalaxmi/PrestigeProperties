import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ApartmentComponent } from './apartment/apartment.component';
import { LoginComponent } from './component/login/login.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RegisterComponent } from './component/register/register.component';
import { PropertisComponent } from './propertis/propertis.component';
import { PlotsComponent } from './plots/plots.component';


const routes: Routes = [
  { path: '', redirectTo:'login', pathMatch:'full'},
  { path: 'login', component:LoginComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'register', component:RegisterComponent },
  { path:'home', component:HomeComponent},
  { path: 'apartment', component:ApartmentComponent},
  { path: 'propertis', component:PropertisComponent},
  { path: 'plots', component:PlotsComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
