import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheJogoPage } from './detalhe-jogo';

@NgModule({
  declarations: [
    DetalheJogoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheJogoPage),
  ],
})
export class DetalheJogoPageModule {}
