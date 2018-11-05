import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';
import { DetailsPage } from '../details/details';
import { CommentPage } from '../comment/comment';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private veiculos: Array<Veiculo>;

  set _veiculos(veiculos: Array<Veiculo>) {
    this.veiculos = veiculos;
  }

  get _veiculos() {
    return this.veiculos;
  }

  constructor(private navCtrl: NavController, private api: RestApiProvider, private toastCtrl: ToastController) {
    this.veiculos = new Array<Veiculo>();
  }

  ionViewDidEnter() {
    this.atualizarListaVeiculos();
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

  carregarLista(dados: any) {
    dados.map(
      item => this.veiculos.push(Veiculo.copia(item))
    );
  }

  exibirErro() {
    this.toastCtrl.create({
      duration: 3000,
      message: "Erro ao carregar lista de veículos!"
    }).present();
  }

  atualizarListaVeiculos(refresher?) {
    this.api.obterVeiculos().subscribe(
      dados => {
        this.carregarLista(dados);
        if (refresher) {
          refresher.complete();
        }
      },
      () => {
        this.exibirErro();
        if (refresher) {
          refresher.complete();
        }
      }
    );
  }

  atualizarTela(refresher) {
    this.atualizarListaVeiculos(refresher);
  }
}
