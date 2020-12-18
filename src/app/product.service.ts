import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cart } from './models/Cart';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  form: FormGroup;
  cart;
  data;

  constructor(private http: HttpClient,private router: Router,private route: ActivatedRoute) { }
  
  getAllProducts(){
    return this.http.get<Product[]>('/api/products/');
  }
  getAllCarts(){
    return this.http.get<Cart[]>('/api/cart/');
  }
  add(data:any): Observable<any>{
    return this.http.post('/api/products/',data);
  }
  addCart(data:any): Observable<any>{
    return this.http.post('/api/cart/',data);
  }
  getProductById(id:number){
    return this.http.get<Product[]>('/api/products/' +id);
  }
  addProduct(form){
    this.add(form).subscribe(() =>{
      this.router.navigate(['/home']);
      console.log("product added succesfully");
  
    })
  }
  addcart(id){
    this.getAllCarts().subscribe((result)=>{
     this.data=result;
     for(var i =0; i<result.length;i++){
       if(result[i].id==id){
         console.log("produit existant");
       }else{
        this.getProductById(id).subscribe((result) =>{
          this.cart=result;
          this.addCart(this.cart).subscribe(() =>{
            console.log("cart added succesfully");
        
          });
         
           
      
        });
       }

     }
    });
   
    
  
    

  }
}
