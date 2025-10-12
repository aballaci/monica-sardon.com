import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));


import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';

// make German date/time formats available
registerLocaleData(localeDe);

bootstrapApplication(App, {
  providers: [
    { provide: LOCALE_ID, useValue: 'de' } // optional: make 'de' the default
  ]
});
