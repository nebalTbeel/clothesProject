import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { SectiosComponent } from './sectios/sectios.component';
import { AppRoutingModule } from './app-routing.module';
import { SectionDetailsComponent } from './section-details/section-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiDataComponent } from './api-data/api-data.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ApiDetailsComponent } from './api-details/api-details.component';
import { LoginComponent } from './login/login.component';
import { FileUploadModule } from 'ng2-file-upload';
import { CardComponent } from './card/card.component';
import { MenCategoryComponent } from './men-category/men-category.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomPipe } from './custom.pipe';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxButtonModule } from 'igniteui-angular';
import { SliderModule } from 'angular-image-slider';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    SectiosComponent,
    SectionDetailsComponent,
    ApiDataComponent,
    ApiDetailsComponent,
    LoginComponent,
    CardComponent,
    MenCategoryComponent,
    NavbarComponent,
    CustomPipe,
    UploadImageComponent
    
    
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
      SliderModule,
      FileUploadModule,
      IgxButtonModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
