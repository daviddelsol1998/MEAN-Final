import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements OnInit {
  productForm: FormGroup;
  title = 'Add a new product';
  id: string | null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private _productService: ProductService,
    private aRoute: ActivatedRoute
  ) {
    this.productForm = fb.group({
      product: ['', Validators.required],
      category: ['', Validators.required],
      location: ['', Validators.required],
      price: ['', Validators.required],
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.editing()
  }

  addProduct() {
    const completeProduct: Product = {
      name: this.productForm.get('product')?.value,
      category: this.productForm.get('category')?.value,
      location: this.productForm.get('location')?.value,
      price: this.productForm.get('price')?.value,
    };
    

    this._productService.createProduct(completeProduct).subscribe(
      (data) => {
        this.toastr.success('Your Product has been added!', 'Success');
        console.log(completeProduct);
        this.router.navigate(['/']);
      },
      (err) => {
        console.log(err);
        this.productForm.reset();
      }
    );
  }

  editing() {
    if (this.id !== null) {
      this.title = 'Editar Producto';
      this._productService.getProduct(this.id).subscribe((data) => {
        this.productForm.setValue({
          product: data.name,
          category: data.category,
          location: data.location,
          price: data.price,
        });
      });
    }
  }
}
