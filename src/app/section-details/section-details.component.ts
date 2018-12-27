import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TypesService} from '../types.service';
import {ApiServiceService} from '../api-service.service';

import { from } from 'rxjs';
@Component({
  selector: 'app-section-details',
  templateUrl: './section-details.component.html',
  styleUrls: ['./section-details.component.css']
})
export class SectionDetailsComponent implements OnInit {

  constructor(private api: ApiServiceService ,private route: ActivatedRoute ,private setions: TypesService) { }

  public secId ;
public description;


  ngOnInit() {
    let id = parseInt (this.route.snapshot.paramMap.get('id'));
    this.secId = id;
    
    let desc = this.setions.types.find(x => x.id === id).description;
   this.description = desc;


  
  }


  allproduct = []
  category = []
  finalProduct = []
  cat
  people

  getMendata(cat,people){
    this.api.getProductbycategory(cat,people).subscribe(products =>this.category =products )


  }


  /*
  getMendata(cat,people){
this.cat = cat
this.people = people
this.api.getProduct().subscribe(products =>this.allproduct =products )


for(let i = 0; i< this.allproduct.length ; i++){

  this.category.push(this.allproduct.find(x => x.category === cat ));
}

for(let j = 0; j< this.category.length ; j++){

  this.finalProduct.push(this.category.find(x => x.people === people ));
}


//console.log(this.allproduct);
console.log(this.category);

  }
*/


}
