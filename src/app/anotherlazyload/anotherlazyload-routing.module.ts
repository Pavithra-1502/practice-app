import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnotherlazyloadComponent } from './anotherlazyload.component';

const routes: Routes = [{ path: '', component: AnotherlazyloadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnotherlazyloadRoutingModule { }
