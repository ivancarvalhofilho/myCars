import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';
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

    private jogoId: number;
    private veiculo: Veiculo;

    constructor(public navCtrl: NavController, private api: RestApiProvider, public navParams: NavParams) {
        this.jogoId = this.navParams.get("jogoId");
        this.veiculo = new Veiculo();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad DetalheJogoPage');
    }

    ionViewDidEnter() {
        this.api.obterVeiculo(this.jogoId).subscribe(
            item => this.veiculo = Veiculo.copia(item)
        );
    }
    
    irParaVerComentarios(id: number) {
        this.navCtrl.push(DetailsPage, {
            veiculoId: id
        });
    }

    set _veiculo(veiculo: Veiculo) {
        this.veiculo = veiculo;
    }

    get _veiculo() {
        return this.veiculo;
    }
}
