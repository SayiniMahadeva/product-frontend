import { Component, OnInit } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  pageTitle = 'Products';
  products: Product[] = [
    {productId: "001", productName: "Chair", productCode: "#001", image: "http://pngimg.com/uploads/chair/chair_PNG6862.png", price: "39.00"},
    {productId: "002", productName: "Table", productCode: "#002", image: "http://pngimg.com/uploads/table/table_PNG7001.png", price: "34.00"},
    {productId: "003", productName: "Desk", productCode: "#003", image: "https://atlas-content-cdn.pixelsquid.com/stock-images/traditional-desk-DxPevq4-600.jpg", price: "29.00"},
  ];
  constructor() { }

  ngOnInit() {
  }

}
