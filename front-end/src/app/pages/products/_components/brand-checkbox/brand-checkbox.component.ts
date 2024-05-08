import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
@Component({
  selector: 'brand-checkbox',
  standalone: true,
  imports: [HlmLabelDirective, HlmCheckboxComponent, ReactiveFormsModule],
  template: `
    <label class="flex items-center" hlmLabel>
      <hlm-checkbox class="mr-2 border-[#D3D3D3]" />
      <ng-content></ng-content>
    </label>
  `,
})
export class BrandCheckbox {

}
