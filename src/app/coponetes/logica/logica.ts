import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

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
const apiKey = 'X40aMYH63fccHQaGcdTaEsEVcFmi5oilveMk6nwq';// "DEMO_KEY";

@Injectable({
    providedIn: 'root'
})
export class DadosService {
    private http = inject(HttpClient);

    // Este método busca a foto para uma data específica.
    // Retorna um Observable que o componente pode "escutar".
    public buscarFotoPorData(data: string): Observable<DadosImagem | null> {
        const url = `${urlNasaApi}?api_key=${apiKey}&date=${data}`;
        return this.http.get<DadosImagem>(url).pipe(
            tap(dados => {}),
            catchError(error => {
                console.error(`Falha ao buscar dados para ${data}:`, error);
                // Retorna um observable com 'null' para que o componente possa tratar o erro.
                return of(null);
            })
        );
    }

    // Este método busca a foto do dia atual.
    // Ele reutiliza a lógica de buscar por data.
    public buscarFotoDoDia(): Observable<DadosImagem | null> {
        const dataFormatada = this.getHojeFormatado();
        return this.buscarFotoPorData(dataFormatada);
    }

    private getHojeFormatado(): string {
        const data = new Date();
        const dia = String(data.getDate()).padStart(2, '0');
        const mes = String(data.getMonth() + 1).padStart(2, '0'); // Janeiro é 0!
        const ano = data.getFullYear();
        return `${ano}-${mes}-${dia}`;
    }
}