import { Injectable } from '@angular/core';

import { DynamicComponentClass } from '../types/dynamic-component.class';
import * as fromDynamicComponents from '../components/index'


@Injectable()
export class DynamicComponentService {
  getComponentList() {
    return [
      new DynamicComponentClass(
          fromDynamicComponents.Card1Component, 
          "CARD1", 
          "Card 1", 
          "My Card number 1 is about ..."
          ),
      new DynamicComponentClass(
          fromDynamicComponents.Card2Component, 
          "CARD2", 
          "Card 2", 
          "My Card number 2 is about ..."
          ),
      new DynamicComponentClass(
          fromDynamicComponents.Card3Component, 
          "CARD3", 
          "Card 3", 
          "My Card number 3 is about ..."
          )
      ];
  }
}



