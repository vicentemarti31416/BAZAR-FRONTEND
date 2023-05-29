import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { DetailComponent } from './components/detail/detail.component';
import { AdministrationComponent } from './components/administration/administration.component';

const routes: Routes = [
  { path: '', component: GalleryComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
