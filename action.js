const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');
//função usada para calcular
function qtr() {
    var brix = document.getElementById('brix').value;
    var litros = document.getElementById('litros').value;
    var peso = document.getElementById('peso').value;
    var pesocaldo = document.getElementById('pesocaldo').value;
    var densidadecaldo = document.getElementById('densidadecaldo').value;
    const resultado = document.getElementById('resultado');
    var operacao = document.getElementById('operacao');
    var unidade = operacao.value;
    var pesof = peso;
    if (unidade == 'g') {
        pesof = peso / 1000;
    }
    if (pesof <= 0.03) {
        var rapadura = "rapadurinhas"
    }
    else {
        var rapadura = "rapaduras";
    }

    if (brix !== '' && litros !== '' && pesof !== '' && densidadecaldo == '' && pesocaldo == '') {

        var tw = brix * litros;
        var tr = 2 * litros;
        var tq = tw - tr;
        var twq = tq / 100
        var valorRap = (twq / pesof).toFixed(1);

        resultado.textContent = `São ${valorRap} ${rapadura} de ${pesof} ${unidade}`;
    }
    else if (brix !== '' && litros == '' && densidadecaldo !== '' && pesocaldo !== '' && pesof !== '') {
        var op = pesocaldo / densidadecaldo;
        var tw = brix * op;
        var tr = 2 * op;
        var tq = tw - tr;
        var twq = tq / 100;
        var valorRap = (twq / pesof).toFixed(1);

        resultado.textContent = `São ${valorRap} ${rapadura} de ${pesof}${unidade}`;
    }

    else {
        resultado.textContent = 'Resultado indisponível';
    }
    if (valorRap == Infinity) {
        resultado.textContent = "Coloque o peso de cada rapadura"
    }
}
//função usada para limpar
function limp() {
    resultado.textContent = "";
    if (brix !== '') {
        document.getElementById('brix').value = '';
        document.getElementById('litros').value = '';
        document.getElementById('pesocaldo').value = '';
        document.getElementById('densidadecaldo').value = '';
        document.getElementById('peso').value = '';
    }
}
calcular.addEventListener('click', qtr);
limpar.addEventListener('click', limp);
console.log('Faça bom proveito!');