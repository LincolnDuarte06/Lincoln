// divListaProduto.insertAdjacentHTML('afterbegin', '');

class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProduto(){
        return this.nome + this.dataCadastro + this.descricao + this.preco
    }

}
 class ProdutoDestaque extends Produto{
    constructor(nome, dataCadastro, descricao, preco, imagem){
        super(nome, dataCadastro, descricao, preco)
        this.imagem = imagem;
    }
    mostrarProdutoDestaque(){
        return  `<div> ${this.nome}</div>
                <div> ${this.dataCadastro}</div>
                <div> ${this.descricao}</div>
                <div> ${ this.preco}</div>
                <div> ${this.imagem}</div>
                `
    }
 }
 const produto = new Produto("Teclado Gamer Corsair", "03/05/2023","Teclado Gamer Corsair K70 Rgb MK.2 Se Cherry Mx Speed", 1900)

    console.log(produto.mostrarProduto())


 const produtoDestaque = new ProdutoDestaque ("Mouse Gamer", "03/05/2023", "Logitech Mouse Gamer G502 Hero", 693, "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSa3HwyQ8LRT1y1BuZF1S1ZgoaEAd309rSVhLgDxpNvHB1vPhnlgXFgCREZqW5s-C8Cm5v7XZVgqcld3TXDNSb2hKO444-gbXdVhnWf5MReKqwr9D5x2dJJCg&usqp=CAE")
 
    console.log(produtoDestaque())
    const div = document.getElementById("produto-destaque");
    div.insertAdjacentHTML('afterbegin', produto.mostrarProdutoDestaque());