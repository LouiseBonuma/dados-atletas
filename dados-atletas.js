class Atleta{
    constructor(nome, idade, peso, altura, notas ){
        this.nome = nome
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.notas = notas
    }
    obtemCategoria(){
        if(this.idade >= 9 && this.idade <= 11){
            return "Categoria: Infantil"
        }
        else if(this.idade >= 12 && this.idade <= 13){
            return "Categoria: Juvenil"
        }
        else if(this.idade >= 14 && this.idade <= 15){
            return "Categoria: Intermediário"
        }
        else if(this.idade >= 16 && this.idade <= 30){
            return "Categoria: Adulto"
        }else{
            return "Categoria: Sem categoria"
        }
    }
    obtemIMC(){
        let imc = this.peso / (this.altura * this.altura)
        return `IMC: ${imc}`
    }
    obtemMediaValida(){
        let notasComputadas = this.notas.sort((a,b) => a - b).slice(1,4)
        let total = 0
        notasComputadas.forEach(function(nota){
            total = total + nota
        })
        let media = total / notasComputadas.length
        return `Média Válida: ${media}`    
    }
    obtemNomeAtleta(){
        return `Nome: ${this.nome}`
    }
    obtemIdadeAtleta(){
        return `Idade: ${this.idade}`
    }
    obtemPesoAtleta(){
        return`Peso: ${this.peso}`
    }
    obtemAlturaAtleta(){
        return`Altura: ${this.altura}`
    }
    obtemNotasAtleta(){
        return `Notas: ${this.notas.sort((a,b) => a - b)}`
    }
}

const atleta = new Atleta("Cesar Abascal",
    30, 80, 1.70,
    [10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.obtemNomeAtleta())
console.log(atleta.obtemIdadeAtleta())
console.log(atleta.obtemPesoAtleta())
console.log(atleta.obtemAlturaAtleta())
console.log(atleta.obtemNotasAtleta())
console.log(atleta.obtemCategoria())
console.log(atleta.obtemIMC())
console.log(atleta.obtemMediaValida())
