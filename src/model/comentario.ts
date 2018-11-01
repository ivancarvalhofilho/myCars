export class Comentario {
    private id: number;
    private autor: string;
    private comentario: string;
    private data: Date;

    constructor() {
        this.autor = "";
        this.comentario = "";
    }

    static copia(dados: Object): Comentario {
        let comment: Comentario = new Comentario();
        comment.id = dados['id'];
        comment.autor = dados['autor'];
        comment.comentario = dados['comentario'];
        comment.data = new Date(dados['data']);
        return comment;
    }

    set _id(id: number) {
        this.id = id;
    }

    get _id() {
        return this.id;
    }

    set _autor(autor: string) {
        this.autor = autor;
    }

    get _autor() {
        return this.autor;
    }

    set _comentario(comentario: string) {
        this.comentario = comentario;
    }

    get _comentario() {
        return this.comentario;
    }

    set _data(data: Date) {
        this.data = data;
    }

    get _data() {
        return this.data;
    }
}