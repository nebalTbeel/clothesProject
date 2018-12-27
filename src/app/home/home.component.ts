import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute ) { }
  show = ""
  imagesUrl
  ngOnInit() {
    this.show = "active";

    this.imagesUrl = [
      '../assets/img/hello.jpg',
      '../assets/img/hello2.jpg',
      '../assets/img/hello3.jpg'
     
      ];

  }
 
}
