import { PopularPlaceComponent } from './popular-place/popular-place.component';
import { AllPlaceComponent } from './all-place/all-place.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ReviewComponent } from './review/review.component';
import { DescriptionComponent } from './description/description.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { PlaceComponent } from './place/place.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: '',
    component: MainPageComponent,
  },
  {
    path: 'description',
    component: DescriptionComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'province/:dataObj',
    component: AllPlaceComponent,
  },
  {
    path: 'popular',
    component: PopularPlaceComponent,
  },
  {
    path: 'place',
    component: PlaceComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
