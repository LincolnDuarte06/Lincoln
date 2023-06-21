// divListaProduto.insertAdjacentHTML('afterbegin', '');

class MeuErro extends Error {
    constructor(message){
      super(message);
      this.name = "Meu Erro";
    }
  }

class Produto {
    constructor(nome, dataCadastro, descricao, preco){
        this.nome = nome;
        this.dataCadastro = dataCadastro;
        this.descricao = descricao;
        this.preco = preco;
    }
    mostrarProduto() {
        try {
          return this.atributos();
        }
        catch(erro) {
          console.log(erro);
        }
        return this.nome +" "+ this.dataCadastro+" "+ this.descricao+" "+ this.preco;
    }
    atributos() {
    if(this.nome != "" && this.dataCadastro != "" && this.descricao != "" && this.preco != "") {
      return {
        nome: this.nome,
        dataCadastro: this.dataCadastro,
        descricao: this.descricao,
        preco: this.preco        
      };
    }
    else
      throw new MeuErro("Erro, campo vazio.");
    
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
 
 const produto1 = new Produto("Mouse Gamer", "03/05/2023","Mouse Gamer Coirsar Branco", 190)
    console.log(produtoDestaque);
    const div = document.getElementById("produto-destaque");
    div.insertAdjacentHTML('afterbegin', produtoDestaque.mostrarProdutoDestaque());
    let listaProdutos = document.getElementById("lista-produtos");
    listaProdutos.innerHTML = 
    `<div> ${produto.nome}</div>
    <div> ${produto.dataCadastro}</div>
    <div> ${produto.descricao}</div>
    <div> ${ produto.preco}</div>
    <br>
    <div> ${produto1.nome}</div>
    <div> ${produto1.dataCadastro}</div>
    <div> ${produto1.descricao}</div>
    <div> ${ produto1.preco}</div>
    `

    