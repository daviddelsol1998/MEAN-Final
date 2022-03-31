import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  listProducts: Product[] = [];

  constructor( private _productService: ProductService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts() {
    this._productService.getProducts().subscribe(data => {
      console.log(data);
      this.listProducts = data
    }, err => {
      console.log(err);
    })
  }

  deleteProduct(id: any) {
    this._productService.deleteProduct(id).subscribe(data => {
      this.toastr.error('The product has been deleted successfully', 'DELETED')
      this.getProducts()
    }, err => {
      console.log(err)
    }
    )
  }

  

}
