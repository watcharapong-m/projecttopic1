import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { DescriptionsComponent } from './descriptions/descriptions.component';
import { ReviewComponent } from './review/review.component';
import { MainpageComponent } from './mainpage/mainpage.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'description',
    component: DescriptionsComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'mainpage',
    component: MainpageComponent,
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
