const form = document.getElementById('form-atividade'); //chama o id
const imgAprovado = '<img src="./images/aprovado.png" alt= "img-aprovado" />';
const imgReprovado = '<img src="./images/reprovado.png" alt= "img-reprovado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima da atividade: "));

let linhas = ' ';

form.addEventListener('submit', function(e) { 
    e.preventDefault(); //remover o comportamento de recarregar quando submeter

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
})

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade'); //capturar os campos
    const inputNotaAtividade = document.getElementById('nota-atividade'); //capturar os campos

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade: ${inputNomeAtividade.value} já foi inserida!`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha = '<tr>'; //variável vai receber o HTML como string
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`; //operador ternário
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeAtividade.value= '';
    inputNotaAtividade.value = '';

}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody'); //colocar o conteúdo dentro do corpo da tabela
    corpoTabela.innerHTML = linhas; //innerHTML = receber o conteúdo da string
}

function calculaMediaFinal() {
    let somaDasNotas = 0;

    for (let i= 0; i < notas.length; i ++) {
        somaDasNotas += notas [i];
    }
    return somaDasNotas / notas.length;
}

function atualizaMediaFinal() {
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;

}