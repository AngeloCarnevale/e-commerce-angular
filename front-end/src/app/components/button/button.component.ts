import { Component } from '@angular/core';
import { HlmInputModule } from '@spartan-ng/ui-input-helm';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [HlmInputModule],
  templateUrl: './button.component.html',
})
export class ButtonComponent {

}
