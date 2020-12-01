import { BrowserModule, Meta } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NofoundpageComponent } from './404/nofoundpage/nofoundpage.component';
import { APP_ROUTES } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';





@NgModule({
  declarations: [
    AppComponent,
    NofoundpageComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    
  ],
  providers: [Meta],
  bootstrap: [AppComponent]
})
export class AppModule { }
