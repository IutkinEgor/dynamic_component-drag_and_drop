import { Component, ComponentRef, OnInit, ViewChild } from '@angular/core';

import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { DynamicComponentDirective } from '../directives/dynamic-component.directive';
import { DynamicComponentCardService } from '../services/dynamic-component-card.service';
import { DynamicComponentCardClass } from '../types/dynamic-component-card.class';

@Component({
  selector: 'app-conteiner-conteiner',
  template: `
    <div class="header">
      <h4>DYNAMIC COMPONENTS WITH DRAG AND DROP</h4>
      <button class="button" (click)="addComponent(componentList[0].symbol)"> Card 1 </button>
      <button class="button" (click)="addComponent(componentList[1].symbol)"> Card 2 </button>
      <button class="button" (click)="addComponent(componentList[2].symbol)"> Card 3 </button>
      <button class="button" (click)="addComponent(componentList[3].symbol)"> Card 3 V2 </button>
    </div>
    <div class="dynamic-component-conteiner">
      <ng-container>
        <div 
          cdkDropList 
          (cdkDropListDropped)="dropComponent($event)"
        >    
            <ng-template 
              appDynamicComponent 
              cdkDropListGroup
            >
          </ng-template>
        </div>
      </ng-container>
    </div>
  `
})
export class ConteinerComponent implements OnInit {

  @ViewChild(DynamicComponentDirective, {static: true}) dynamicComponent!: DynamicComponentDirective;
  
  componentList: DynamicComponentCardClass[] = []; 
  componentRefList: ComponentRef<DynamicComponentCardClass>[] = [];
  componentId: number = 0;

  constructor( 
          private dynamicComonentCardService: DynamicComponentCardService
  ) {}

  ngOnInit(): void {
    this.componentList = this.dynamicComonentCardService.getComponentList();

    //Default Dynamic component
    this.addComponent(this.componentList[0].symbol);
  }


  addComponent(symbol: string){
    console.log(symbol);
    const component = this.componentList.find( element => element.symbol == symbol);
    
    if(component == undefined) return;
    
   const componentRef: ComponentRef<DynamicComponentCardClass> 
                  = this.dynamicComponent.viewContainerRef
                    .createComponent<DynamicComponentCardClass>(component.component);
    
    this.componentId = this.componentId + 1;

    componentRef.instance.id = this.componentId;
    componentRef.instance.position = this.componentRefList.length;
    componentRef.instance.symbol = component.symbol;
    componentRef.instance.shortName = component.shortName;
    componentRef.instance.discription = component.discription;

    componentRef.instance.delete.subscribe(id => this.removeComponent(id));
    this.componentRefList.push(componentRef);
  }

  removeComponent(id: number){
    let component = this.componentRefList.find(element => element.instance.id == id);
    
    if(component != undefined) {
      this.componentRefList.splice(component.instance.position, 1);
      component.destroy();
    };
    
    this.updatePositionInfo();
  }

  dropComponent(event: CdkDragDrop<DynamicComponentCardClass[]>) {
    const { previousIndex, currentIndex } = event;

    this.dynamicComponent.viewContainerRef.move(this.componentRefList[previousIndex].hostView, currentIndex);
    moveItemInArray(this.componentRefList, previousIndex, currentIndex);

    this.updatePositionInfo();
  }
    
  updatePositionInfo(){
    this.componentRefList.forEach((element, index) => {
        element.instance.position = index;
    });
  }

}
