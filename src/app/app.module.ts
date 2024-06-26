import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Importa HttpClientModule qui


//-------------pagine------
import { HomeComponent } from './pagine/home/home.component';
import { AboutComponent } from './pagine/about/about.component';
import { HeaderComponent } from './pagine/header/header.component';
import { CameraComponent } from './pagine/camera/camera.component';
import { MessageComponent } from './pagine/message/message.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    CameraComponent,
    MessageComponent,


  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule, HttpClientModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
