import { Component, OnInit } from '@angular/core';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumb.component';
import { AccordionSmartphoneComponent } from './_components/accordion-smartphone/accordion-smartphone.component';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [BreadcrumbComponent, AccordionSmartphoneComponent, RouterLink],
  providers: [ProductService],
  templateUrl: './products.component.html',
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor(private service: ProductService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((data) => console.log(data));
  }
}
