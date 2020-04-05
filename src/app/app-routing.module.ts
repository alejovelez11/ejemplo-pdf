import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfGenerateComponent } from './pdf-generate/pdf-generate.component';
import { ProductComponent } from './components/products/product/product.component';
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
  { path: 'pdf', component: PdfGenerateComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
