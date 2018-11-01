import { VeiculosApiProvider } from './../../providers/veiculos-api/veiculos-api';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';
import { DetailsPage } from '../details/details';
import { CommentPage } from '../comment/comment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private veiculos: Veiculo[];

  set _veiculos(veiculos: Veiculo[]) {
    this.veiculos = veiculos;
  }

  get _veiculos() {
    return this.veiculos;
  }

  constructor(private navCtrl: NavController, private api: VeiculosApiProvider) {
    this._veiculos = null;
  }

  ionViewDidEnter() {
    this.api.obterVeiculos().subscribe(veiculos => this._veiculos = veiculos);
  }

  irParaVerComentarios(id: number) {
    this.navCtrl.push(DetailsPage, {
      veiculoId: id
    });
  }

  irParaAdicionarComentario(id: number) {
    this.navCtrl.push(CommentPage, {
      veiculoId: id
    });
  }
}
