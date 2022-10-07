import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products:Product[]=[]

// Inject
  constructor(private _productService:ProductService) { }

  ngOnInit(): void {
    this.products=this._productService.getproducts();
  }

}
