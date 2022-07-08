import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ObservableComponent } from './observable/observable.component'; 
import { UsersListComponent } from './users-list/users-list.component'; 

const routes: Routes = [
    {path:'Observable', component:ObservableComponent},
    {path:'HttpClient', component:UsersListComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyLoadRoutingModule { }
