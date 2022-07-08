import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionComponent } from './addition/addition.component';
import { ArrayColorComponent } from './array-color/array-color.component';
import { SubtractionComponent } from './subtraction/subtraction.component';

const routes: Routes = [
  {path:'addition', component: AdditionComponent},
  {path:'subtraction', component: SubtractionComponent},
  {path:'arrayColor', component: ArrayColorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
