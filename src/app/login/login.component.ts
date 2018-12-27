import { Component, OnInit, Output ,EventEmitter } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api: ApiServiceService ,private router:Router ) { }
 users = []
  ngOnInit() {
    this.api.getUser().subscribe(products =>this.users =products )


  }

user = this.user
pass = this.pass

@Output() loginEvent = new EventEmitter()

  login(){
let user = this.user
let pass = this.pass

for(let x=0; x< this.users.length ;x++){
  if(this.users.find(m => m.name === user)){
    if(this.users.find(m => m.name === user).password == pass ){

      this.api.setLogin(true)

    this.router.navigate(['/home']);
//this.loginEvent.emit({success :true})

    }
  }

}

  }
}
