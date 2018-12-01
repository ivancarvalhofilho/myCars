import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuario } from '../../model/usuario';

/**
 * Generated class for the CadastroContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-conta',
  templateUrl: 'cadastro-conta.html',
})
export class CadastroContaPage {
  private usuario: Usuario;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario = new Usuario();
  }
  
  getUsuario(){
    return this.usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroContaPage');
  }

  cadastrar() {
    console.log(
      this.usuario.email + ' ' +
      this.usuario.senha + ' ' +
      this.usuario.senhaConfirm
      );
    // TODOs
      // Aplicar regex pra validar email
      // Validar senha
      // Criar conexao com servidor JSON 
  }

}
