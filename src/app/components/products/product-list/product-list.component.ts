import { Component, OnInit, Host } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';
import { ProductComponent } from '../product/product.component';
import { PruebaService } from 'src/app/services/prueba.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList:any[] = []

  constructor(public productService:ProductService, private prueba: PruebaService) { }

  ngOnInit() {
    this.productService.getProduct()
      .subscribe(products=>{
        this.productList = products.map(product => ({
          id: product.payload.doc.id,
          ...product.payload.doc.data()
        }))
      })
      
  }
  deleteProduct(id:string){
    this.productService.deleteProduct(id)
      .then(()=>{
        Swal.fire({
          title: 'Exitosamente',
          text: 'Borrado correctamente',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }).catch(error=>{
        Swal.fire({
          title: 'Error',
          text: 'Ocurrio algo con el servidor',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
  }
  editProduct(product){      
    this.productService.contentFormEdit = product
    this.productService.isEditable = true
  }

  update(data) {
    this.prueba.doTest(data);
  }

}
