import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnotherlazyloadRoutingModule } from './anotherlazyload-routing.module';
import { AnotherlazyloadComponent } from './anotherlazyload.component';
import { ChildcomponentComponent } from './childcomponent/childcomponent.component';


@NgModule({
  declarations: [
    AnotherlazyloadComponent,
    ChildcomponentComponent
  ],
  imports: [
    CommonModule,
    AnotherlazyloadRoutingModule
  ]
})
export class AnotherlazyloadModule { }
