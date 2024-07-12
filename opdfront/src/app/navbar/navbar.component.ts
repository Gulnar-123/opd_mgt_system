import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
ngOnInit(): void {
  this.router.events.subscribe(()=>{
    let em=localStorage.getItem("pemail")
    if(em!=null)
    {
this.usertype="user"
    }
    else
    this.usertype="guest"
  })

}
usertype="guest"
constructor(private router:Router)
{

}
}
