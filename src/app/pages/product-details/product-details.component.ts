import {  Component } from '@angular/core';
import { PurchaesCardComponent } from '../../components/purchaes-card/purchaes-card.component';
import { CommentsComponent } from '../../components/comments/comments.component';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { IsClicledDirective } from '../../directives/is-clicled.directive';


@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [PurchaesCardComponent, CommentsComponent, CommonModule, IsClicledDirective],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  constructor(
    private _activateRoute: ActivatedRoute,
    private _productsService: ProductsService
  ) { }




//   updateRating(index: number) {
//     this.rating = index + 1;
//     this.calculateStars();
//     this.ratingUpdated.emit(this.rating);
//   }
// }












  
  
  productDetails: Product | null = null;
  ngOnInit(): void {
    this.getProductId();
  }






  getProductId() {
    this._activateRoute.paramMap.subscribe(
      {
        next: (res) => {
          console.log(res);
          let id = res.get('id') || '';
          this._productsService.getProductDetails(+id).subscribe({
            next: (response) => {
              this.productDetails = response;
              console.log(response);
            },
          });
        },
      }
    );
  }

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
