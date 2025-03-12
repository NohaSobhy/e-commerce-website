import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() products: Product[] = [];
  @Input() selectedCategory: string = '';
  @Output() filterProducts = new EventEmitter<Product[]>();

  uniqueBrands: string[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] || changes['selectedCategory']) {
      this.getUniqueBrands();
    }
  }

  getUniqueBrands() {
    if (this.selectedCategory) {
      this.uniqueBrands = [
        ...new Set(
          this.products
            .filter((p) => p.category === this.selectedCategory)
            .map((p) => p.brand)
        ),
      ];
    } else {
      this.uniqueBrands = [...new Set(this.products.map((p) => p.brand))];
    }
  }

  filterByPrice(min: number, max: number) {
    const filtered = this.products.filter(p => p.price >= min && p.price <= max);
    this.filterProducts.emit(filtered);
  }

  filterByBrand(event: any, brand: string) {
    if (event.target.checked) {
      const filtered = this.products.filter(p => p.brand === brand);
      this.filterProducts.emit(filtered);
    }
  }

  filterByDelivery(event: any, type: string) {
    if (event.target.checked) {
      const filtered = this.products.filter(p => p.delivery.includes(type));
      this.filterProducts.emit(filtered);
    }
  }

  filterByRating(rating: number) {
    const filtered = this.products.filter(p => p.rating >= rating);
    this.filterProducts.emit(filtered);
  }
}
