import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';
import { SidebarComponent } from '../../../components/sidebar/sidebar.component';

@Component({
  selector: 'app-electronics',
  standalone: true,
  imports: [SidebarComponent, ProductCardComponent, CommonModule],
  templateUrl: './electronics.component.html',
  styleUrl: './electronics.component.css'
})
export class ElectronicsComponent {
  products: Product[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data.filter((product: Product) => product.category === 'Electronics');
      this.filteredProducts = [...this.products];
    });
  }

  updateFilteredProducts(filtered: any[]) {
    this.filteredProducts = filtered;
  }
}
