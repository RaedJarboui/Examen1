import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  form: FormGroup;
  constructor(public productService: ProductService,private router: Router,private fb: FormBuilder) { 
    this.form = this.fb.group({
      name: [null, [Validators.required]],
      price: [null, [Validators.required,Validators.pattern('[0-9]*')]],
      description: [null, [Validators.required,Validators.minLength(10)]]
      


     

    });
  }
  get name() {
    return this.form.get('name');
  }
  get price() {
    return this.form.get('price');
  }
  get description() {
    return this.form.get('description');
  }
  

  ngOnInit(): void {
  }

}
