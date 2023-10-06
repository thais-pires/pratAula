import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';
import {PRODUTOS} from '../../shared/modelo/PRODUTOS';

@Component({
  selector: 'app-listagem-produto',
  templateUrl: './listagem-produto.component.html',
  styleUrls: ['./listagem-produto.component.css']
})
export class ListagemProdutoComponent {

  produtos = PRODUTOS;
  excluir(produtoARemover: Produto): void {
    const indx = this.produtos.findIndex(produto =>
      produto.cod === produto.cod);

    this.produtos.splice(indx, 1);
  }

}
