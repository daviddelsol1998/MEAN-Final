import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ShowProductsComponent } from './components/show-products/show-products.component';

const routes: Routes = [
  {path: '', component: ShowProductsComponent},
  { path: 'create-product', component: CreateProductComponent },
  { path: 'edit-product/:id', component: CreateProductComponent },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
