import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { AppointmentComponent } from './appointment/appointment.component';

export const routes: Routes = [
    {path:"",component:HomeComponent},
    {path:"contact",component:ContactsComponent},
    {path:"faci",component:FacilitiesComponent},
    {path:"signup",component:SignupComponent},
    {path:"log",component:LoginComponent},
    {path:"app",component:AppointmentComponent}

];
