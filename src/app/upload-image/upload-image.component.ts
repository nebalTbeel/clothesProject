import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service';
import {HttpClient,HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {

  constructor( private api : ApiServiceService ,private http: HttpClient) { }

  ngOnInit() {
  }
  
//   imageUrl :string = "https://nebaltbeel.github.io/clothesProject/assets/img/hello.jpg";
// fileToUpload :File = null;
//   handleFileInput(File :FileList){
// this.fileToUpload = File.item(0);
// var reader = new FileReader();
// reader.onload = (event :any) => {

//   this.imageUrl = event.target.result;
// }

// reader.readAsDataURL(this.fileToUpload);
//   }

//   onSubmit(caption,image){

//     this.api.postFile(caption,image);

//   }
ress
selectedFile: File;
onFileChanged(event) {
  const file = event.target.files[0]
}
onUpload() {
  // this.http is the injected HttpClient
  this.http.post('../../clothesProject/assets/img', this.selectedFile)
    .subscribe(res =>this.ress =res);
    console.log(this.ress);
}

}
