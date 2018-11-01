import { Comentario } from "./comentario";

export class Veiculo {
    private id: number;
    private modelo: string;
    private marca: string;
    private img: string;
    private comentarios: Array<Comentario> = new Array<Comentario>();

    static copia(dados: Object): Veiculo {
        let veiculo: Veiculo = new Veiculo();
        veiculo.id = dados['id'];
        veiculo.modelo = dados['modelo'];
        veiculo.marca = dados['marca'];
        veiculo.img = dados['img'];
        dados['comentarios'].forEach(comentario => {
            veiculo.comentarios.push(Comentario.copia(comentario))
        });
        return veiculo;
    }

    static copia_sem_comentarios(dados: Object): Veiculo {
        let veiculo: Veiculo = new Veiculo();
        veiculo.id = dados['id'];
        veiculo.modelo = dados['modelo'];
        veiculo.marca = dados['marca'];
        veiculo.img = dados['img'];        
        return veiculo;
    }

    set _comentarios(comentarios: Array<Comentario>) {
        this.comentarios = comentarios;
    }

    get _comentarios() {
        return this.comentarios;
    }

    set _id(id: number) {
        this.id = id;
    }

    get _id() {
        return this.id;
    }

    set _modelo(modelo: string) {
        this.modelo = modelo;
    }

    get _modelo() {
        return this.modelo;
    }

    set _marca(marca: string) {
        this.marca = marca;
    }

    get _marca() {
        return this.marca;
    }

    set _img(img: string) {
        this.img = img;
    }

    get _img() {
        return this.img;
    }
}