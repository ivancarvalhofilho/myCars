import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jogo } from '../../model/jogo'; 
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { DetailsPage } from '../details/details';
import { CriarEditarComentarioPage } from '../criar-editar-comentario/criar-editar-comentario';

/**
 * Generated class for the DetalheJogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-jogo',
  templateUrl: 'detalhe-jogo.html',
})
export class DetalheJogoPage {

    private jogoId: string;
    private nomeUsuario: string;
    private comentarioUsuarioId: string = null;
    private jogo: Jogo;
    private _possuiComentario: boolean = false;

    constructor(public navCtrl: NavController, private api: RestApiProvider, public navParams: NavParams) {
        this.jogoId = this.navParams.get("jogoId");
        this.nomeUsuario = this.navParams.get("nomeUsuario");
        this.jogo = new Jogo();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetalheJogoPage');
    }

    ionViewDidEnter() {
        this.api.obterJogo(this.jogoId).subscribe(
            item => this.jogo = Jogo.copia(item),
            null,
            () => this.jogo._comentarios.forEach(element => {
                if (element._autor == this.nomeUsuario){
                    this.comentarioUsuarioId = element._id; 
                    this.possuiComentario = true; 
                    return 0;
                }
            })
        );
    }

    irParaCriarComentario () {
        this.navCtrl.push(CriarEditarComentarioPage,{
            comentarioUsuarioId: this.comentarioUsuarioId
        });
    }
    
    irParaVerComentarios(id: string) {
        this.navCtrl.push(DetailsPage, {
            jogoId: id 
        });
    }

    set _jogo(jogo: Jogo) {
        this.jogo = jogo;
    }

    get _jogo() {
        return this.jogo;
    }

    get possuiComentario(): boolean {
        return this._possuiComentario;
    }
    set possuiComentario(value: boolean) {
        this._possuiComentario = value;
    }
}
