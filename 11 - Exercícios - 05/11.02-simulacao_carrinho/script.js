class Carrinho {
  constructor(itens, quantidade, valorTotal) {
    this.itens = itens;
    this.quantidade = quantidade;
    this.valorTotal = valorTotal;
  }
  addItem(item) {
    let contador = 0;

    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        this.itens[itemCarrinho].quantidade += item.quantidade;
        contador = 1;
      }
    }

    if (contador == 0) {
      this.itens.push(item);
    }

    this.quantidade += item.quantidade;
    this.valorTotal += item.preco * item.quantidade;
  }

  removeItem(item) {
    for (let itemCarrinho in this.itens) {
      if (this.itens[itemCarrinho].id == item.id) {
        let obj = this.itens[itemCarrinho];
        let index = this.itens.findIndex(function (obj) {
          return obj.id == item.id;
        });

        this.quantidade -= this.itens[itemCarrinho].quantidade;
        this.valorTotal -=
          this.itens[itemCarrinho].preco * this.itens[itemCarrinho].quantidade;

        this.itens.splice(index, 1);
      }
    }
  }
}

let carrinho = new Carrinho(
  [
    { id: 01, nome: "Camisa", quantidade: 1, preco: 20.59 },
    { id: 02, nome: "Calça", quantidade: 2, preco: 65.99 },
  ],
  3,
  120
);

console.log(carrinho);

carrinho.addItem({ id: 01, nome: "Camisa", quantidade: 3, preco: 69.99 });

console.log(carrinho);

carrinho.addItem({ id: 03, nome: "Boné", quantidade: 3, preco: 15.79 });

console.log(carrinho);

carrinho.removeItem({ id: 01, nome: "Camisa", quantidade: 2, preco: 20 });

console.log(carrinho);
