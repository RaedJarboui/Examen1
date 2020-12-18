import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
products;
  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data)=>{
      this.products=data;console.log(this.products)
          
          }),
          errors =>{
            console.log(errors);
          }
  }

}
