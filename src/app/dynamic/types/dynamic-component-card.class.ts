import { EventEmitter, Type } from '@angular/core';
import { DynamicComponentCardInterface } from './dynamic-component-card.interface';

export class DynamicComponentCardClass implements DynamicComponentCardInterface{

  readonly component: Type<any>
  id: number;
  position: number;
  symbol: string;
  shortName: string;
  discription: string;
  delete: EventEmitter<number>;
  

  constructor(component: Type<any>, 
              symbol: string,
              shortName: string,
              discription: string
  ) 
  {
    this.component = component;
    this.symbol = symbol;
    this.shortName = shortName;
    this.discription = discription;
  }

  //It's Okay
  onDelete(id: number): void {
    throw new Error('Method not implemented.');
  }

}                                                       