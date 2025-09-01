import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-idiomas',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="idiomas-container">
      <div class="card">
        <h2>Seleção de Idioma</h2>
        <p class="subtitle">Escolha o idioma de sua preferência para a interface do aplicativo.</p>

        <div class="opcoes-idioma">
          <button 
            class="botao-idioma" 
            [class.ativo]="idiomaAtual === 'pt'"
            (click)="selecionarIdioma('pt')">
            <span class="bandeira">🇧🇷</span>
            <span>Português</span>
          </button>
          <button 
            class="botao-idioma" 
            [class.ativo]="idiomaAtual === 'en'"
            (click)="selecionarIdioma('en')">
            <span class="bandeira">🇺🇸</span>
            <span>English</span>
          </button>
        </div>

        <div class="info">
          <p>Atualmente, a mudança de idioma é apenas visual. A integração completa com uma biblioteca de internacionalização (i18n) como <code>ngx-translate</code> seria o próximo passo para traduzir todo o conteúdo da aplicação.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    @use 'sass:color';
    // Usando as mesmas variáveis de cor para consistência visual
    $text-color: rgb(240, 240, 240);
    $background-color: #1a1a2e;
    $title-color: #e94560;
    $border-color: #0f3460;
    $button-color: #16213e;
    $button-active-bg: #e94560;
    $button-active-text: #1a1a2e;

    :host {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $background-color;
      color: $text-color;
      padding: 40px;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      min-height: 100vh;
    }

    .idiomas-container {
      width: 100%;
      max-width: 700px;
      animation: fadeIn 0.5s ease-in-out;
    }

    .card {
      text-align: center;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 40px;
      border-radius: 12px;
      border: 1px solid $border-color;
    }

    h2 { font-size: 2.5rem; color: $title-color; margin-bottom: 1rem; }
    .subtitle { font-size: 1.1rem; line-height: 1.6; margin-bottom: 2.5rem; color: #c0c0c0; }

    .opcoes-idioma { display: flex; justify-content: center; gap: 20px; margin-bottom: 2.5rem; }

    .botao-idioma {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 15px 30px;
      font-size: 1.2rem;
      font-weight: bold;
      color: $text-color;
      background-color: $button-color;
      border: 2px solid $border-color;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s, transform 0.2s, border-color 0.3s;

      .bandeira { font-size: 1.8rem; }

      &:hover { background-color: color.adjust($button-color, $lightness: 5%); border-color: $title-color; transform: translateY(-3px); }
      &.ativo { background-color: $button-active-bg; color: $button-active-text; border-color: $button-active-bg; box-shadow: 0 4px 15px rgba($button-active-bg, 0.4); }
    }

    .info {
      margin-top: 2rem;
      font-size: 0.9rem;
      color: #a0a0a0;
      font-style: italic;
      border-top: 1px solid $border-color;
      padding-top: 1.5rem;
      
      code { background-color: rgba(255,255,255,0.1); padding: 2px 5px; border-radius: 4px; font-family: monospace; }
    }

    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `]
})
export class IdiomasComponent {
  idiomaAtual: string = 'pt'; // 'pt' para Português, 'en' para Inglês

  selecionarIdioma(idioma: string) {
    this.idiomaAtual = idioma;
    // Placeholder para a lógica de internacionalização (i18n)
    console.log(`Idioma alterado para: ${idioma}`);
    alert(`Idioma alterado para ${idioma === 'pt' ? 'Português' : 'Inglês'}. A funcionalidade completa requer uma biblioteca de i18n.`);
  }
}