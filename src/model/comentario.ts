export class Comentario {
    private id: string;
    private idAutor: string;
    private autor: string;
    private nota: number;
    private comentario: string;
    private data: Date;

    constructor() {
        this.autor = "";
        this.comentario = "";
    }

    static copia(dados: any): Comentario {
        let comment: Comentario = new Comentario();
        comment.id = dados['_id'];
        comment.idAutor = dados['idUser'];
        comment.autor = dados['userName'];
        comment.nota = dados['rating'];
        comment.comentario = dados['message'];
        comment.data = new Date(dados['Created_date']);
        return comment;
    }

    set _id(id: string) {
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

    set _idAutor(autor: string) {
        this.idAutor = autor;
    }

    get _idAutor() {
        return this.idAutor;
    }

    set _nota(nota: number) {
        this.nota = nota;
    }

    get _nota() {
        return this.nota;
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