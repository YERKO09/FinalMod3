$(document).ready(function () {
    
    $("#btn").click(function () { 
        $("#obtenido").data("Saludos","Hola Mundo!!!"); //adjuntar datos .data
    });

    $("#btn1").click(function () { 
        $("#obtenido").html($("#obtenido").data("Saludos"))  //obtener datos
    });

    $("#btn2").click(function () {        
        $("#colorear").addClass('text-danger');  //addClass
    });

    $("#btn3").click(function () { 
        $("#img1").slideToggle();    //slideToggle
    });

    $("#btn4").click(function () { 
        $("#agrega_texto").append("<span>Nuevo Texto</span>");     // append
    });

    $("#btn5").click(function () {                      //val
        const valor = $("input").val();
        const salida = $('#salida');
        salida.html(valor).addClass("display-4")
    });

    $("#btn6").click(function () {      //fadeOut
        $("#img2").fadeOut();
    });

    $("#btn7").click(function () {         //fadeIn
        $("#img2").fadeIn();     
    });

    $("#input_focus").focus(function(){             //focus
        $("#div_focus").addClass("bg-secondary")       
    })

    $("#input_focus").blur(function(){              
        $("#div_focus").addClass("bg-white")        
    });

    $("#btn9").click(function () {              //hide
        $("#textito").hide(1000);
    });

    $("#btn10").click(function () {              //show
        $("#textito").show(1000);
    });

    $("#btn11").click(function () {             //slideUp
        $("#textisimo").slideUp(1000);
    });

    $("#btn12").click(function () {                //slideDown
        $("#textisimo").slideDown(1000);
    });
});