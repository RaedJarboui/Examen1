import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private router: Router, public productService:ProductService) { }
product
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.productService.getProductById(id).subscribe((result)=>{
      this.product=result;
      });
  }

}
