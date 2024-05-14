import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './breadcrumb.component.html',
})
export class BreadcrumbComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  value!: string;
  ngOnInit(): void {
    this.route.queryParams.subscribe(
      (params) => (this.value = params['search'])
    );
  }

  
}
