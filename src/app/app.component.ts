import { Component } from '@angular/core';
import {ApiServiceService} from '../app/api-service.service';
import {Router} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clothes';
  //login
  constructor(private api: ApiServiceService ,private router:Router) { 

    
  }

  //localstorage.setItem()
//   checkLogin(e){
//     console.log(e);

// if(e.success){

//   this.isLogin = true
//   //this.router.navigate(['/home']);
// }
//   }




}
