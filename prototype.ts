//classe abstrata Veiculo
abstract class Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public cor: string
    ) {}
  
    clone(): any {}
    represent(): void {}
  }
  
  //classe concreta Carro
  class Carro extends Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroDeRodas: number,
      public numeroDePortas: number
    ) {
      super(modelo, marca, cor);
    }
  
    clone(): this {
      const newCarro = Object.create(this);
      return newCarro;
    }
  
    represent(): void {
      console.log(
`CARRO
--------
MODELO: ${this.modelo}
MARCA: ${this.marca}
COR: ${this.cor}
RODAS: ${this.numeroDeRodas}
PORTAS: ${this.numeroDePortas}
________

`
      );
    }
  }
  
  //classe concreta Caminhao
  class Caminhao extends Veiculo {
    constructor(
      public modelo: string,
      public marca: string,
      public cor: string,
      public numeroDeRodas: number,
      public numeroDePortas: number
    ) {
      super(modelo, marca, cor);
    }
  
    clone(): this {
      const newCaminhao = Object.create(this);
      return newCaminhao;
    }
  
    represent(): void {
      console.log(
`CAMINHAO
--------
MODELO: ${this.modelo}
MARCA: ${this.marca}
COR: ${this.cor}
RODAS: ${this.numeroDeRodas}
PORTAS: ${this.numeroDePortas}
________

`
      );
    }
  }
  
  //classe concreta Aplicacao
  class Aplicacao {
    public veiculos: Veiculo[];
  
    constructor() {
      this.veiculos = [
        new Carro("F50", "Ferrari", "Vermelha", 4, 2),
        new Carro("Esprit", "Lotus", "Amarela", 4, 2),
        new Carro("Fusca", "Volkswagen", "Preta", 4, 2),
        new Caminhao("VM", "Volvo", "Branca", 6, 2),
        new Caminhao("Constellation", "Volkswagen", "Prata", 6, 2),
        new Caminhao("620S", "Scania", "Azul", 6, 2),
      ];
    }
  
    cloneAplicacao(): Veiculo[] {
      const listaVeiculos: Veiculo[] = [];
      for (const veiculo of this.veiculos) {
        listaVeiculos.push(veiculo.clone());
      }
      return listaVeiculos;
    }
  
    representAplicacao(): void {
      const cloneVeiculos = this.cloneAplicacao();
      for (const veiculo of cloneVeiculos) {
        veiculo.represent();
      }
    }
  }
  
  //criação de objeto que recebe a classe Aplicacao, clonando e imprimindo a lista de veiculos
  const aplicacao = new Aplicacao();
  aplicacao.cloneAplicacao();
  aplicacao.representAplicacao();