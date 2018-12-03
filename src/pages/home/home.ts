import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { Component } from '@angular/core';
import { NavParams, NavController, ToastController } from 'ionic-angular';
import { Jogo } from '../../model/jogo';
import { DetailsPage } from '../details/details';
import { CommentPage } from '../comment/comment';
import * as $ from "jquery";
import { DetalheJogoPage } from '../detalhe-jogo/detalhe-jogo';
import { Comentario } from '../../model/comentario';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private idUser : string;
  private userName : string;
  private jogos: Array<Jogo>;
  private jogosFiltrados: Array<Jogo>;

  set _jogos(jogos: Array<Jogo>) {
    this.jogos = jogos;
  }

  get _jogos() {
    return this.jogos;
  }
  get _userName(){
    return this.userName;
  }
  set _jogosFiltrados(jogosFiltrados: Array<Jogo>) {
      this.jogosFiltrados = jogosFiltrados;
  }

    get _jogosFiltrados() {
        return this.jogosFiltrados;
  }

    constructor(private navParams: NavParams, private navCtrl: NavController, private api: RestApiProvider, private toastCtrl: ToastController) {
        this.idUser = this.navParams.get("idUser");
        this.userName = this.navParams.get("userName");
        this.jogos = new Array<Jogo>();
        this.jogosFiltrados = new Array<Jogo>();
    }

  ionViewDidEnter() {
    this.atualizarListaJogos();
  }

    irParaDetalheJogo(id: string) {
        this.navCtrl.push(DetalheJogoPage, {
            jogoId: id,
            userId: this.idUser,
            nomeUsuario: this.userName
        });
    }
    
    irParaVerComentarios(id: string) {
        this.navCtrl.push(DetailsPage, {
           jogoId: id
        });
    }

    // irParaAdicionarComentario(id: string) {
    //     this.navCtrl.push(CommentPage, {
    //        jogoId: id
    //     });
    // }

    carregarLista(dados: any) {
        this.jogos = new Array<Jogo>();
        this.jogosFiltrados = new Array<Jogo>();

        dados.map(
            item => {
                this.jogos.push(Jogo.copia(item))
                this.jogosFiltrados.push(Jogo.copia(item))
                // this.jogos.forEach(jogo => {
                //     let notaTotal: number = 0;
                //     let qtdNotas: number = 0;
                //     jogo._comentarios.forEach(comentario => {
                //         qtdNotas++;
                //         notaTotal += comentario._nota;
                //     });
                //     jogo.notaMedia = notaTotal / qtdNotas;
                // })
            }
        );
        

        // dados.map(
        //     item => this.jogosFiltrados.push(Jogo.copia(item)),
        //     null,
        //     () => this.jogosFiltrados.forEach(jogo => {
        //         let notaTotal : number = 0;
        //         let qtdNotas : number = 0;
        //         jogo._comentarios.forEach(comentario => {
        //             qtdNotas++;
        //             notaTotal += comentario._nota;
        //         });
        //         jogo.notaMedia = notaTotal / qtdNotas;
        //     })
        // );
    }

  exibirErro() {
    this.toastCtrl.create({
      duration: 3000,
      message: "Erro ao carregar lista de jogos!"
    }).present();
  }

  atualizarListaJogos(refresher?) {
    this.api.obterJogos().subscribe(
      dados => {
        dados.forEach(element => {
        });
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
    this.atualizarListaJogos(refresher);
  }

    filterItems(ev: any) {
        let val = ev.target.value;

        if (val && val.trim() !== '') {
            this.jogosFiltrados = this.jogos.filter(function (item) {
                return (item._nome).toLowerCase().includes(val.toLowerCase());
            });
        } else {
            this.jogosFiltrados = this.jogos;
        }
    }

    trocaListaJogos(codLista){
        let user = this.userName;
        if(codLista == 1){
            $(".botoesRodape > div:first").removeClass("botoesRodape-inativo");
            $(".botoesRodape > div:last").addClass("botoesRodape-inativo");
            this.jogosFiltrados = this.jogos;
        } else if (codLista == 2) {
            $(".botoesRodape > div:first").addClass("botoesRodape-inativo");
            $(".botoesRodape > div:last").removeClass("botoesRodape-inativo");
            this.jogosFiltrados = this.jogos.filter(function (item) {
                let possui: boolean = false;
                item._comentarios.forEach(element => {
                    if(element._autor.includes(user)){
                        possui = true;
                        return 0;
                    }
                });
                return possui;
            });
        }
    }
 
    possuiAvaliacoes(num){
        return isNaN(num);
    }
}
