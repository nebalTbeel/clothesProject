import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Iproduct} from './models/product'

@Injectable({
  providedIn: 'root'
})
export class TypesService {

  url='https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {
   
   }
   getProduct():Observable<Iproduct[]>{
    return this.http.get<Iproduct[]>(this.url);
    } 


    getProductById(id):Observable<Iproduct>{
      return this.http.get<Iproduct>(`${this.url}/${id}`)
    }
  
 

  types=[
{id:1,name:"Clothes",description:" Clothes For Men And Children",img:"../../assets/img/images.jpg"},
{id:2,name:"Shoes",description:" Shoes For Men And Children ",img:"../../assets/img/shoes.jpg"},
{id:3,name:"Accessories",description:" Accessories For Men And Children",img:"../../assets/img/accessories.jpg"}

  ]

 


  
}
