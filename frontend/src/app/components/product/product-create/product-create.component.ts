import { ProductService } from './../../product/product.service';
import { Product } from './../product.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent  {

  product: Product = {
    name:'',
    price: null
  }

  constructor(private ProductService: ProductService,
      private router: Router) { }

  createProduct(): void{
    this.ProductService.create(this.product).subscribe(() =>{
    this.ProductService.showMessage('Produto criado!')
    this.router.navigate(['/products'])
    })

    
  }

  cancel(): void{
   this.router.navigate(['/products'])
  }
}
