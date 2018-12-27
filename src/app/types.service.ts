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
{id:1,name:"ملابس",description:" ملابس أطفال ورجال "},
{id:2,name:"أحذية",description:" أحذية أطفال ورجال"},
{id:3,name:"اكسسوار",description:" اكسسوارات تخص الأطفال"}

  ]

 


  
}
