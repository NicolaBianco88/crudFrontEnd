import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  constructor() { }

  stringaBooleano: Boolean = true;

  //da padre a figlio
  /*
  @Input()
  stringaDaComponentePadre!: string;
  */

  //da figlio a padre
  @Output() passaggioFiglioPadre = new EventEmitter();
  daFiglioaPadre(elementoDaPassare: string){
    this.passaggioFiglioPadre.emit(elementoDaPassare);
  }


}
