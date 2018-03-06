import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemEnderecoComponent } from './listagem-endereco.component';
import { ModalModule } from './modal/modal.module';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  imports: [
    CommonModule,
    ModalModule
  ],
  declarations: [
    ListagemEnderecoComponent,
  ],
  exports: [ ListagemEnderecoComponent ],
  entryComponents: [ModalComponent]
})
export class ListagemEnderecoModule { }
