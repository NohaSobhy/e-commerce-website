import { Component } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { ProductCardComponent } from '../../../components/product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-furniture',
  standalone: true,
  imports: [ProductCardComponent, CommonModule],
  templateUrl: './furniture.component.html',
  styleUrl: './furniture.component.css'
})
export class FurnitureComponent {
  products: Product[] = [];

  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data: Product[]) => {
      this.products = data.filter((product: Product) => product.category === 'furniture');
    });
  }
}
