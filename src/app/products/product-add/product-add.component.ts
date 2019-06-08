import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formBuiler: FormBuilder) { }

  ngOnInit() {
    this.productForm = this.formBuiler.group({
      name: ['', Validators.required],
      code:['',Validators.required],
      image:['',Validators.required],
      price:['',Validators.required]
    });
  }

}
