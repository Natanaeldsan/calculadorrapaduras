const calcular = document.getElementById('calcular');
const limpar = document.getElementById('limpar');

function qtr () {
    const brix = document.getElementById('brix').value;
    const litros = document.getElementById('litros').value;
    var peso = document.getElementById('peso').value;
    var pesocaldo = document.getElementById('pesocaldo').value;
    var densidadecaldo = document.getElementById('densidadecaldo').value;
    const resultado = document.getElementById('resultado');

    var operacao= document.getElementById('operacao');
    var unidade= operacao.value;
    var pesof= peso;
    if (unidade=='g'){
    pesof= peso/1000;
    }
    if(pesof <=0.03){
       var rapadura="rapadurinhas"
    }
else {
    var rapadura="rapaduras";
}

    if (brix !== '' && litros!=='' && pesof !=='') {

        var tw= brix*litros;
        var tr= 2*litros;
        var tq= tw-tr;
        var twq= tq/100
        const valorRap = (twq/pesof).toFixed(1);

        resultado.textContent = `São ${valorRap} ${rapadura}`;
    }
        else if (brix !== '' && litros=='') {
            var op=pesocaldo/densidadecaldo;
            var tw= brix*op;
            var tr= 2*op;
            var tq= tw-tr;
            var twq= tq/100
            const valorRap = (twq/pesof).toFixed(1);
    
            resultado.textContent = `São ${valorRap} ${rapadura}`;    
    }
    else {
        resultado.textContent = 'Resultado indisponível';
    }

}
function limp(){
    resultado.textContent="";
}
calcular.addEventListener('click', qtr);
limpar.addEventListener('click', limp);
