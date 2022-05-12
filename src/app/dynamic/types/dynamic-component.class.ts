import { EventEmitter, Type } from '@angular/core';
import { DynamicComponentInterface } from './dynamic-component.interface';


export class DynamicComponentClass implements DynamicComponentInterface{

  readonly component: Type<any>
  id: number;
  position: number;
  readonly symbol: string;
  readonly shortName: string;
  readonly discription: string;
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

}                                                       