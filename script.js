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
                <img src= "${this.imagem}"/>
                `
    }
 }
 const produto = new Produto("Teclado Gamer Corsair", "03/05/2023","Teclado Gamer Corsair K70 Rgb MK.2 Se Cherry Mx Speed", 1900);
 const produtoDestaque = new ProdutoDestaque ("Mouse Gamer", "03/05/2023", "Logitech Mouse Gamer G502 Hero", 693, "mouse.jpg");
 
    console.log(produtoDestaque);
    const div = document.getElementById("produto-destaque");
    div.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());