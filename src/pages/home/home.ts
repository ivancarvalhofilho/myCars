import { RestApiProvider } from "./../../providers/rest-api/rest-api";
import { Session } from "./../../providers/share/session";
import { Component } from "@angular/core";
import { NavParams, NavController, ToastController } from "ionic-angular";
import { Jogo } from "../../model/jogo";
import { DetailsPage } from "../details/details";
import * as $ from "jquery";
import { DetalheJogoPage } from "../detalhe-jogo/detalhe-jogo";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  private userName: string;
  private jogos: Array<Jogo>;
  private jogosFiltrados: Array<Jogo>;
  private _carregadoFlag: boolean;
  private _codListaAberta: number;
  private _filtroTexto: string;
  
  public get filtroTexto(): string {
    return this._filtroTexto;
  }
  public set filtroTexto(value: string) {
    this._filtroTexto = value;
  }
  
  public get codListaAberta(): number {
    return this._codListaAberta;
  }
  public set codListaAberta(value: number) {
    this._codListaAberta = value;
  }
  
  public get carregadoFlag(): boolean {
    return this._carregadoFlag;
  }
  public set carregadoFlag(value: boolean) {
    this._carregadoFlag = value;
  }
  
  set _jogos(jogos: Array<Jogo>) {
    this.jogos = jogos;
  }

  get _jogos() {
    return this.jogos;
  }
  get _userName() {
    return this.userName;
  }
  set _jogosFiltrados(jogosFiltrados: Array<Jogo>) {
    this.jogosFiltrados = jogosFiltrados;
  }

  get _jogosFiltrados() {
    return this.jogosFiltrados;
  }

  constructor(
    private navParams: NavParams,
    private navCtrl: NavController,
    private api: RestApiProvider,
    private toastCtrl: ToastController,
    public session: Session
  ) {
    session.setId(this.navParams.get("idUser"));
    session.setUserName(this.navParams.get("userName"));
    this.userName = this.navParams.get("userName");
    this.jogos = new Array<Jogo>();
    this.jogosFiltrados = new Array<Jogo>();
    this.carregadoFlag = false;
    this.codListaAberta = 1;
    this.filtroTexto = "";
  }

  ionViewDidEnter() {
    this.atualizarListaJogos();
  }

  irParaDetalheJogo(id: string) {
    this.navCtrl.push(DetalheJogoPage, {
      jogoId: id
    });
  }

  irParaVerComentarios(id: string) {
    this.navCtrl.push(DetailsPage, {
      jogoId: id
    });
  }

  carregarLista(dados: any) {
    this.jogos = new Array<Jogo>();
    this.jogosFiltrados = new Array<Jogo>();

    dados.map(item => {
      this.jogos.push(Jogo.copia(item));
      this.jogosFiltrados.push(Jogo.copia(item));
    });
    this.carregadoFlag = true;
  }

  exibirErro() {
    this.toastCtrl
      .create({
        duration: 3000,
        message: "Erro ao carregar lista de jogos!"
      })
      .present();
  }

  atualizarListaJogos(refresher?) {
    this.carregadoFlag = false;
    this.api.obterJogos().subscribe(
      dados => {
        dados.forEach(element => {});
        this.carregarLista(dados);
        if (refresher) {
          refresher.complete();
          this.trocaListaJogos(this.codListaAberta);
        }
      },
      () => {
        this.exibirErro();
        if (refresher) {
          refresher.complete();
          this.trocaListaJogos(this.codListaAberta);
        }
      }
    );
  }

  atualizarTela(refresher) {
    this.atualizarListaJogos(refresher);
  }

  filterItems(ev: any) {
    let val = ev.target.value;
    this.filtroTexto = val; 
    let user = this.userName;


    if (val && val.trim() !== "") {
      this.jogosFiltrados = this.jogos.filter(function(item) {
        let possui: boolean = false;
        item._comentarios.forEach(element => {
          if (element._autor != null && element._autor.includes(user)) {
            possui = true;
            return 0;
          }
        });
        return item._nome.toLowerCase().includes(val.toLowerCase()) && possui;
      });
    } else {
      this.jogosFiltrados = this.jogos;
      this.trocaListaJogos(this.codListaAberta);
    }
  }

  trocaListaJogos(codLista) {
    this.codListaAberta = codLista;
    let user = this.userName;
    if (codLista == 1) {
      $(".botoesRodape > div:first").removeClass("botoesRodape-inativo");
      $(".botoesRodape > div:last").addClass("botoesRodape-inativo");
      this.jogosFiltrados = this.jogos;
    } else if (codLista == 2) {
      $(".botoesRodape > div:first").addClass("botoesRodape-inativo");
      $(".botoesRodape > div:last").removeClass("botoesRodape-inativo");
      this.jogosFiltrados = this.jogos.filter(function(item) {
        let possui: boolean = false;
        item._comentarios.forEach(element => {
          if (element._autor != null && element._autor.includes(user)) {
            possui = true;
            return 0;
          }
        });
        return possui;
      });
    }
  }

  possuiAvaliacoes(num) {
    return isNaN(num);
  }
}
