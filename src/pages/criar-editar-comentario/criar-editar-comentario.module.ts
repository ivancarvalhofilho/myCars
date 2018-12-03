import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CriarEditarComentarioPage } from './criar-editar-comentario';

@NgModule({
  declarations: [
    CriarEditarComentarioPage,
  ],
  imports: [
    IonicPageModule.forChild(CriarEditarComentarioPage),
  ],
})
export class CriarEditarComentarioPageModule {}
