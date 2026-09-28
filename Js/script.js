const botaoCalcular = document.getElementById("calcular");

const botaoLimpar = document.getElementById("limpar");

const campoNota1 = document.getElementById("nota1");

const campoNota2 = document.getElementById("nota2");

const campoNota3 = document.getElementById("nota3");

const resultado = document.getElementById("resultado");

const media = document.getElementById("media");

const mensagem = document.getElementById("mensagem");


/* =========================
   CALCULAR
========================= */

botaoCalcular.addEventListener("click", function () {

    const nota1 = Number(campoNota1.value);

    const nota2 = Number(campoNota2.value);

    const nota3 = Number(campoNota3.value);


    // Verifica campos vazios
    if (
        campoNota1.value === "" ||
        campoNota2.value === "" ||
        campoNota3.value === ""
    ) {

        alert("Digite as três notas.");

        return;
    }


    // Verifica se estão entre 0 e 10
    if (
        nota1 < 0 || nota1 > 10 ||
        nota2 < 0 || nota2 > 10 ||
        nota3 < 0 || nota3 > 10
    ) {

        alert("As notas precisam estar entre 0 e 10.");

        return;
    }


    // Faz a média
    const resultadoMedia =
        (nota1 + nota2 + nota3) / 3;


    // Mostra a média
    media.textContent =
        resultadoMedia.toFixed(1).replace(".", ",");


    // Verifica aprovação
    if (resultadoMedia >= 7) {

        mensagem.textContent =
            "Parabéns! Você atingiu a média necessária.";

        resultado.style.background = "#eef8f2";

    } else {

        mensagem.textContent =
            "A média ficou abaixo de 7,0.";

        resultado.style.background = "#fff2ed";
    }


    // Mostra o resultado
    resultado.classList.add("mostrar");

});


/* =========================
   LIMPAR
========================= */

botaoLimpar.addEventListener("click", function () {

    campoNota1.value = "";

    campoNota2.value = "";

    campoNota3.value = "";

    media.textContent = "0,0";

    mensagem.textContent =
        "Preencha as notas para ver o resultado.";

    resultado.classList.remove("mostrar");

});