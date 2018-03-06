import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { VendaComponent } from './venda/venda.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ListagemEnderecoComponent } from './listagem-endereco/listagem-endereco.component';
import { ListagemEnderecoModule } from './listagem-endereco/listagem-endereco.module';
import { EnderecoModule } from './endereco/endereco.module';


@NgModule({
  declarations: [
    AppComponent,
    VendaComponent,
    PessoaComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    ListagemEnderecoModule,
    EnderecoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
