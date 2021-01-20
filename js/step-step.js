 $(document).ready(function(){
  
     console.log('jquery is working!'); //to know if it's working
  
//****************************** PODRAS VER EL MODAL QUE DICE LAS REGLAS*******************************
   $('#ventana-modal').modal({
    backdrop:false,
    keyboard:false,
   });

//********************************** PASO A PASO FORMULARIO *****************************************

    $('.parte').collapse('toggle')
   var current = 1,current_step,next_step,steps;
   steps = $("fieldset").length;
   $(".next").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().parent().parent().parent().parent().next();
    next_step.show();

    current_step.parent().parent().parent().parent().hide();
    $('.parte').collapse('toggle')  

    setProgressBar(++current);
  });
   $(".previous").click(function(){
    current_step = $(this).parent();
    next_step = $(this).parent().parent().parent().parent().parent().prev();   

    next_step.show(); 
    $('.parte').collapse('toggle') 

    current_step.parent().parent().parent().parent().hide();
    setProgressBar(--current); 

  });
   setProgressBar(current);
	// Change progress bar action
	function setProgressBar(curStep){
		var percent = parseFloat(100 / steps) * curStep;
		percent = percent.toFixed();
		$(".progress-bar")
   .css("width",percent+"%")
   .html(percent+"%");		
 }     

});
