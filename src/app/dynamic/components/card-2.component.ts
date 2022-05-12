import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardComponentInterface } from '../types/card-component.interface';


@Component({
  selector: 'app-card2-conteiner',
  template: `
  <div 
    cdkDrag 
    cdkDragLockAxis="y"   
    class="card-2-contenier"
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
    <span><strong>Card 2</strong></span> 
    <br>
    <span>Component id: {{id}}</span> 
    <br>
    <span>Component position: {{position}}</span>
  </div>
  `
})
export class Card2Component implements CardComponentInterface{

  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Input() id: number;
  @Input() position: number;

  constructor() {}
  
  onDelete() {
    this.delete.emit(this.id);
  }
}

