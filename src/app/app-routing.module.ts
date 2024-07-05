import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pagine/home/home.component';
import { AboutComponent } from './pagine/about/about.component';
import { CameraComponent } from './pagine/camera/camera.component';
import { MessageComponent } from './pagine/message/message.component';
import { ChatComponent } from './pagine/chat/chat.component';
import { LoginComponent } from './pagine/login/login.component';
import { RegisterComponent } from './pagine/register/register.component';
import { SpecialComponent } from './pagine/special/special.component';

//------------------------------
import { AuthGuard } from './guardia/auth.guard';
import { ProfiloComponent } from './pagine/profilo/profilo.component';

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
    component:CameraComponent,
    canActivate: [AuthGuard], // Add this line
  },
  {
    path:'message',
    component:MessageComponent
  },
  {
    path:'chat',
    component:ChatComponent,
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'special',
    component:SpecialComponent,
    canActivate: [AuthGuard], // Add this line
  },
  {
    path:'profilo',
    component:ProfiloComponent,
    canActivate: [AuthGuard], // Add this line

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
