import { ProductService } from './../../../components/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private prodcutService: ProductService, private router: Router) { }

  product: Product = {
    name: '',
    price: null
  }

  ngOnInit(): void {

  }

  createProduct(): void {
    this.prodcutService.create(this.product).subscribe(() => {
      this.prodcutService.showMessage('Produto criado com sucesso!');
      this.router.navigate(['/products'])
    });
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }
}
