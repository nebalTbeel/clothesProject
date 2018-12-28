import { Injectable  } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import {Iproduct} from './models/product'
import 'hammerjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  isloginin = new Subject();
  constructor(private http: HttpClient) { }
 url= 'http://localhost:3000/products';

 setLogin(success){
this.isloginin.next(success);

 } 

 getLogin(){
   return this.isloginin.asObservable()
 }

  public getProductById(id: number):Observable<Iproduct[]>{

    return this.http.get<Iproduct[]>(`${this.url}/${id}`);
}
/********************************* */

  public getProduct():Observable<Iproduct[]>{
   // console.log ('ddd');
  return this.http.get<Iproduct[]>(this.url);
    } 

    /************************ */
    public getProductbycategory(cat,people):Observable<Iproduct[]>{
      let httpp = new HttpParams().set('category',cat).set('people', people);
    
      return this.http.get<Iproduct[]>(this.url,{params:httpp});
       } 
/******************************** */
     addProduct(obj){

      return this.http.post<Iproduct>(this.url,obj)
    } 

    /*************************************** */
    updateProduct(obj){
      console.log(obj);
      let url = `${this.url}/${obj.id}`;
      return this.http.put<Iproduct>(url,obj)

    }

    /************************************ */

delete(id){
  console.log(id);
    const url = `${this.url}/${id}`;
 
    return this.http.delete<Iproduct>(url);
}
      
/************************************ */
 
public getUser():Observable<Iproduct[]>{
 
  let urlUsers = 'http://localhost:3000/users'
 return this.http.get<Iproduct[]>(urlUsers);
   } 
/**************************** */
upload(fileToUpload: any) {
  let input = new FormData();
  input.append("file", fileToUpload);

  return this.http.post("../assets/img", input);
}

/************************************** */

getMendata (){

  return this.http.get<Iproduct[]>(this.url);

}

/*************************** */
postFile(caption : string, fileToUpload :File){

const endpoint = "https://github.com/nebalTbeel/clothesProject/tree/gh-pages/assets/img";
const Formdata :FormData = new FormData();
Formdata.append('image',fileToUpload,fileToUpload.name);
//Formdata.append('imageCaption',caption);
  return this.http.post(endpoint,Formdata);

}
}


