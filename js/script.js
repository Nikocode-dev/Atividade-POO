// Exercício 1

class Funcionario {
  #salario

  constructor(nome, cargo, salario) {
    this.nome = nome
    this.cargo = cargo
    this.#salario = salario
  }

apresentar(){
  return `Olá, eu sou ${this.nome} e sou ${this.cargo}`
}

verSalario(){
  return this.#salario
}

calcularBonus(){
  return this.#salario * 0.30
}
aumentarSalario(valor){
  if (valor > 0){
    const novoSalario = this.#salario + valor
    this.#salario = novoSalario
  }
}
}

class Desenvolvedor extends Funcionario {
  constructor(nome, cargo, salario, linguagem) {
    super(nome, cargo, salario)

    const lDev = linguagem
    this.linguagem = lDev
  }

  calcularBonus() {
    const salarioAtual = this.verSalario()
    const bonusDev = salarioAtual * 0.30

    return bonusDev
}
}

class Designer extends Funcionario {
  constructor(nome, cargo, salario, ferramenta) {
    super(nome, cargo, salario)

    const fDesigner = ferramenta
    this.ferramenta = fDesigner
  }

  calcularBonus() {
    const salarioAtual = this.verSalario()
    const bonusDesigner = salarioAtual * 0.15
    return bonusDesigner
  }
}

const dev = new Desenvolvedor("Miguel", "Junior", 4321, "Java")

console.log(dev.apresentar())
console.log(dev.verSalario())
console.log(dev.calcularBonus())
console.log(dev.linguagem)

const des = new Designer("Niko", "Junior", 2345, "Figma")

console.log(des.apresentar())
console.log(des.verSalario())
console.log(des.calcularBonus())
console.log(des.ferramenta)

// Conclusão: Código finalizado com esforço, lágrimas, e apoio da IA para tirar dúvidas e revisar.
