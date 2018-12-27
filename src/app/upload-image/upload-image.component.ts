import { Component, OnInit } from '@angular/core';
import {ApiServiceService} from '../api-service.service'
@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.css']
})
export class UploadImageComponent implements OnInit {
imageUrl :string = "https://nebaltbeel.github.io/clothesProject/assets/img/hello.jpg";
fileToUpload :File = null;
  constructor( private api : ApiServiceService) { }

  ngOnInit() {
  }
  handleFileInput(File :FileList){
this.fileToUpload = File.item(0);
var reader = new FileReader();
reader.onload = (event :any) => {

  this.imageUrl = event.target.result;
}

reader.readAsDataURL(this.fileToUpload);
  }

  onSubmit(caption,image){

    this.api.postFile(caption,image);

  }
}
