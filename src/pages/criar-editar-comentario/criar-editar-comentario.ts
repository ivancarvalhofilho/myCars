import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CriarEditarComentarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-criar-editar-comentario',
  templateUrl: 'criar-editar-comentario.html',
})
export class CriarEditarComentarioPage {
    private comentarioUsuarioId: string;
    private nota: number;
    private mensagem :string;
  
    set _nota(nota: number){
    this.nota = nota;
    }

    set _mensagem(mensagem :string){
      this.mensagem = mensagem;
    }

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.comentarioUsuarioId = this.navParams.get("comentarioUsuarioId");
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarEditarComentarioPage');
  }

    cadastrarComentario() {
      
        // Se OK, fecha a tela
        this.navCtrl.pop()
    }
}
