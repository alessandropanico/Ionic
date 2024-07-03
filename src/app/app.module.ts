import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, provideHttpClient } from '@angular/common/http'; // Importa HttpClientModule qui
import { MenuController } from '@ionic/angular';



//-------------pagine------------
import { HomeComponent } from './pagine/home/home.component';
import { AboutComponent } from './pagine/about/about.component';
import { HeaderComponent } from './pagine/header/header.component';
import { CameraComponent } from './pagine/camera/camera.component';
import { MessageComponent } from './pagine/message/message.component';
import { ChatComponent } from './pagine/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    CameraComponent,
    MessageComponent,
    ChatComponent,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideHttpClient(),
    MenuController,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
