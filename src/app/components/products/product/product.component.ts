import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private fb:FormBuilder, public productService:ProductService) {}  
  
  ngOnInit() {}

  onSubmit(s){
    console.log(s.value);
    
    if (this.productService.isEditable) {
      this.productService.editProduct(this.productService.contentFormEdit)
      Swal.fire({
        title: 'Exitosamente',
        text: 'Actualizado correctamente',
        icon: 'success',
        confirmButtonText: 'Cool'
      })
      this.productService.contentFormEdit = { 
        id:'',
        product: '',
        category: '',
        location: '',
        price: ''
      }
      this.productService.isEditable = false
    } else {
    this.productService.insertProduct(this.productService.contentFormEdit)
      .then(resp=>{
        Swal.fire({
          text: 'Creado correctamente',
          icon: 'success',
          confirmButtonText: 'Cool'
        })
        this.productService.contentFormEdit = { 
          id:'',
          product: '',
          category: '',
          location: '',
          price: ''
        }

      }).catch(error=>{
        Swal.fire({
          text: 'Ocurrio algo con el servidor',
          icon: 'error',
          confirmButtonText: 'Cool'
        })
      })
    }
  }


}
