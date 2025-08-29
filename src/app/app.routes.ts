import { Routes } from '@angular/router';
import { hoje } from './coponetes/Foto de hoje/app.hoje';
import { AppSomos } from './coponetes/Quem-somos/app.somos';

export const routes: Routes = [
    {
        path: 'hoje',
        title: 'Foto de hoje',
        component: hoje,
    },
    {
        path: 'somos',
        title: 'Quem somos',
        component: AppSomos,
    }
];
