import { Component } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { Jogo } from '../../model/jogo';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  private jogoId: string;
  private jogo: Jogo;

  
  set _jogo(jogo: Jogo) {
    this.jogo = jogo;
  }

  get _jogo() {
    return this.jogo;
  }

  set _jogoId(jogoId: string) {
    this.jogoId = jogoId;
  }

  get _jogoId() {
    return this.jogoId;
  }

  constructor(private navParams: NavParams, private api: RestApiProvider, private toastCtrl: ToastController) {
    this.jogoId = this.navParams.get("jogoId");
    this.jogo = new Jogo();
  }
  
  ionViewDidEnter(){
    this.api.obterJogo(this.jogoId).subscribe(
      item => this.jogo = Jogo.copia(item),
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
