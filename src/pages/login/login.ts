import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { CadastroContaPage } from '../cadastro-conta/cadastro-conta';
import { RestApiProvider } from './../../providers/rest-api/rest-api';


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
  constructor(public navCtrl: NavController,private api: RestApiProvider, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  irParaVerComentarios(id: string, name: string) {
    this.navCtrl.push(HomePage, {idUser: id, userName: name});
  }
  logar(email, senha) {
      this.api.logar(email,senha).subscribe(
        dados => {
          console.log(JSON.stringify(dados))
          if(dados == null){
            this.toastCtrl.create({
              duration: 3000,
              message: "Erro ao carregar lista de jogos!"
            }).present();
          }
          this.irParaVerComentarios(dados["_id"],dados["name"]);
          });
        }
  
  irParaCadastrarConta() {
      this.navCtrl.push(CadastroContaPage);
  }
}
