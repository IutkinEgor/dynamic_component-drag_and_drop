import { EventEmitter } from '@angular/core';

export interface CardComponentInterface {
  id: number;
  position: number;
  delete: EventEmitter<number>;
  onDelete(): void
}
  
