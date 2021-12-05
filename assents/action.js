const calcular = document.getElementById("calcular");
const limpar = document.getElementById("limpar");
const acolor = document.querySelector(".acolor");
const bcolor = document.querySelector(".bcolor");
const ccolor = document.querySelector(".ccolor");
const dcolor = document.querySelector(".dcolor");
const ecolor = document.querySelector(".ecolor");
const container = document.querySelector(".container");
const themerbar = document.querySelector('meta[name="theme-color"]');
//função usada para calcular
function qtr() {
  var brix = document.getElementById("brix").value;
  var litros = document.getElementById("litros").value;
  var peso = document.getElementById("peso").value;
  var pesocaldo = document.getElementById("pesocaldo").value;
  var densidadecaldo = document.getElementById("densidadecaldo").value;
  const resultado = document.getElementById("resultado");
  var operacao = document.getElementById("operacao");
  var unidade = operacao.value;
  var pesof = peso;
  var rapadura = "rapaduras";
  if (unidade == "g") {
    pesof = peso / 1000;
  }
  if (pesof <= 0.03) {
   rapadura = "rapadurinhas";
  }

  if (
    brix !== "" &&
    litros !== "" &&
    pesof !== "" &&
    densidadecaldo == "" &&
    pesocaldo == ""
  ) {
    var tw = brix * litros;
    var tr = 2 * litros;
    var tq = tw - tr;
    var twq = tq / 100;
    var valorRap = (twq / pesof).toFixed(1);

    resultado.textContent = `${valorRap} ${rapadura} de ${peso}${unidade}`;
  } else if (
    brix !== "" &&
    litros == "" &&
    densidadecaldo !== "" &&
    pesocaldo !== "" &&
    pesof !== ""
  ) {
    var op = pesocaldo / densidadecaldo;
    var tw = brix * op;
    var tr = 2 * op;
    var tq = tw - tr;
    var twq = tq / 100;
    var valorRap = (twq / pesof).toFixed(1);
    resultado.textContent = `${valorRap} ${rapadura} de ${peso}${unidade}`;
  } else {
    resultado.textContent = "Resultado indisponível";
  }
  if (valorRap == Infinity) {
    resultado.textContent = "Coloque o peso de cada rapadura";
  }
}
//função usada para limpar
function limp() {
  resultado.textContent = "";
    document.getElementById("brix").value = "";
    document.getElementById("litros").value = "";
    document.getElementById("pesocaldo").value = "";
    document.getElementById("densidadecaldo").value = "";
    document.getElementById("peso").value = "";
}
var fcolor = "#FF8C00";
var scolor = "#008080";
var tcolor = "green";
var focolor = "red";
var fivecolor = "#D3D3D3";

//funções
function aTcolor() {
  container.style["backgroundColor"] = fcolor;
  container.style["color"] = "white";
  themerbar.style["backgroundColor"] = fcolor;
}
function bTcolor() {
  container.style["backgroundColor"] = scolor;
  container.style["color"] = "white";
  themerbar.style["backgroundColor"] = scolor;
}
function cTcolor() {
  container.style["backgroundColor"] = tcolor;
  container.style["color"] = "white";
  themerbar.style["backgroundColor"] = tcolor;
}
function dTcolor() {
  container.style["backgroundColor"] = focolor;
  container.style["color"] = "white";
  themerbar.style["backgroundColor"] = focolor;
}
function eTcolor() {
  container.style["backgroundColor"] = fivecolor;
  container.style["color"] = "black";
  themerbar.style["backgroundColor"] = fivecolor;
}

acolor.style["backgroundColor"] = fcolor;
bcolor.style["backgroundColor"] = scolor;
ccolor.style["backgroundColor"] = tcolor;
dcolor.style["backgroundColor"] = focolor;
ecolor.style["backgroundColor"] = fivecolor;

calcular.addEventListener("click", qtr);
limpar.addEventListener("click", limp);
acolor.addEventListener("click", aTcolor);
bcolor.addEventListener("click", bTcolor);
ccolor.addEventListener("click", cTcolor);
dcolor.addEventListener("click", dTcolor);
ecolor.addEventListener("click", eTcolor);
