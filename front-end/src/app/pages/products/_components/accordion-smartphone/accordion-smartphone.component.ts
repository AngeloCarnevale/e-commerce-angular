import { Component } from '@angular/core';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import {
  HlmCheckboxCheckIconComponent,
  HlmCheckboxComponent,
} from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { BrandCheckbox } from '../brand-checkbox/brand-checkbox.component';
import { InputSearchBrand } from '../input-search-brand/input-search-brand.component';

@Component({
  selector: 'app-accordion-smartphone',
  standalone: true,
  imports: [
    BrnAccordionContentComponent,
    HlmAccordionDirective,
    HlmAccordionItemDirective,
    HlmAccordionTriggerDirective,
    HlmAccordionContentDirective,
    HlmAccordionIconDirective,
    HlmIconComponent,
    BrandCheckbox,
    InputSearchBrand,
  ],
  templateUrl: './accordion-smartphone.component.html',
})
export class AccordionSmartphoneComponent {}
