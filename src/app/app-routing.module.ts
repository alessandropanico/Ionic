import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { AboutComponent } from './pagine/about/about.component';
import { CameraComponent } from './pagine/camera/camera.component';
import { MessageComponent } from './pagine/message/message.component';
import { ChatComponent } from './pagine/chat/chat.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'camera',
    component:CameraComponent
  },
  {
    path:'message',
    component:MessageComponent
  },
  {
    path:'chat',
    component:ChatComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
