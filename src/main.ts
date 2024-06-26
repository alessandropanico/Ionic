import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

//per poter fare foto anche da pc
import { defineCustomElements } from '@ionic/pwa-elements/loader';

defineCustomElements(window);
if (environment.production) {
  enableProdMode();
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
