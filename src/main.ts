import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
//ensuring Angular destroys itself on hot reloads
if(window['ngRef']){
  window.location.reload();
}

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  window['ngRef'] = ref;
  //otherwise, log the boot error
}).catch(err => console.error(err));
