import { Routes } from '@angular/router';
import { hoje } from './coponetes/Foto de hoje/app.hoje';
import { AppSomos } from './coponetes/Quem-somos/app.somos';
import { Data } from './coponetes/data/app.data';
import { IdiomasComponent } from './coponetes/idiomas/app.idiomas';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'hoje',
        pathMatch: 'full'
    },
    {
        path: 'hoje',
        title: 'Foto de hoje',
        component: hoje,
    },
    {
        path: 'somos',
        title: 'Quem somos',
        component: AppSomos,
    },
    {
        path: 'data',
        title: 'Foto por Data',
        component: Data,
    },
    {
        path: 'idioma',
        title: 'Idioma',
        component: IdiomasComponent,
    }
];
