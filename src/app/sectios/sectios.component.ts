import { Component, OnInit } from '@angular/core';
import { Services } from '@angular/core/src/view';
import {TypesService} from '../types.service';
import { Router } from '@angular/router'
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sectios',
  templateUrl: './sectios.component.html',
  styleUrls: ['./sectios.component.css']
})
export class SectiosComponent implements OnInit {

  constructor(private setions: TypesService, private router:Router ) { }
  data = this.setions.types;
 
product = [];

myForm = new FormGroup({
  name: new FormControl(null,Validators.required),
  age: new FormControl(null)
    
  })
  errorReq = ""
  onSubmit(){

    console.log(this.myForm);
    if(this.myForm.controls.name.errors.required){

      this.errorReq = "must be filled"

    }
  }
  ngOnInit() {
    this.errorReq = ""
    this.setions.getProduct().subscribe(products =>this.product =products )
   
  }
  onSelect(section){

    this.router.navigate(['/sectionDetails',section.id]);
  }
}
