import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ProductComponent } from './product/product.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path:'home',component:HomeComponent,children:[{path:'show',component:ShowComponent}]},
  {path:'products',component:ProductComponent},
  // {path:'show',component:ShowComponent},
  {path:"",redirectTo:'home',pathMatch:'full'}, ///for empty path
  {path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
