import { VeiculosApiProvider } from './../../providers/veiculos-api/veiculos-api';
import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';

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

  constructor(private navParams: NavParams, private api: VeiculosApiProvider) {
    this.veiculoId = this.navParams.get("veiculoId");
    this.veiculo = new Veiculo();
  }
  
  ionViewDidEnter(){
    this.api.obterVeiculo(this.veiculoId).subscribe(veiculo => this.veiculo = veiculo);
  }
}
