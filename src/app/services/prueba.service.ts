import { Injectable } from '@angular/core';
import { firestore } from 'firebase';
import * as firebase from 'firebase/app';
// const firebase = require("firebase");

@Injectable({
  providedIn: 'root'
})
export class PruebaService {
  COLLECTION_PRODUCT = 'products';
  COLLECTION_DETAILS_PRODUCT = 'details_products';
  db = firestore();
  constructor() {}

  doTest(doc) {
    const docRef = this.db.collection(this.COLLECTION_PRODUCT).doc(doc);
    const docRef2 = this.db.collection(this.COLLECTION_DETAILS_PRODUCT).doc(doc);
    // console.log(docRef, 'docRef1');
    console.log(docRef2, 'docRef2');

    return this.db.runTransaction((transaction) => {
      return transaction.get(docRef).then((document) => {
        console.log(document);
        
        if (!document.exists) {
          console.log('la guia no existe');
        }
        transaction.update(docRef, {estado: 'vendido'});
        transaction.update(docRef2, {status: 'jugosa'});
        transaction.update(docRef2, {
          productColor: firestore.FieldValue.delete(),
          productPrice: firestore.FieldValue.delete(),
          productTaste: firestore.FieldValue.delete()
        });
        // transaction.update(docRef2, {productPrice: firestore.FieldValue.delete()});
        // transaction.update(docRef2, {productTaste: firestore.FieldValue.delete()});
      });
    });
  }
}
