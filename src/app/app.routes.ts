// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { PhotoBannerComponent } from './photo-banner/photo-banner.component';
import { ConcertsComponent } from './concerts/concerts';
import { BioComponent } from './bio/bio.component';
import { ContactsComponent } from './contact/contact.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { TermsOfServicesComponent } from './terms-of-services/terms-of-services.component';

export const routes: Routes = [
    {
        path: '',
        component: PhotoBannerComponent,
        data: {
            src: 'https://files.builder.misssite.com/08/6a/086a5050-24e4-4af7-9110-e21b37576255.jpg',
            alt: 'Mónica Sardón Hidalgo performing'
        }
    },   // ← home
    {
        path: 'concerts',
        component: ConcertsComponent
    },
    {
        path: 'bio',
        component: BioComponent
    },
        {
        path: 'contact',
        component: ContactsComponent
    },
    {
        path: 'impressum',
        component: ImpressumComponent
    },
    {
        path: 'terms-of-services',
        component: TermsOfServicesComponent
    },
    { path: '**', redirectTo: '' },                 // fallback

];
