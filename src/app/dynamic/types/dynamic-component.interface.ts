import { Type } from "@angular/core";
import { EventEmitter } from '@angular/core';

export interface DynamicComponentInterface {
  id: number;
  position: number;
  symbol: string;
  shortName: string;
  discription: string;
  delete: EventEmitter<number>;

  onDelete(id?: number): void;
}


  
