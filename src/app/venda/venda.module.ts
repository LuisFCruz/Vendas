import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VendaComponent } from './venda.component';
import { PessoaModule } from '../pessoa/pessoa.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListagemEnderecoModule } from '../listagem-endereco/listagem-endereco.module';

@NgModule({
  imports: [
    CommonModule,
    PessoaModule,
    NgbModule.forRoot(),
    ListagemEnderecoModule
  ],
  declarations: [ VendaComponent ],
  exports: [ VendaComponent ]
})
export class VendaModule { }
