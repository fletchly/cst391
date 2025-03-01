import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: false,
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit {
  @Input() name: string | undefined;
  quantity = 0;
  products: string[] = [];
  selectedProduct = 'Star Wars';

  constructor() {}

  ngOnInit(): void {
    this.quantity = 0;
    this.products = ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi'];
    this.selectedProduct = 'Star Wars';
  }

  newInfo() {
    this.quantity = 0;
    this.products = ['Star Wars', 'The Empire Strikes Back', 'Return of the Jedi'];
    this.selectedProduct = 'Star Wars';

    console.log('In newInfo() and resetting Info');
  }

  onSubmit() {
    console.log('In onSubmit() with quantity of ' + this.quantity + ' and Movie selected is ' + this.selectedProduct);
  }
}
