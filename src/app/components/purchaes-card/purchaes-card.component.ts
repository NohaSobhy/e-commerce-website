import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-purchaes-card',
  standalone: true,
  imports: [],
  templateUrl: './purchaes-card.component.html',
  styleUrl: './purchaes-card.component.css'
})
export class PurchaesCardComponent {

  @Input() productData!: any;
}
