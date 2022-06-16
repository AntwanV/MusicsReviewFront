import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './public/homepage/homepage.component';

const routes: Routes = [
  { path: 'public', component: HomepageComponent },
  {
    path: 'private',
    loadChildren: () => import('./private/private.module').then(mod => mod.PrivateModule)
  },
  { path: '', redirectTo: 'public', pathMatch: 'full' },
  { path: '**', redirectTo: 'public' },
];
// Remettre to private si '' ou '**' quand on aura fait le system d'autification

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
