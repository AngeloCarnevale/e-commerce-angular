import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
})
export class HomeComponent  implements OnInit{
  private title = inject(Title)
  
  ngOnInit(): void {
    this.title.setTitle("Eccomerce")
  }
}
