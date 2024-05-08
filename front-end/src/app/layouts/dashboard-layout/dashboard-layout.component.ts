import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './dashboard-layout.component.html',
})
export class DashboardLayoutComponent {}
