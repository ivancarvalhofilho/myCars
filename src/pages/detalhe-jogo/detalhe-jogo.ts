import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Jogo } from '../../model/jogo'; 
import { RestApiProvider } from '../../providers/rest-api/rest-api';
import { DetailsPage } from '../details/details';

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
    private jogo: Jogo;

    constructor(public navCtrl: NavController, private api: RestApiProvider, public navParams: NavParams) {
        this.jogoId = this.navParams.get("jogoId");
        this.jogo = new Jogo();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetalheJogoPage');
    }

    ionViewDidEnter() {
        this.api.obterJogo(this.jogoId).subscribe(
            item => this.jogo = Jogo.copia(item)
        );
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
}
