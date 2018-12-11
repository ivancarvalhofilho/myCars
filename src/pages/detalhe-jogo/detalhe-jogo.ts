import {
  Component
} from '@angular/core';
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {
  Jogo
} from '../../model/jogo';
import {
  RestApiProvider
} from '../../providers/rest-api/rest-api';
import {
  Session
} from '../../providers/share/session';
import {
  DetailsPage
} from '../details/details';
import {
  CriarEditarComentarioPage
} from '../criar-editar-comentario/criar-editar-comentario';

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


  private jogoId: string;
  private nomeUsuario: string;
  private userId: string;
  private comentarioUsuarioId: string = null;
  private jogo: Jogo;
  private _possuiComentario: boolean = false;

  constructor(public session: Session, public navCtrl: NavController, private api: RestApiProvider, public navParams: NavParams, private toastCtrl: ToastController) {
    this.jogoId = this.navParams.get("jogoId");
    this.userId = session.getId;
    this.nomeUsuario = session.getUserName;
    this.jogo = new Jogo();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheJogoPage');
  }

  ionViewDidEnter() {
    this.api.obterJogo(this.jogoId).subscribe(
      item => this.jogo = Jogo.copia(item),
      null,
      () => this.jogo._comentarios.forEach(element => {
        if (element._autor == this.nomeUsuario) {
          this.comentarioUsuarioId = element._id;
          this.possuiComentario = true;
          return 0;
        }
      })
    );
  }

  irParaCriarComentario() {
    this.navCtrl.push(CriarEditarComentarioPage, {
      userId: this.userId,
      comentarioUsuarioId: this.comentarioUsuarioId,
      idJogo: this.jogoId,
      nomeUsuario: this.nomeUsuario
    });
  }

  irParaVerComentarios(id: string) {
    this.navCtrl.push(DetailsPage, {
      jogoId: id
    });
  }

  set _jogo(jogo: Jogo) {
    this.jogo = jogo;
  }

  get _jogo() {
    return this.jogo;
  }

  get possuiComentario(): boolean {
    return this._possuiComentario;
  }
  set possuiComentario(value: boolean) {
    this._possuiComentario = value;
  }

  deletarComentario() {
    this.api.deletarComentario(this.jogoId, this.userId).subscribe(
      dados => {
        if (dados == null) {
          this.toastCtrl.create({
            duration: 3000,
            message: "Erro ao deletar comentario!"
          }).present();
        } else {
          this.toastCtrl.create({
            duration: 3000,
            message: "Comentario deletado com sucesso!"
          }).present();
          this.navCtrl.pop()
        }
      });
  }
}
