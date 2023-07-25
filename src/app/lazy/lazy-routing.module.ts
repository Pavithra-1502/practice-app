import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyComponent } from './lazy.component';

const routes: Routes = [
  {path: '', component: LazyComponent },
  // {path: 'lazychild', component: LazychildcomponentComponent },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full'
  // }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyRoutingModule { }
