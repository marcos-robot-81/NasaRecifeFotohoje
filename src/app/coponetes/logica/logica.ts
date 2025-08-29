import { Injectable } from "@angular/core";

export interface DadosImagem { // Interface exportada e nome em PascalCase (convenção)
    date: string;
    explanation: string;
    hdurl: string;
    media_type: string;
    service_version: string;
    title: string;
    url: string;
}

const urlNasaApi = "https://api.nasa.gov/planetary/apod";
const apiKey =  "DEMO_KEY";

@Injectable({
    providedIn: 'root'
})
export class DadosService { // Nome de classe e serviço seguindo convenções
    // Variaveis
    public imagemDoDia: DadosImagem | null = null;
    public texto: string = ''; // Inicializado

    constructor() {
        this.buscarFotoDoDia();
    }

    // Métodos
    public async buscarFotoDoDia() {
        const url = this.construirUrl();
        await this.chamarNasa(url);
    }

    private construirUrl(): string {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const ano = data.getFullYear();
        const dataFormatada = `${ano}-${mes}-${dia}`;
        
        return `${urlNasaApi}?api_key=${apiKey}&date=${dataFormatada}`;
    }

    private async chamarNasa(url: string) {
        try {
            const resposta = await fetch(url);
            if (!resposta.ok) {
                throw new Error('Erro na requisição');
            }
            const dados: DadosImagem = await resposta.json();
            this.imagemDoDia = dados;
            this.texto = dados.explanation; // Exemplo de como usar outros dados
        } catch (error) {
            console.error("Falha ao buscar dados da NASA:", error);
        }
    }

    private teste(){
    }
}