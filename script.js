class identidade {
    constructor(nome, idade, cpf) {

        this._nome = nome
        this._idade = idade
        this._cpf = cpf
    }
    get idadeAtualizada() {
        return this._idade
    }
    set idadeAtualizada(idadeAtualizada) {
        if ((idadeAtualizada > 0) && (idadeAtualizada < 120)) {
            return this._idade = idadeAtualizada
        }
    }
    get cpfAtualizado() {
        return this._cpf
    }
    set cpfAtualizado(cpfAtualizado) {
        if (cpfAtualizado.length == 11) {
            return this._cpf = cpfAtualizado
        }
    }
}

const objeto = new identidade('', 27, '05564969499') // Instanciando um objeto.
objeto.idadeAtualizada = 200 //Dado incompatível com a condição, fazendo com que a idade continue 27
console.log(objeto._idade)
objeto.cpfAtualizado = '15564969' //Dado incompatível com a condição, fazendo com que o CPF continue '05564969499'
console.log(objeto._cpf)
objeto._nome = 'André'
console.log(objeto._nome)