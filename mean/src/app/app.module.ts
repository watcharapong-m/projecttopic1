import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { AuthHeaderInterceptor } from './interceptors/header.interceptor';
import { CatchErrorInterceptor } from './interceptors/http-error.interceptor';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './shared/services';
import { DescriptionComponent } from './description/description.component';
import { ReviewComponent } from './review/review.component';
import { MainPageComponent } from './main-page/main-page.component';
import { FooterComponent } from './footer/footer.component';
import { AllPlaceComponent } from './all-place/all-place.component';
import { PopularPlaceComponent } from './popular-place/popular-place.component';
import { BaseHtmlComponent } from './base-html/base-html.component';
import { PlaceService } from './shared/services/place/place.service';
import { PlaceComponent } from './place/place.component';

export function appInitializerFactory(authService: AuthService) {
  return () => authService.checkTheUserOnTheFirstLoad();
}

@NgModule({
  imports: [BrowserAnimationsModule, HttpClientModule, SharedModule, AppRoutingModule],
  declarations: [AppComponent, HeaderComponent, HomeComponent, DescriptionComponent, ReviewComponent, MainPageComponent, FooterComponent, AllPlaceComponent, PopularPlaceComponent, BaseHtmlComponent, PlaceComponent,],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHeaderInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CatchErrorInterceptor,
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      multi: true,
      deps: [AuthService],
    },
    PlaceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
