import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'lazyload', loadChildren: () => import('./lazy/lazy.module').then(m => m.LazyModule) },
 { path: 'anotherlazyload', loadChildren: () => import('./anotherlazyload/anotherlazyload.module').then(m => m.AnotherlazyloadModule) }

,
{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
