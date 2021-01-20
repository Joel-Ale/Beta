$(document).ready(function() {

// ********************************* CP PARA AUTORELLENAR******************************************
 

  $('#cp').change(function() {

    let  codigopostal = $('#cp').val();

    console.log(codigopostal);

    enviocp(codigopostal);

  });


  $('#semuni').change(function(){ 

    let muni = $('#semuni').val();

    console.log(muni);

    recargarLista(muni);
  });


  function enviocp(cod) {
   $.ajax({
    url: 'consultas.php',
    data: {cod},
    type: 'POST',
    success: function (response) {
      if(!response.error) {
        let tasks = JSON.parse(response);
        tasks.forEach(task => {

        $('#nombreasent').val(task.asentamiento);


        $('#tpoasent').val(task.tpoAsntmnto);
        $('#tpoasent').html(task.tpoAsntmnto);
        
       });            
      }
    } 
  })
 }





 function recargarLista(muni){ //pasamos datos a php
    $.ajax({
      type:"POST",
      url:"consultas.php", //lo mandamos al archivo
      data:{muni},
      success:function(resp){
        // console.log(resp);

        template= '';
        let loca = JSON.parse(resp);

        loca.forEach(locali => {

         $('#entidad').val(locali.entnum);
        $('#entidad').html(locali.ent);


 
        template += `
                  <option id="localidad" value="${locali.cve_localidad}">${locali.localidad}</option>
                 ` 
        });  

        $('#localidades').html(template);

      }
    });
  }


});










