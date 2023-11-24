function calculaImc(altura, peso) {
    resultado = peso / (altura * altura);
    return console.log(`Seu IMC é de ${resultado}`);
}

calculaImc(1.80, 91);

function calculaFatorial(numero) {
    let fatorial = 1
    for (i = 2; i <= numero; i++) {
        fatorial = fatorial * i;
    }
    return console.log(`Fatorial de ${numero} é ${fatorial}`);
}

calculaFatorial(5);

let listaGenerica = [];

let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

linguagensDeProgramacao.push('java', 'Ruby', 'GoLang'); 