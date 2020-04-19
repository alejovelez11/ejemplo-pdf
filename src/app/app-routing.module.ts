import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfGenerateComponent } from './pdf-generate/pdf-generate.component';
import { ProductsComponent } from './components/products/products.component';
import { InvoiceGenerateComponent } from './invoice-generate/invoice-generate.component';


const routes: Routes = [
  {path: '', redirectTo: '/pdf', pathMatch: 'full'},
  { path: 'pdf', component: PdfGenerateComponent },
  { path: 'factura', component: InvoiceGenerateComponent },
  { path: 'products', component: ProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
