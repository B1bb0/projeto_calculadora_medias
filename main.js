const form = document.getElementById('form-atividade')
const imgAprovado = '<img src= "./images/aprovado.png" alt="Emoji calebração" />'
const imgReprovado = '<img src= "./images/reprovado.png" alt="Emoji triste" />'
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
const notaMinima = parseFloat(prompt("Digite a nota mínima: "));

var linhas = ' ';

form.addEventListener('submit', function(e) { 
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMediaFinal();
});

function adicionaLinha() {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida anteriormente`)
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    }

    var linha = '<tr>';
    linha += `<td> ${inputNomeAtividade.value}<td>`;
    linha += `<td> ${inputNotaAtividade.value}<td>`;
    linha += `<td> ${inputNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}<td>`; // '?' tem o valor de IF e ':' tem o valor de ELSE
    linha += `</tr>`;

    linhas += linha;

    inputNomeAtividade.value = ' ';
    inputNotaAtividade.value = ' ';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado

}

function calculaMediaFinal() {
    var somaDasNotas = 0.0;

    for (var i = 0; i < notas.length; i++) {
        somaDasNotas += notas[i]
        console.log(somaDasNotas);
    }

    return somaDasNotas / notas.length;
}