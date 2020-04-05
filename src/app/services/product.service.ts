import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  contentFormEdit:Product = {
    id:"",
    product: "",
    category: "",
    location: "",
    price: ""
  }
  isEditable:boolean = false
  
  constructor(private db: AngularFirestore) { }

  getProduct(){
    return this.db.collection("products").snapshotChanges()
  }
  
  insertProduct(product){
    return this.db.collection("products").add({
      product: product.product,
      location: product.location,
      category: product.category,
      price: product.price
    })
  }

  deleteProduct(id:string){
    return this.db.collection("products").doc(id).delete()
  }

  editProduct(product){
    let refProduct = this.db.collection("products").doc(product.id)
    refProduct.update(product)
  }
}
