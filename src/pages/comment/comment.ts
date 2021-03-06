import { Comentario } from './../../model/comentario';
import { Component } from '@angular/core';
import { NavParams, ToastController } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';
import { RestApiProvider } from '../../providers/rest-api/rest-api';

@Component({
  selector: 'page-comment',
  templateUrl: 'comment.html',
})
export class CommentPage {

  private veiculoId: number;
  private veiculo: Veiculo;
  private comentario: Comentario;

  set _comentario(comentario: Comentario) {
    this.comentario = comentario;
  }

  get _comentario() {
    return this.comentario;
  }

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
    this.comentario = new Comentario();
  }

  ionViewDidEnter() {
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

  salvar() {
    if (this.comentario._comentario.trim() == "") {
      this.toastCtrl.create({
        duration: 3000,
        message: "Ops... seu comentário não pode estar vazio!"
      }).present();
    } else {
      this.comentario._data = new Date();
      this.veiculo._comentarios.push(this.comentario);
      this.api.atualizarVeiculo(this.veiculo._id, this.veiculo).subscribe(() => {
        this.comentario = new Comentario();
        this.toastCtrl.create({
          duration: 3000,
          message: "Comentário adicionado com sucesso!"
        }).present();
      });
    }
  }

}
