function calcularImc(){
    event.preventDefault();

    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura * altura);
    let resultadoImc = document.getElementById("resultadoImc");
    
    if (peso == "" || altura == "") {
        resultadoImc.innerHTML = "Por favor, preencha os campos de peso e altura.";
    }

    else if (peso <= 0 || altura <= 0) {
        resultadoImc.innerHTML = "Peso e altura devem ser maiores que zero.";
    }

    else if(imc < 18.5) {
        resultadoImc.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Abaixo do peso)";
    }

    else if(imc >= 18.5 && imc < 25) {
        resultadoImc.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Peso normal)";
    }

    else if(imc >= 25 && imc < 30) {
        resultadoImc.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Sobrepeso)";
    } 

    else {
        resultadoImc.innerHTML = "Seu IMC é: " + imc.toFixed(2) + " (Obesidade)";
    }

    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    document.getElementById("peso").focus(); 
}

// Abaixo do peso: IMC menor que 18,5.
// Peso normal: IMC entre 18,5 e 24,9.
// Sobrepeso: IMC entre 25 e 29,9.
// Obesidade: IMC igual ou superior a 30. 