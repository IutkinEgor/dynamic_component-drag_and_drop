import { Type } from "@angular/core";
import { DynamicComponentInterface } from "./dynamic-component.interface";

export interface DynamicComponentCardInterface extends DynamicComponentInterface {
  component: Type<any>
}


  
