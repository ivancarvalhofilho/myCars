import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { RestApiProvider } from "./../../providers/rest-api/rest-api";
import { Session } from "./../../providers/share/session";

/**
 * Generated class for the CriarEditarComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-criar-editar-comentario",
  templateUrl: "criar-editar-comentario.html"
})
export class CriarEditarComentarioPage {
  private idJogo: string;
  private userId: string;
  private comentarioUsuarioId: string;
  private nomeUsuario: string;
  private nota: number;
  private mensagem: string;

  set _nota(nota: number) {
    this.nota = nota;
  }

  set _mensagem(mensagem: string) {
    this.mensagem = mensagem;
  }

  constructor(
    public session: Session,
    public navCtrl: NavController,
    public navParams: NavParams,
    private api: RestApiProvider,
    private toastCtrl: ToastController
  ) {
    this.comentarioUsuarioId = this.navParams.get("comentarioUsuarioId");
    this.userId = session.getId;
    this.idJogo = this.navParams.get("idJogo");
    this.nomeUsuario = session.getUserName;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CriarEditarComentarioPage");
  }

  cadastrarComentario() {
    this.api
      .criarComentario(
        this.idJogo,
        this.userId,
        this.nomeUsuario,
        this.nota,
        this.mensagem
      )
      .subscribe(dados => {
        if (dados == null) {
          this.toastCtrl
            .create({
              duration: 3000,
              message: "Erro ao criar comentario!"
            })
            .present();
        } else {
          this.toastCtrl
            .create({
              duration: 3000,
              message: "Comentario criado com sucesso!"
            })
            .present();
          this.navCtrl.pop({});
        }
      });
  }

  editarComentario() {
    this.deletarComentario();
    this.cadastrarComentario();
    // this.api.editarComentario(this.idJogo, this.userId, this.nomeUsuario, this.nota, this.mensagem).subscribe(
    //     dados => {
    //         if (dados == null) {
    //             this.toastCtrl.create({
    //                 duration: 3000,
    //                 message: "Erro ao editar comentario!"
    //             }).present();
    //         } else {
    //             this.toastCtrl.create({
    //                 duration: 3000,
    //                 message: "Comentario editado com sucesso!"
    //             }).present();
    //             this.navCtrl.pop()
    //         }
    //     });
  }

  deletarComentario() {
    this.api.deletarComentario(this.idJogo, this.userId).subscribe(dados => {
      if (dados == null) {
        this.toastCtrl
          .create({
            duration: 3000,
            message: "Erro ao deletar comentario!"
          })
          .present();
      } else {
        this.toastCtrl
          .create({
            duration: 3000,
            message: "Com1entario deletado com sucesso!"
          })
          .present();
      }
    });
  }
}
