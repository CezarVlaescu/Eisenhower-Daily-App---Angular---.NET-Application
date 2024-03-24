import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// http
import { HttpClientModule } from '@angular/common/http';

// forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// containers
import { HomeModule } from '../components/main-components/home/home.module';

// interceptors
import { AuthInterceptorInterceptor } from '../interceptors/auth-interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthInterceptorInterceptor
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
