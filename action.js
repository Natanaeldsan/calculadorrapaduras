const calcular = document.getElementById('calcular');

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
    if (brix !== '' && litros!=='') {

        var tw= brix*litros;
        var tr= 2*litros;
        var tq= tw-tr;
        var twq= tq/100
        const valorRap = (twq/pesof).toFixed(1);

        resultado.textContent = `São ${valorRap} rapaduras`;
    }
        else if (brix !== '' && litros=='') {
            var op=pesocaldo/densidadecaldo;
            var tw= brix*op;
            var tr= 2*op;
            var tq= tw-tr;
            var twq= tq/100
            const valorRap = (twq/pesof).toFixed(1);
    
            resultado.textContent = `São ${valorRap} rapaduras`;    
    }
    else {
        resultado.textContent = 'Preencha todos os campos!!!';
    }

}

calcular.addEventListener('click', qtr);