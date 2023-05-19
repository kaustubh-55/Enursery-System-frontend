import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';


interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
const { webkitSpeechRecognition }: IWindow = <IWindow><unknown>window;
const recognition = new webkitSpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = false;


let utter = new SpeechSynthesisUtterance();
utter.lang = 'en-US';
utter.volume = 0.5;


@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})



export class SearchProductComponent {
  searchTerm: any = '';
  products: any;
  searchComplete: any = false;
  @Output() searchEvent = new EventEmitter<string>();



  constructor(private productService: ProductService) { }

  search() {
    this.productService.searchProducts(this.searchTerm).subscribe((products: any) => {
      this.searchEvent.emit(this.searchTerm);
    });
  }


  searchByVoice() {
    recognition.start();
    recognition.onresult = (event: any) => {

      event.preventDefault();
      const current = event.resultIndex;
      this.searchTerm = event.results[current][0].transcript;

      this.productService.searchProducts(this.searchTerm).subscribe((product: any) => {
        this.products = product; // Update the products array
        console.log(product)
        this.searchComplete = true;
        this.searchEvent.emit(this.searchTerm);
      });
    }
  }

}


