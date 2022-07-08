import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrePipeComponent } from './pre-pipe/pre-pipe.component';
import { OwnPipeComponent } from './own-pipe/own-pipe.component';
import { FormsModule } from '@angular/forms';
import { FoodPipe } from './pipes/food.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PrePipeComponent,
    OwnPipeComponent,
    FoodPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
