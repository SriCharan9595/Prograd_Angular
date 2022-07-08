import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArrayColorComponent } from './array-color/array-color.component';
import { AdditionComponent } from './addition/addition.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

@NgModule({
  declarations: [
    AppComponent,
    ArrayColorComponent,
    AdditionComponent,
    SubtractionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
