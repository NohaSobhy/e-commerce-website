import { Component, Input } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() product!: Product;
  
  getStarsArray(rating: number): string[] {
    const stars: string[] = [];
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - (fullStars + halfStar);
  
    for (let i = 0; i < fullStars; i++) {
      stars.push("full");
    }
    if (halfStar) {
      stars.push("half");
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push("empty");
    }
  
    return stars;
  }
  
  
}
