// ===============================
// ELEMENTOS DO HTML
// ===============================

const campoSenha = document.getElementById("campo-senha");

const tamanhoTexto = document.getElementById("tamanho");

const botaoDiminuir = document.getElementById("diminuir");

const botaoAumentar = document.getElementById("aumentar");

const botaoGerar = document.getElementById("gerar");

const checkboxMaiusculo =
    document.getElementById("maiusculo");

const checkboxMinusculo =
    document.getElementById("minusculo");

const checkboxNumero =
    document.getElementById("numero");

const checkboxSimbolo =
    document.getElementById("simbolo");

const barra =
    document.querySelector(".barra");

const textoForca =
    document.getElementById("texto-forca");


// ===============================
// CONFIGURAÇÕES
// ===============================

let tamanho = 12;


// Caracteres disponíveis
const letrasMaiusculas =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const letrasMinusculas =
    "abcdefghijklmnopqrstuvwxyz";

const numeros =
    "0123456789";

const simbolos =
    "!@#$%&*()_+-=[]{}<>?";


// ===============================
// GERAR SENHA
// ===============================

function gerarSenha() {

    let caracteres = "";


    // Adiciona letras maiúsculas
    if (checkboxMaiusculo.checked) {
        caracteres += letrasMaiusculas;
    }


    // Adiciona letras minúsculas
    if (checkboxMinusculo.checked) {
        caracteres += letrasMinusculas;
    }


    // Adiciona números
    if (checkboxNumero.checked) {
        caracteres += numeros;
    }


    // Adiciona símbolos
    if (checkboxSimbolo.checked) {
        caracteres += simbolos;
    }


    // Se nenhuma opção estiver selecionada
    if (caracteres.length === 0) {

        campoSenha.value = "";

        barra.className = "barra";

        textoForca.textContent =
            "Selecione pelo menos uma opção";

        textoForca.className =
            "parametro-senha-textos";

        return;
    }


    let senha = "";


    // Gera cada caractere da senha
    for (let i = 0; i < tamanho; i++) {

        const indice =
            Math.floor(
                Math.random() * caracteres.length
            );

        senha += caracteres[indice];
    }


    // Coloca a senha no input
    campoSenha.value = senha;


    // Verifica a força
    verificarForcaSenha(senha);
}


// ===============================
// VERIFICAR FORÇA DA SENHA
// ===============================

function verificarForcaSenha(senha) {

    let pontos = 0;


    // Verifica tamanho
    if (senha.length >= 8) {
        pontos++;
    }

    if (senha.length >= 12) {
        pontos++;
    }

    if (senha.length >= 16) {
        pontos++;
    }


    // Verifica letra maiúscula
    if (/[A-Z]/.test(senha)) {
        pontos++;
    }


    // Verifica letra minúscula
    if (/[a-z]/.test(senha)) {
        pontos++;
    }


    // Verifica número
    if (/[0-9]/.test(senha)) {
        pontos++;
    }


    // Verifica símbolo
    if (/[^A-Za-z0-9]/.test(senha)) {
        pontos++;
    }


    // Remove classes antigas
    barra.className = "barra";

    textoForca.className =
        "parametro-senha-textos";


    // ===============================
    // SENHA FRACA
    // ===============================

    if (pontos <= 3) {

        barra.classList.add("fraca");

        textoForca.textContent =
            "Senha fraca";

        textoForca.classList.add(
            "texto-fraca"
        );
    }


    // ===============================
    // SENHA MÉDIA
    // ===============================

    else if (pontos <= 5) {

        barra.classList.add("media");

        textoForca.textContent =
            "Senha média";

        textoForca.classList.add(
            "texto-media"
        );
    }


    // ===============================
    // SENHA FORTE
    // ===============================

    else {

        barra.classList.add("forte");

        textoForca.textContent =
            "Senha forte";

        textoForca.classList.add(
            "texto-forte"
        );
    }
}


// ===============================
// BOTÃO +
// ===============================

botaoAumentar.addEventListener(
    "click",
    function () {

        // Limite máximo: 30 caracteres
        if (tamanho < 30) {

            tamanho++;

            tamanhoTexto.textContent =
                tamanho;

            gerarSenha();
        }
    }
);


// ===============================
// BOTÃO -
// ===============================

botaoDiminuir.addEventListener(
    "click",
    function () {

        // Limite mínimo: 4 caracteres
        if (tamanho > 4) {

            tamanho--;

            tamanhoTexto.textContent =
                tamanho;

            gerarSenha();
        }
    }
);


// ===============================
// BOTÃO GERAR NOVA SENHA
// ===============================

botaoGerar.addEventListener(
    "click",
    gerarSenha
);


// ===============================
// CHECKBOXES
// ===============================

checkboxMaiusculo.addEventListener(
    "change",
    gerarSenha
);

checkboxMinusculo.addEventListener(
    "change",
    gerarSenha
);

checkboxNumero.addEventListener(
    "change",
    gerarSenha
);

checkboxSimbolo.addEventListener(
    "change",
    gerarSenha
);


// ===============================
// GERAR SENHA AO ABRIR A PÁGINA
// ===============================

gerarSenha();