import { Component, inject } from "@angular/core";
import { DadosService, DadosImagem } from '../logica/logica';
import { Observable, Subject, of } from "rxjs";
import { switchMap, catchError, startWith } from 'rxjs/operators';
import { NgIf, AsyncPipe, NgOptimizedImage } from "@angular/common";

@Component({
    selector: 'data',
    templateUrl: './app.data.html',
    standalone: true,
    styleUrl: './app.data.scss',
    imports: [NgIf, AsyncPipe, NgOptimizedImage]
})
export class Data {
    private dadosService = inject(DadosService);

    // Subject para receber a data selecionada pelo usuário
    private dataSelecionadaSubject = new Subject<string>();

    // Observable para os dados da imagem, que reage a novas datas
    public imagemPorData$: Observable<{
        carregando: boolean;
        dados: DadosImagem | null;
        erro: boolean;
    }>;

    public hoje: string;
    public minDate: string = '2016-01-01'; // Como solicitado, a partir de 2016

    constructor() {
        this.hoje = new Date().toISOString().split('T')[0];

        this.imagemPorData$ = this.dataSelecionadaSubject.pipe(
            switchMap(data => 
                this.dadosService.buscarFotoPorData(data).pipe(
                    switchMap(dados => of({ carregando: false, dados: dados, erro: !dados })),
                    catchError(() => of({ carregando: false, dados: null, erro: true })),
                    startWith({ carregando: true, dados: null, erro: false })
                )
            ),
            // Estado inicial, antes de qualquer busca
            startWith({ carregando: false, dados: null, erro: false })
        );
    }

    /**
     * Chamado quando o usuário clica no botão de busca.
     * @param data A data no formato YYYY-MM-DD
     */
    public buscarFoto(data: string): void {
        if (data) {
            this.dataSelecionadaSubject.next(data);
        }
    }
}