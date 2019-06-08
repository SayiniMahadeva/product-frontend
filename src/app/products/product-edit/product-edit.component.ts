import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
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
