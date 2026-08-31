// 1. Seleção dos elementos do DOM
const numeroSenha = document.querySelector('.parametro-senha__texto');
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll('.checkbox');

// 2. Bancos de dados de caracteres (Alfabeto corrigido)
const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz'; // Corrigido de uvxywz para uvwxy$
const numeros = '0123456789';
const simbolos = '!@%*?#¨&+-.';

// 3. Configuração de tamanho inicial da senha
let tamanhoSenha = 12;
numeroSenha.textContent = tamanhoSenha;

// 4. Configuração dos eventos de clique nos botões (- e +)
botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

// 5. Monitoramento dos checkboxes (Gera nova senha ao marcar/desmarcar)
checkbox.forEach(box => {
    box.onchange = geraSenha;
});

// 6. Funções de controle de tamanho
function diminuiTamanho() {
    if (tamanhoSenha > 1) {
        tamanhoSenha--;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

function aumentaTamanho() {
    if (tamanhoSenha < 20) {
        tamanhoSenha++;
    }
    numeroSenha.textContent = tamanhoSenha;
    geraSenha();
}

// 7. Função principal para geração da senha aleatória
function geraSenha() {
    let alfabeto = '';

    // Verifica quais opções estão marcadas e monta o banco de caracteres
    if (checkbox[0].checked) {
        alfabeto += letrasMaiusculas;
    }
    if (checkbox[1].checked) {
        alfabeto += letrasMinusculas;
    }
    if (checkbox[2].checked) {
        alfabeto += numeros;
    }
    if (checkbox[3].checked) {
        alfabeto += simbolos;
    }

    // Se nenhuma caixa estiver selecionada, limpa o campo e interrompe a função
    if (alfabeto.length === 0) {
        campoSenha.value = 'Selecione uma opção';
        return;
    }

    // Realiza o sorteio dos caracteres com base no tamanho definido
    let senha = '';
    for (let i = 0; i < tamanhoSenha; i++) {
        let numeroAleatorio = Math.floor(Math.random() * alfabeto.length);
        senha += alfabeto[numeroAleatorio];
    }

    // Exibe a senha gerada na tela
    campoSenha.value = senha;
}

// 8. Execução automática ao iniciar a página para não começar em branco
geraSenha();