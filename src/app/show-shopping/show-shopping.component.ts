import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-show-shopping',
  templateUrl: './show-shopping.component.html',
  styleUrls: ['./show-shopping.component.css']
})
export class ShowShoppingComponent implements OnInit {
cart;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data)=>{
      this.cart=data;console.log(this.cart)
          
          }),
          errors =>{
            console.log(errors);
          }
  }
  

}
