import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiServiceService} from '../api-service.service';



@Component({
  selector: 'app-api-details',
  templateUrl: './api-details.component.html',
  styleUrls: ['./api-details.component.css']
})
export class ApiDetailsComponent implements OnInit {

  constructor(private apii: ApiServiceService ,private route: ActivatedRoute ) { }
  pp = {
  };
  secId
  description
  ngOnInit() {
    let id = parseInt (this.route.snapshot.paramMap.get('id'));
    this.secId = id;

 this.apii.getProductById(id).subscribe(products =>
  {
    this.pp =products
//console.log(this.pp.);
  // let desc = this.pp;
  // this.description = desc;

  } )
 //this.apii.getProduct().subscribe(products =>this.pp =products )


  /*  let desc = this.product.find(x => x.id === id).body;
    this.description = desc;
*/
    //this.description = this.product.body;
   /* let desc = this.product.find(x => x.id === id).body;
    this.description = desc;
*/


}
  }

