function calcularIMC() {
    // Pegar os valores dos inputs
    var peso = document.getElementById('peso').value;
    var altura = document.getElementById('altura').value;
    
    // Verificar se os campos estão preenchidos
    if (peso === '' || altura === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }
    
    // Converter para números
    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (peso <= 0 || altura <= 0) {
        alert('Por favor, insira valores válidos!');
        return;
    }
    
    // Calcular o IMC
    var imc = peso / (altura * altura);
    
    // Arredondar para 2 casas decimais
    imc = imc.toFixed(2);
    
    // Determinar a classificação
    var classificacao = '';
    
    if (imc < 18.5) {
        classificacao = 'Magreza';
    } else if (imc < 25) {
        classificacao = 'Normal';
    } else if (imc < 30) {
        classificacao = 'Sobrepeso';
    } else if (imc < 35) {
        classificacao = 'Obesidade Grau I';
    } else if (imc < 40) {
        classificacao = 'Obesidade Grau II';
    } else {
        classificacao = 'Obesidade Grau III';
    }
    
    // Mostrar o resultado
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Seu IMC é: ' + imc + ' - ' + classificacao;
}