import { Injectable } from '@angular/core';

import { DynamicComponentCardClass } from '../types/dynamic-component-card.class';
import * as fromDynamicComponents from '../components/index'


@Injectable()
export class DynamicComponentCardService {

  getComponentList() {
    return [
      new DynamicComponentCardClass(
          fromDynamicComponents.Card1Component, 
          "CARD1", 
          "Card 1", 
          "My Card number 1 is about ..."
          ),
      new DynamicComponentCardClass(
          fromDynamicComponents.Card2Component, 
          "CARD2", 
          "Card 2", 
          "My Card number 2 is about ..."
          ),
      new DynamicComponentCardClass(
          fromDynamicComponents.Card3Component, 
          "CARD3", 
          "Card 3", 
          "My Card number 3 is about ..."
          ),
      new DynamicComponentCardClass(
          fromDynamicComponents.Card3Component, 
          "CARD3_V2", 
          "Card 3 Version 2", 
          "This is Card 3 but with another data from initialization service method"
          )
      ];
  }
}



