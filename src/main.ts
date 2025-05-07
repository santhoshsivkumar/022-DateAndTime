import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    importProvidersFrom(FormsModule),
    provideAnimations()
  ]
});

document.documentElement.style.setProperty('--header-color', '#ffffff');
document.documentElement.style.setProperty('--background-color', '#f0f0f0');
document.documentElement.style.setProperty('--font-color', '#000000');
