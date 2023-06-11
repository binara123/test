import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:any
  pass:any

  constructor(private route:Router) { }

  ngOnInit(): void{
  }

  Login(){
    if(this.user=='binara' && this.pass=='123'){
      /*alert('login sucess');*/
      this.route.navigate(['all']);
    }
    else
      alert('login fail')

  }
}
