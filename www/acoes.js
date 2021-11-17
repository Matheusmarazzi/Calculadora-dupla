// This is a JavaScript file
function alerta(conteudo,titulo){
  navigator.notification.prompt(conteudo,'', titulo);

}
$('document').on('click','#btndia',function(){
  $('#diame').show;
  $('#rai').hide;

});

