import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnPipeComponent } from './own-pipe/own-pipe.component';
import { PrePipeComponent } from './pre-pipe/pre-pipe.component';

const routes: Routes = [
  {path: 'prePipe', component: PrePipeComponent},
  {path: 'ownPipe', component: OwnPipeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
