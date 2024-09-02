// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../shared/material.module';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

// Components modules
import { HomepageModule } from '../pages/Homepage/homepage.module';
import { AuthentificationModule } from '../pages/Auth/authentification.module';
import { SharedModule } from '../shared/shared.module';

// Networking
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

// Forms
import { ReactiveFormsModule } from '@angular/forms';

// Interceptor
import { TokenInterceptor } from '../core/interceptors/token.interceptor';

// Services
import { DataService } from '../shared/services/data.service';
import { UserService } from '../core/services/auth/user.service';

export function tokenGetter(){
  return sessionStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
    HomepageModule,
    AuthentificationModule,
    MaterialModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: [
          "https://localhost:7167", 
          "http://localhost:5234",
          "https://localhost:3000",
          "http://localhost:4200"
        ],
        disallowedRoutes: []
      }
    }),
  ],
  providers: [
    DataService,
    UserService,
    TokenInterceptor,
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 3500}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class AppModule { }
