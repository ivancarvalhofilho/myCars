import { Comentario } from "./comentario";

export class Jogo {
    private id: string;
    private nome: string;
    private descricao : string;
    private categoria: string;
    private img: string;
    private comentarios: Array<Comentario> = new Array<Comentario>();
    private _notaMedia: number;

    static copia(dados: any): Jogo {
        let jogo: Jogo = new Jogo();
        jogo.id = dados['_id'];
        jogo.descricao = dados['description'];
        jogo.categoria = dados['category'];
        jogo.nome = dados['name'];
        jogo.img = dados['img'];
        let notaTotal: number = 0;
        let qtdNotas: number = 0;
        dados['reviews'].forEach(comentario => {
            console.log(JSON.stringify(comentario))
            let comentarioAux : Comentario = Comentario.copia(comentario);
            jogo.comentarios.push(comentarioAux)
            notaTotal += comentarioAux._nota;
            qtdNotas++;
        });
        jogo.notaMedia = notaTotal/qtdNotas;
        return jogo;
    }    

    set _comentarios(comentarios: Array<Comentario>) {
        this.comentarios = comentarios;
    }

    get _comentarios() {
        return this.comentarios;
    }

    set _id(id: string) {
        this.id = id;
    }

    get _id() {
        return this.id;
    }

    set _categoria(categoria: string) {
        this.categoria = categoria;
    }

    get _categoria() {
        return this.categoria;
    }

    set _descricao(descricao: string) {
        this.descricao = descricao;
    }

    get _descricao() {
        return this.descricao;
    }

    set _nome(nome: string) {
        this.nome = nome;
    }

    get _nome() {
        return this.nome;
    }

    set _img(img: string) {
        this.img = img;
    }

    get _img() {
        return this.img;
    }
    
    get notaMedia(): number {
        return this._notaMedia;
    }
    
    set notaMedia(value: number) {
        this._notaMedia = value;
    }
}