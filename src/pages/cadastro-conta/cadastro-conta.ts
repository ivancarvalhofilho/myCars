import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Usuario } from '../../model/usuario';
import { RestApiProvider } from './../../providers/rest-api/rest-api';
import { LoginPage } from '../login/login';

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

  constructor(public navCtrl: NavController,private toastCtrl: ToastController, public navParams: NavParams, private api: RestApiProvider) {
    this.usuario = new Usuario();
  }
  
  getUsuario(){
    return this.usuario;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroContaPage');
  }

  irParaLogin() {
    this.navCtrl.push(LoginPage);
}
  cadastrar() {
    
      if(this.usuario.senha == this.usuario.senhaConfirm){
        this.api.cadastrar(this.usuario.email, this.usuario.nome, this.usuario.senha).subscribe(
          dados => {
            if(dados["name"]=="MongoError"){
              this.toastCtrl.create({
                duration: 3000,
                message: "Usuário ou email já cadastrados!"
              }).present();
            }
            else{
              this.toastCtrl.create({
                duration: 3000,
                message: "Usuário cadastrado com sucesso!"
              }).present();
            this.irParaLogin();
            }
          })
      }
      else{
        this.toastCtrl.create({
          duration: 3000,
          message: "Senhas não são iguais!"
        }).present();
      }
  }

}
