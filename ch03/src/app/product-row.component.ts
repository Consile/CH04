import { Component } from "@angular/core";
import { Product } from './product';

@Component({
    selector: 'product-row',
    templateUrl: 'produst-row.component.html',
    styleUrls: ['produst-row.component.css'],
    inputs: ['product'],
    host: { class: 'row' }
})
export class ProductRowComponent {
    product: Product;

    constructor() {

    }
}