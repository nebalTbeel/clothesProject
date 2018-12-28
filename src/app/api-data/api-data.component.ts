import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import { Router } from '@angular/router';
import {Iproduct} from '../models/product'
import { getLocaleDateTimeFormat, formatDate } from '@angular/common';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-api-data',
  templateUrl: './api-data.component.html',
  styleUrls: ['./api-data.component.css']
})
export class ApiDataComponent implements OnInit {

  constructor(private api: ApiServiceService, private router:Router, private http:HttpClient) { 

    
  }

product = [];
show = false;
  ngOnInit() {

    this.api.getProduct().subscribe(products =>this.product =products )
 
  }
  /********************************************** */
  selectedObj =[]


  id=this.id;
  name = this.name
  size = this.size
  color = this.color
  prand = this.prand
  category = this.category
  image = this.image
   


  addProduct(form){


  /*  let fileToUpload = 'src/assets/img'
   // let fi = form.controls.nativeElement;
if (form.controls.image.value ) {
    let fileToUpload = form.controls.image.value;
    this.api
        .upload(fileToUpload)
        .subscribe(res => {
            console.log('result'+res);
        });
    }
console.log('image' +form.controls.image.value);
*/

   let las_obj = this.product[this.product.length-1];
   let last_id=this.product[this.product.length-1].id;
    last_id++;
    let image = this.image + Date()

form.controls.id.value =  last_id;
form.controls.image.value = image;
console.log(form);
let obj =form.value;
console.log(form.valid);

if(form.valid == true){



   this.api.addProduct(obj).subscribe(res =>this.product.push(res))
  }   
  }
  /************************************ */
  del
  delete(id){
    this.api.delete(id).subscribe(products =>this.del =products )
console.log(this.del);
  }
  /************************************* */
  onSelect(api){

    this.router.navigate(['/apiDetails',api.id]);
  }
/************************************ */
prom = {}
edit(id){
this.show = true;
this.api.getProductById(id).subscribe(products =>this.prom =products )

}

updateProduct(){

  console.log(this.prom);
  //let id = this.prom.id;

  this.api.updateProduct(this.prom).subscribe(res =>this.product.push(res))





}



}
