const prompt = require("prompt-sync")();
let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
let numero2 = parseFloat(prompt('Digite o segundo numero: '));

if (isNaN(numero1) | isNaN(numero2)) {        //verifica se o número 1 OU o número 2 não são númericos.
    console.log('Digite um número valido')
}
else { //Caso os dois valores sejam realmente númericos, fornece as opções:
    let opcao = prompt('Digite a opção desejada : 1 para somar, 2 para subtrair, 3 para dividir, 4 para multiplicar. ');
    let result;

    if (opcao == 1) { //Condição para somar
        result = numero1 + numero2;
        console.log(`O resultado da operção Soma, entre os números ${numero1} + ${numero2} = ${result}`)
    }
    else if (opcao == 2) { //Condição para subtrair
        result = numero1 - numero2;
        console.log(`O resultado da operção Subtração, entre os números ${numero1} - ${numero2} = ${result}`)
    }
    else if (opcao == 3) { //Condição para dividir
        if (numero2 == 0) { //Verificar se o segundo número inserido e = 0, pois não há número divisível por 0. E exibe a mensagem na tela.
            console.log(`O número ${numero1} não e divisivel por ${numero2}`)
        }
        else { //Condição caso o número inserido não seja = 0.
            result = numero1 / numero2;
            console.log(`O resultado da operção Divisão, entre os números ${numero1} / ${numero2} = ${result}`)
        }
        
    }
    else if (opcao == 4) { //Condição para multiplicar
        result = numero1 * numero2;
        console.log(`O resultado da operção Multiplicação, entre os números ${numero1} x ${numero2} = ${result}`)
    }
    else { //verifica se a opção digitada existe, caso não exista, irá retornar a mensagem.                                             
        console.log(`O numero ${opcao} não é uma opção`)
    }
}
