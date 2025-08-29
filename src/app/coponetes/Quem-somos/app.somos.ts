import { Component } from '@angular/core';
import { DadosService } from '../logica/logica';
import { NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'app-somos',
    template:`
        <h1>Quem somos</h1>
        <p>Somos um grupo de entusiastas do espaço dedicados a compartilhar a beleza
        e o mistério do universo através da fotografia diária da NASA.</p>`,
    styles: `
    
    `,
    imports: []
})export class AppSomos {
    dados = DadosService;
}