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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CriarEditarComentarioPage');
  }

    cadastrarComentario() {

        // Se OK, fecha a tela
        this.navCtrl.pop()
    }
}
