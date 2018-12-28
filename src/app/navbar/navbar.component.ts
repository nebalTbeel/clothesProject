import { Component, OnInit, Input } from '@angular/core';
import {ApiServiceService} from '../api-service.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
islogin
  constructor(private api:ApiServiceService) { }

  ngOnInit() {

   this.api.getLogin().subscribe(response => this.islogin = response)

  }

  logout(){
    this.api.setLogin(false)
    
  }

}
