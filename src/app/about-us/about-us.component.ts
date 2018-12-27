import { Component, OnInit } from '@angular/core';
import {trigger, transition, style, animate} from '@angular/animations'
@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css'],
  animations:[
trigger('hello',[
transition ('void =>*',[
style({
opacity :0

}),
animate (2000,style({
opacity :1 

}))


]


)



]




)



  ]
})
export class AboutUsComponent implements OnInit {
x = "test"
pipe = [1,2,3,4,5,6,7,8]

user = {name : "mona"}
constructor() { }
  show = ""
  ngOnInit() {
    this.show = "active";

  }

}
