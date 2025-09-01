import { Component, inject } from '@angular/core';
import { DadosService } from '../logica/logica';
import { CommonModule } from "@angular/common";

@Component({
    selector: 'app-somos',
    standalone: true,
    template: `
      <div class="somos-container">
        <div class="header">
          <h1>Conectando a Humanidade ao Cosmos</h1>
          <p class="subtitle">Um projeto nascido da paixão pela exploração espacial.</p>
        </div>
      
        <div class="content-section">
          <h2>Nossa Missão</h2>
          <p>
            Nossa missão é tornar as maravilhas do universo, capturadas pela NASA, acessíveis a todos, todos os dias. Acreditamos que cada imagem do "Astronomy Picture of the Day" (APOD) é mais do que uma foto; é uma janela para a imensidão do espaço, uma fonte de inspiração e um lembrete do nosso lugar no cosmos. Este aplicativo foi criado para ser uma ponte direta e elegante entre você e as estrelas.
          </p>
        </div>
      
        <div class="content-section">
          <h2>Tecnologia por Trás das Estrelas</h2>
          <p>
            Este aplicativo foi desenvolvido com tecnologias web modernas para garantir uma experiência rápida, responsiva e agradável em qualquer dispositivo. Utilizamos:
          </p>
          <ul>
            <li><strong>Angular & TypeScript:</strong> Para uma arquitetura robusta, modular e de alto desempenho.</li>
            <li><strong>NASA APOD API:</strong> A fonte de nossos dados, que nos permite trazer a você as imagens e informações astronômicas mais recentes diretamente da NASA.</li>
            <li><strong>Design Responsivo:</strong> Criado com uma abordagem "mobile-first", garantindo que a exploração espacial esteja sempre ao alcance de suas mãos, seja em um celular, tablet ou desktop.</li>
          </ul>
        </div>
      
        <div class="content-section">
          <h2>Nossa Inspiração</h2>
          <p>
            Como entusiastas da ciência e da exploração espacial, somos constantemente inspirados pelos feitos da NASA e pela busca incessante da humanidade por conhecimento. Este projeto é nossa pequena contribuição para compartilhar essa admiração e despertar a curiosidade em outras pessoas.
          </p>
        </div>
      
        <div class="footer">
          <p>Feito com ❤️ para a competição da NASA.</p>
        </div>
      </div>
    `,
    styles: [`
      // Usando as mesmas variáveis de cor para consistência visual
      $text-color: rgb(240, 240, 240);
      $background-color: #1a1a2e;
      $title-color: #e94560;
      $border-color: #0f3460;

      :host {
        display: block;
        background-color: $background-color;
        color: $text-color;
        padding: 20px 40px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        min-height: 100vh;
      }

      .somos-container {
        max-width: 900px;
        margin: 0 auto;
        animation: fadeIn 0.5s ease-in-out;
      }

      @keyframes fadeIn {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }

      .header {
        text-align: center;
        margin-bottom: 3rem;
        border-bottom: 2px solid $border-color;
        padding-bottom: 2rem;
      }

      .header h1 {
        font-size: 2.8rem;
        color: $title-color;
        margin-bottom: 0.5rem;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      .header .subtitle {
        font-size: 1.2rem;
        color: #c0c0c0;
        font-style: italic;
      }

      .content-section { margin-bottom: 2.5rem; }
      .content-section h2 { font-size: 2rem; color: $title-color; margin-bottom: 1rem; border-left: 4px solid $title-color; padding-left: 10px; }
      .content-section p, .content-section ul { font-size: 1.1rem; line-height: 1.7; text-align: justify; }
      .content-section ul { list-style: none; padding-left: 0; }
      .content-section ul li { background-color: rgba(15, 52, 96, 0.3); padding: 15px; margin-bottom: 10px; border-radius: 8px; border-left: 4px solid $border-color; transition: background-color 0.3s, border-color 0.3s; }
      .content-section ul li:hover { background-color: rgba(15, 52, 96, 0.6); border-color: $title-color; }
      .content-section ul li strong { color: $title-color; }

      .footer { text-align: center; margin-top: 4rem; padding-top: 2rem; border-top: 2px solid $border-color; color: #a0a0a0; }
    `],
    imports: [CommonModule]
})export class AppSomos {
    // Injetando o serviço, embora não seja usado no template atual.
    // Isso é uma boa prática para o futuro.
    dadosService = inject(DadosService);
}