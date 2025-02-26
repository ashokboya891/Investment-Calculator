import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './Testing/first/first.component';
import { SecondComponent } from './Testing/second/second.component';

const routes: Routes = [
  {
    path:'first',component:FirstComponent,
  },
  {
    path:'second/:id',component:SecondComponent
  },
  {
    path:'',redirectTo:'first',pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
