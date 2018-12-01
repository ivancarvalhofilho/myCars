import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroContaPage } from '../cadastro-conta/cadastro-conta';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  irParaVerComentarios() {
    this.navCtrl.push(HomePage);
  }
  logar() {
      // TODOs
      // criar regex validar email
      // criar conexao server JSON
  }
  irParaCadastrarConta() {
      this.navCtrl.push(CadastroContaPage);
  }
}
