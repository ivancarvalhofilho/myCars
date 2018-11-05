import { Component } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  private veiculoId: number;
  private veiculo: Veiculo;

  
  set _veiculo(veiculo: Veiculo) {
    this.veiculo = veiculo;
  }

  get _veiculo() {
    return this.veiculo;
  }

  set _veiculoId(veiculoId: number) {
    this.veiculoId = veiculoId;
  }

  get _veiculoId() {
    return this.veiculoId;
  }

  constructor(private navParams: NavParams, private api: RestApiProvider, private toastCtrl: ToastController) {
    this.veiculoId = this.navParams.get("veiculoId");
    this.veiculo = new Veiculo();
  }
  
  ionViewDidEnter(){
    this.api.obterVeiculo(this.veiculoId).subscribe(
      item => this.veiculo = Veiculo.copia(item),
      () => this.exibirErro()
    );
  }

  exibirErro() {
    this.toastCtrl.create({
      duration: 3000,
      message: "Erro ao carregar dados do veículo!"
    }).present();
  }
}
