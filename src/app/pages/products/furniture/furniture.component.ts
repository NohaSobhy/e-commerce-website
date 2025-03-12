import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SidebarComponent],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
  products: Product[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data.filter((product: Product) => product.category === 'Furniture');
      this.filteredProducts = [...this.products];
    });
  }

  updateFilteredProducts(filtered: any[]) {
    this.filteredProducts = filtered;
  }
}
