import { Component } from '@angular/core';
import { Patient } from '../models/patient';
import { FormsModule } from '@angular/forms';
import { PatientService } from '../services/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

submitdata() {
this.ps.insert(this.p).subscribe((data:Patient)=>{
if(data!=null)
  alert("Registration Successful")
this.router.navigate(["/log"])
})
}

p:Patient=new Patient()
constructor(private ps :PatientService,private router:Router)
{

}

}
