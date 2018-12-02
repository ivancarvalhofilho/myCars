import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Veiculo } from '../../model/veiculo';
import { DetailsPage } from '../details/details';
import { CommentPage } from '../comment/comment';
import * as $ from "jquery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private veiculos: Array<Veiculo>;
  private veiculosFiltrados: Array<Veiculo>;

  set _veiculos(veiculos: Array<Veiculo>) {
    this.veiculos = veiculos;
  }

  get _veiculos() {
    return this.veiculos;
  }

  set _veiculosFiltrados(veiculosFiltrados: Array<Veiculo>) {
      this.veiculosFiltrados = veiculosFiltrados;
  }

    get _veiculosFiltrados() {
        return this.veiculosFiltrados;
  }

  constructor(private navCtrl: NavController, private api: RestApiProvider, private toastCtrl: ToastController) {
    this.veiculos = new Array<Veiculo>();
      this.veiculosFiltrados = new Array<Veiculo>();
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
    dados.map(
      item => this.veiculosFiltrados.push(Veiculo.copia(item))
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

    filterItems(ev: any) {
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.veiculosFiltrados = this.veiculos.filter(function (item) {
                return (item._modelo + item._marca).toLowerCase().includes(val.toLowerCase());
            });
        } else {
            this.veiculosFiltrados = this.veiculos;
        }
    }

    trocaListaJogos(html, codLista){
        if(codLista == 1){
            $(".botoesRodape > div:first").removeClass("botoesRodape-inativo");
            $(".botoesRodape > div:last").addClass("botoesRodape-inativo");
            this.veiculosFiltrados = this.veiculos;
        } else if (codLista == 2) {
            $(".botoesRodape > div:first").addClass("botoesRodape-inativo");
            $(".botoesRodape > div:last").removeClass("botoesRodape-inativo");
            this.veiculosFiltrados = this.veiculos.filter(function (item) {
                let possui: boolean = false;
                item._comentarios.forEach(element => {
                    if(element._autor.includes("Paulo")){
                        possui = true;
                        return 0;
                    }
                });
                return possui;
            });
        }
    }
}
