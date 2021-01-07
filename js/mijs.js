$(document).ready(function() {
  $(".gracias").hide();

  $('#publicar').click(function() {
    $(".gracias").show();

  });

  $("#cerrar").click(function() {
    $(".gracias").hide(); /*cierra el div primer form*/
    $(".campo").val(""); /*Limpia la caja de comentarios*/
  });

  var i = 0;

  $('#suma').click(function() {
    i= 1;
    $('#suma').hide();
    $('#resta').hide();
    document.getElementById("display").innerHTML = i;
  })
  $('#resta').click(function() {
    i= -1;
    $('#suma').hide();
    $('#resta').hide();
    document.getElementById("display").innerHTML = i;
  })


  var j = 4;

  $('#suma1').click(function() {
    j=5;
    $('#suma1').hide();
    $('#resta1').hide();
    document.getElementById("display1").innerHTML = j;
  })
  $('#resta1').click(function() {
    j=3;
    $('#suma1').hide();
    $('#resta1').hide();
    document.getElementById("display1").innerHTML = j;
  })

  var k = 2;

  $('#suma2').click(function() {
    k=3;
    $('#suma2').hide();
    $('#resta2').hide();
    document.getElementById("display2").innerHTML = k;
  })
  $('#resta2').click(function() {
    k=1;
    $('#suma2').hide();
    $('#resta2').hide();
    document.getElementById("display2").innerHTML = k;
  })

  var h = 0;

  $('#suma3').click(function() {
    h=1;
    $('#suma3').hide();
    $('#resta3').hide();
    document.getElementById("display3").innerHTML = h;
  })
  $('#resta3').click(function() {
    h=-1;
    $('#suma3').hide();
    $('#resta3').hide();
    document.getElementById("display3").innerHTML = h;
  })

});
