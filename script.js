function calcularImc(){
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const nome = document.getElementById("nome").value;

    let imc = peso / (altura * altura);
    let resultadoImc = document.getElementById("resultadoImc");
    
    if (peso == 0 || altura == 0) {
        resultadoImc.innerHTML = "Por favor, preencha os campos de peso e altura.";
    }

    else if (peso <= 0 || altura <= 0) {
        resultadoImc.innerHTML = "Peso e altura devem ser maiores que zero.";
    }
    
    else if(imc < 18.5) {
        resultadoImc.innerHTML = nome + ` seu peso é ${peso}` + ` sua altura é ${altura}`  + " seu IMC é: " + imc.toFixed(2) + " (Abaixo do peso)";
    }

    else if(imc >= 18.5 && imc < 25) {
        resultadoImc.innerHTML = nome + ` seu peso é ${peso}` + ` sua altura é ${altura}`  + " seu IMC é: " + imc.toFixed(2) + " (Peso normal)";
    }

    else if(imc >= 25 && imc < 30) {
        resultadoImc.innerHTML = nome + ` seu peso é ${peso}` + ` sua altura é ${altura}`  + " seu IMC é: " + imc.toFixed(2) + " (Sobrepeso)";
    } 

    else if (imc >= 30 && imc < 35) {
        resultadoImc.innerHTML = nome + ` seu peso é ${peso}` + ` sua altura é ${altura}`  + " seu IMC é: " + imc.toFixed(2) + " (Obesidade I)";
    }

    else if (imc >= 35 && imc < 40) {
        resultadoImc.innerHTML = nome + ` seu peso é ${peso}` + ` sua altura é ${altura}`  + " seu IMC é: " + imc.toFixed(2) + " (Obesidade II)";
    }

    else {
        resultadoImc.innerHTML = nome + ` seu peso é ${peso}` + ` sua altura é ${altura}`  + " seu IMC é: " + imc.toFixed(2) + " (Obesidade III)";
    }

    document.getElementById("nome").value = "";
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("nome").focus(); 
}

// Abaixo do peso: IMC menor que 18,5.
// Peso normal: IMC entre 18,5 e 24,9.
// Sobrepeso: IMC entre 25 e 29,9.
// Obesidade: IMC igual ou superior a 30. 