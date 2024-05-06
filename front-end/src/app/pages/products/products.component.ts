import { Component } from '@angular/core';
import {MatPaginatorModule} from "@angular/material/paginator"

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {

}
