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
  private email:string;
  private senha :string;
  constructor(public navCtrl: NavController,private api: RestApiProvider, public navParams: NavParams,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  irParaVerJogos(id: string, name: string) {
    this.navCtrl.push(HomePage, {idUser: id, userName: name});
  }
  logar() {
      this.api.logar(this.email ,this.senha).subscribe(
        dados => {
          console.log(JSON.stringify(dados))
          if(dados == null){
            this.toastCtrl.create({
              duration: 3000,
              message: "Email ou senha incorretos!"
            }).present();
          }
          else{
          this.irParaVerJogos(dados["_id"],dados["name"]);
          }
          });
        }
  
  irParaCadastrarConta() {
      this.navCtrl.push(CadastroContaPage);
  }

  set _email(email:string){
    this.email = email;
  }

  set _senha(senha:string){
    this.senha = senha;
  }
}
