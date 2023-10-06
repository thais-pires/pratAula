import { Component } from '@angular/core';
import {Produto} from '../../shared/modelo/produto';
import {PRODUTOS} from '../../shared/modelo/PRODUTOS';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-manter-produto',
  templateUrl: './manter-produto.component.html',
  styleUrls: ['./manter-produto.component.css']
})
export class ManterProdutoComponent {

  produtoDeManutencao: Produto;
  estahCadastrando = true;
  nomeBotaoManutencao = 'Cadastrar';

  produtos = PRODUTOS;
  constructor(private rotaAtual: ActivatedRoute, private roteador: Router) {
    this.produtoDeManutencao = new Produto('', 0);
    const idParaEdicao = this.rotaAtual.snapshot.paramMap.get('id');
    if (idParaEdicao) {
      // editando
      const produtoEncontrado = this.produtos.find(
        produto => produto.cod === idParaEdicao);
      if (produtoEncontrado) {
        this.estahCadastrando = false;
        this.nomeBotaoManutencao = 'Salvar';
        this.produtoDeManutencao = produtoEncontrado;
      }
    } else {
      this.nomeBotaoManutencao = 'Cadastrar';
    }
  }

  manter(): void {
    if (this.estahCadastrando && this.produtoDeManutencao) {
      this.produtos.push(this.produtoDeManutencao);
    }
    this.produtoDeManutencao = new Produto();
    this.nomeBotaoManutencao = 'Cadastrar';
    this.roteador.navigate(['listagemprodutos']);
  }

}
