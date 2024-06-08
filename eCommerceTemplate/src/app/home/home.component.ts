import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  allProducts: any;
  newObj: any;
  productsArr: any = [];

  constructor(private productService: ProductServiceService) {
    this.productService.getAllProducts().subscribe((products: any) => {
      this.allProducts = products;
      console.log(this.allProducts);
    });
  }

  ngOnInit(): void {

  }

  getData(productData: Object) {
    this.newObj = productData;
    if (localStorage.getItem('productsData') == null) {
      this.productsArr = [];
      this.productsArr.push(productData);
      localStorage.setItem('productsData', JSON.stringify(this.productsArr));
    } else {
      this.productsArr.push(productData);
      localStorage.setItem('productsData', JSON.stringify(this.productsArr));
    }
  }
}
