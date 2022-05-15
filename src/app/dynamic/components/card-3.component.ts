import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DynamicComponentInterface } from '../types/dynamic-component.interface';


@Component({
  selector: 'app-card3-conteiner',
  template: `
  <div 
    cdkDrag 
    cdkDragLockAxis="y"   
    class="card-3-contenier"
    >   
    <div class="example-handle" cdkDragHandle>
        <svg width="24px" fill="currentColor" viewBox="0 0 24 24">
          <path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
    </div>
    <button (click)="onDelete()">
            Close
    </button>
    <br>
    <span><strong>Card 3</strong></span> 
    <br>
    <span>Component id: {{id}}</span> 
    <br>
    <span>Component position: {{position}}</span>
    <p>
    <span><strong>Info from initialization service</strong></span>
    <br>
    <span>Symbol: {{symbol}}</span>
    <br>
    <span>ShortName: {{shortName}}</span>
    <br>
    <span>Discription: {{discription}}</span>
  </div>
  `
})
export class Card3Component implements DynamicComponentInterface {

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Input() id: number;
  @Input() position: number;
  @Input() symbol: string;
  @Input() shortName: string;
  @Input() discription: string;

  constructor() {}
  
  onDelete() {
    this.delete.emit(this.id);
  }
}

