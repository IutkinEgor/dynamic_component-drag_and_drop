import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//
import { DragDropModule } from '@angular/cdk/drag-drop';

//Dynamic components
import * as fromDynamicComponents from './dynamic/components/index'
import { DynamicComponentService } from './dynamic/services/dynamic-component.service';
import { DynamicComponentDirective } from './dynamic/directives/dynamic-component.directive';

@NgModule({
  declarations: [
    AppComponent,
    //Dynamic Components directive
    DynamicComponentDirective,
    //Dynamic Components conteiner
    fromDynamicComponents.ConteinerComponent,
    //Dynamic Components
    fromDynamicComponents.Card1Component,
    fromDynamicComponents.Card2Component,
    fromDynamicComponents.Card3Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //CDK -Component Dev Kit
    DragDropModule,
    
  ],
  providers: [
    DynamicComponentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
