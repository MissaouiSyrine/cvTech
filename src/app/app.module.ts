import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCVComponent } from './cvTech/list-cv/list-cv.component';
import { ItemCVComponent } from './cvTech/item-cv/item-cv.component';
import { DetailCVComponent } from './cvTech/detail-cv/detail-cv.component';
import { CVComponent } from './cvTech/cv/cv.component';
import { DefaultImagePipe } from './cvTech/default-image.pipe';
import { EmbaucheComponent } from './cvTech/embauche/embauche.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCVComponent,
    ItemCVComponent,
    DetailCVComponent,
    CVComponent,
    DefaultImagePipe,
    EmbaucheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
