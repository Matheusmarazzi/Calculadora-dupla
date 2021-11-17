// This is a JavaScript file
var textodisplay ="";

//variavel do primeiro valor
var valor1 = 0;

//identificar operador
var operador = "";

function zerarDisplay(){
    textodisplay = "";
   $(".display").val("0");

}

$(document).on("click",".botao",function(){
  textodisplay += $(this).val();
  $(".display").val(textodisplay);

})

$(document).on("click",".ope",function(){
  operador = $(this).html();
  valor1 = textodisplay;
  zerarDisplay();
  document.getElementById('emoji').src = 'pensando.jpg';



})
$(document).on("click","#limpar",function(){
  zerarDisplay();
  valor1=0;
  document.getElementById('emoji').src = 'sorriso.jpg';

})

$(document).on("click","#igual",function(){
  var valor2 = textodisplay;
  zerarDisplay();
  
  if(operador == "+"){
    textodisplay =parseFloat(valor1) + parseFloat(valor2);
   

  }
  if(operador == "-"){
    textodisplay =parseFloat(valor1) - parseFloat(valor2);

  }
  if(operador == "*"){
    textodisplay =parseFloat(valor1) * parseFloat(valor2);
  
  }
  if(operador == "/"){
    textodisplay =parseFloat(valor1) / parseFloat(valor2);

  }
  $(".display").val(textodisplay);
  document.getElementById('emoji').src = 'oculos.jpg';
  



});
$(document).on("click","#raiocal",function(){
  var raio = document.getElementById('raio');
  var raio1 = raio.value;
  var pi = 3.14;
  var resultado
  resultado = 2 * raio1 * pi;
  $('#titulo').html('Seu resultado é: ');
  $('#resultado').html(resultado); 
  if(resultado < 10){
  document.getElementById('circle').src = 'pequeno.png';
  $('#ti').html('Pequeno');
  }else if(resultado < 20 && resultado >10){
  document.getElementById('circle').src = 'medio.png';
    $('#ti').html('Medio');
  } else if(resultado > 20){
    document.getElementById('circle').src = 'grande.png';
    $('#ti').html('Grande');
  }  
})
$(document).on("click","#diamcal",function(){
  var diametro = document.getElementById('diametro');
  var diametro1 = diametro.value;
  var pi = 3.14;
  var resultado
  resultado = diametro1 * pi;
  $('#titulo').html('Seu resultado é: ');
  $('#resultado').html(resultado); 
  if(resultado < 10){
  document.getElementById('circle').src = 'pequeno.png';
  $('#ti').html('Pequeno');
  }else if(resultado < 20 && resultado >10){
  document.getElementById('circle').src = 'medio.png';
    $('#ti').html('Medio');
  } else if(resultado > 20){
    document.getElementById('circle').src = 'grande.png';
    $('#ti').html('Grande');
  } 
})
