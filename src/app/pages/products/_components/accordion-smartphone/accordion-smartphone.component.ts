import { Component, Input, Output, inject } from '@angular/core';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { BrandCheckbox } from '../brand-checkbox/brand-checkbox.component';
import { InputSearchBrand } from '../input-search-brand/input-search-brand.component';
import { HlmCheckboxComponent } from '@spartan-ng/ui-checkbox-helm';
import { HlmLabelDirective } from '@spartan-ng/ui-label-helm';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../../../services/product.service';
import { FormsModule } from '@angular/forms';
import { FilterService } from '../../../../services/filter.service';

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
    HlmLabelDirective,
    HlmCheckboxComponent,
    CommonModule,
    FormsModule,
  ],
  providers: [ProductService],
  templateUrl: './accordion-smartphone.component.html',
})
export class AccordionSmartphoneComponent {
  @Input() filters: any[] = [];
  @Input() checked: string = '';
  @Output() product!: { category_id: string };

  constructor(
    private filterService: FilterService
  ) {}

  setCheckedValue(event: any) {
    this.filterService.setIsChecked(event.target.id)
  }


}
