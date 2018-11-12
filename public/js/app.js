
$(function()
{

    $('#filtro-dia-emissao').mask('00/00/0000');

    //Formulario de recuperação


    var frm2 = $('#forgot_form');

    frm2.submit(function (e) {
        e.preventDefault();

        $('.login').addClass('test')	
        setTimeout(function(){	
          $('.login').addClass('testtwo')	
        },300);	
        setTimeout(function(){	
          $(".authent").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });	
          $(".authent").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');	
        },350);	


        setTimeout(function(){	
          $(".authent").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });	
          $(".authent").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');	
          $('.login').removeClass('testtwo')	
        },2500);	


        $.ajax({
            type: frm2.attr('method'),
            url: frm2.attr('action'),
            data: frm2.serialize(),
            success: function (data) {
                console.log('Submission was successful.');

                setTimeout(function(){	
                    $('.login').removeClass('test')	
                    $('.login div').fadeOut(123);	
                },2800);	

                if(data.responseCode != 0)
                {
                    setTimeout(function(){	
                        $('.success').fadeIn();	
            
                    },3200);
                    setTimeout(function(){	
                        window.location.href = "/";
            
                    },3800);
                }
                else
                {
                    setTimeout(function(){	
                        $('.error').fadeIn();	
            
                    },3200);
                    setTimeout(function(){	
                        window.location.href = "/";
            
                    },5000);

                }

            },
            error: function (data) {
                console.log('An error occurred.');
                console.log(data);
            },
        });


       }); 


    
    
    
    // Formulario de Login

    var frm = $('#login_form');
    frm.submit(function (e) {
       e.preventDefault();
        $('.login').addClass('test')	
       setTimeout(function(){	
         $('.login').addClass('testtwo')	
       },300);	
       setTimeout(function(){	
         $(".authent").show().animate({right:-320},{easing : 'easeOutQuint' ,duration: 600, queue: false });	
         $(".authent").animate({opacity: 1},{duration: 200, queue: false }).addClass('visible');	
       },350);	


       setTimeout(function(){	
         $(".authent").show().animate({right:90},{easing : 'easeOutQuint' ,duration: 600, queue: false });	
         $(".authent").animate({opacity: 0},{duration: 200, queue: false }).addClass('visible');	
         $('.login').removeClass('testtwo')	
       },2500);	

    $.ajax({
       type: frm.attr('method'),
       url: frm.attr('action'),
       data: frm.serialize(),
       success: function (data) {
           console.log('Submission was successful.');
            setTimeout(function(){	
               $('.login').removeClass('test')	
               $('.login div').fadeOut(123);	
           },2800);	
            if(data.responseCode != 0)
           {
               setTimeout(function(){	
                   $('.success').fadeIn();	
       
               },3200);
               setTimeout(function(){	
                   window.location.href = "/";
       
               },3800);
           }
           else
           {
               setTimeout(function(){	
                   $('.error').fadeIn();	
       
               },3200);
               setTimeout(function(){	
                   window.location.href = "/";
       
               },5000);
            }
        },
       error: function (data) {
           console.log('An error occurred.');
           console.log(data);
       },
   });
   }); 
     
     $('#UsuarioInput,#SenhaInput').focus(function(){	
     $(this).prev().animate({'opacity':'1'},200)	
   });	
   $('#UsuarioInput,#SenhaInput').blur(function(){	
     $(this).prev().animate({'opacity':'.5'},200)	
   });	
    $('#UsuarioInput,#SenhaInput').keyup(function(){	
     if(!$(this).val() == ''){	
       $(this).next().animate({'opacity':'1','right' : '30'},200)	
     } else {	
       $(this).next().animate({'opacity':'0','right' : '20'},200)	
     }	
   });

   

  
   var open = 0;	
 $('.tab').click(function(){	
   $(this).fadeOut(200,function(){	
     $(this).parent().animate({'left':'0'})	
   });	
 });
 
 
      
      


    setTimeout(function()
    {
        $("nav li a p").css("opacity", "1");
        $(".containerReports").css("opacity", "1");
    }, 1000);



    $('#FiltroConteudo').on('click', function() 
    {
        if( $("#FiltroConteudo").is(':checked') ){
             $(".ConteudoFiltroContent").removeClass("violentoActive");
             $(".ConteudoViolento").removeClass("violentoActive");
             $("#ConteudoViolentoInput").prop("checked", true);
        } else {
            $(".ConteudoFiltroContent").addClass("violentoActive");

        }
    });

    $('#ConteudoViolentoInput').on('click', function() 
    {
        if( $("#ConteudoViolentoInput").is(':checked') ){
             $(".ConteudoViolento").removeClass("violentoActive");
        } else {
            $(".ConteudoViolento").addClass("violentoActive");

        }
    });
 
    
    
    // Analyze 
    if( $("#Conteudo-violento").val() != "Sim" )
    {
        $(".analiseFinal").css('display', 'none');
        $(".analiseFinal").css('opacity', '0');
        
    }else
    {
        $(".analiseFinal").css('display', 'block');
        $(".analiseFinal").css('opacity', '1');
    }
    
    $("#Conteudo-violento").on('change', function() {
        if ($(this).val() == 'Sim'){
            $(".analiseFinal").css('display', 'block');
            setTimeout(function()
            {
                $(".analiseFinal").css('opacity', '1');
            }, 100);
        } else {
            $(".analiseFinal").css('opacity', '0');
            setTimeout(function()
            {
                $(".analiseFinal").css('display', 'none');
            }, 100);        
        }
    });
    
    
    
    
    
    //
    
    
    randID();
    
    function randID(){
        var str = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ',id='';
        for(var i = 0; i < 5; i++){
            id += str[(Math.random()*(str.length-1)).toFixed()];
        }
        
        $("#NomeProgramacaoCadastro").attr('value', 'Program-'+id);
    }
    
    
    
    
    $(".infosPlaceheader").on('click', function()
    {
        if ($(this).closest('.infosPlace').hasClass("infosPlaceActive")) {
            $(this).closest('.infosPlace').toggleClass('infosPlaceActive');
            $(".infosPlace").removeClass('infosPlaceActive');
            
        }else
        {
            
            $(".infosPlace").removeClass('infosPlaceActive');
            $(this).closest('.infosPlace').toggleClass('infosPlaceActive');
        }
        
    });
var typingTimer; //timer identifier
var doneTypingInterval = 1000; //time in ms, 1 second for example

//on keyup, start the countdown
$('#EditForm input, .formProfile input, .formProfile textarea').keyup(function() {
  $(this).siblings(".pencilEdit").css("opacity", '1');
  clearTimeout(typingTimer);
  if ($('#EditForm input, .formProfile input, .formProfile textarea').val) {
    typingTimer = setTimeout(doneTyping, doneTypingInterval);
  }
});

//user is "finished typing," do something
function doneTyping() {
    $(".pencilEdit").css("opacity", '0.1');
}

    var tipoArquivoProgram;
    
    /*$(".pencilEdit").on('click', function()
    {
        $(this).siblings('input').removeAttr("disabled");
        $(this).siblings('textarea').removeAttr("disabled");
        $(this).siblings('input').css("color", "#000");
        $(this).siblings('textarea').css("color", "#000");
        $(this).siblings('input').val("");
        $(this).siblings('textarea').text("");
        $(this).siblings('input').focus();
        $(this).siblings('textarea').focus();
    });
    
    $(".spanSelect .pencilEdit").on('click',function()
    {
        var select = $(this).siblings('select');
        select.removeAttr("disabled");
        console.log('aqui');
        $(function(
            
        ){
            select.change(function()
            {
                $(this).attr("disabled", 'true');
            });
        });
        
    });*/
    
    
    $('#Upload').change(function (e) {
        tipoArquivoProgram = this.files[0].type;
        
        var fileInput = document.getElementById('Upload');
        var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
        $(".videoPreview").attr("src", fileUrl);
        $(".imagemPreviewBox").attr("src", fileUrl);
        
    });
    
    $(".videoPreviewContent").on('click', function()
    {
        $(".formUploadFile").css('display', 'flex');
        $(".videoPreviewContent").css('display', 'none'); 
        $(".infoFile").css('opacity', '0');
        $(".msg").css('display', 'block');
        
    });
    
    $("#Upload").on('click', function()
    
    {
        $(".msg").css('display', 'none');
        
        var vazio = true;
        var target = $("input[name='imagem_file[]']");
        
        var verificacaoFile = setInterval(function()
        {
            
            target.each(function(i,e)
            {
                if($(e).val())
                {
                    vazio = false;
                }
            });
            
            if(!vazio)
            {

                var nomeArquivo = $("#Upload").val();
                
                var self = $('.upload');
                if(self.hasClass('do')) 
                {
                    self.removeClass('do');
                    self.removeClass('animateEnd');
                } else 
                {
                    self.addClass('do');
                    setTimeout(function() 
                    {
                        self.addClass('animateEnd');
                        
                        $(".formUploadFile").css('display', 'none');
                        $(".videoPreviewContent").css('display', 'flex');
                        
                        $("#NomeArquivo").text(nomeArquivo);
                        $("#FormatoArquivo").text(tipoArquivoProgram);
                        $(".infoFile").css('opacity', '1');
                        
                    }, 4000);
                }
                
                clearInterval(verificacaoFile);
                
            }
            
        }, 1000);
        
        
    })
    
    
    
});


var ctx = document.getElementById("graficoSemana");
var graficoSemana = new Chart(ctx, 
    {
        type: 'line',
        data: 
        {
            labels: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado", "Domingo"],
            datasets: [
                {
                    label: '# Análises', 
                    data: [30, 5, 40, 20, 16, 7, 10],
                    
                    backgroundColor: [
                        'rgba(33, 71, 109, 0.3)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(10, 108, 206, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    
                    borderWidth: 2
                }]
        },
        options: 
        {
            scales: 
            {
                yAxes: [
                    {
                        ticks: 
                        {
                        beginAtZero:true
                        }
                        }]
                    }
            }
    });
            
            
            
            $(document).ready(function() {
                var frm = $('#login_form');
                
                frm.submit(function (e) {
                    
                    e.preventDefault();
                    
                    $.ajax({
                        type: frm.attr('method'),
                        url: frm.attr('action'),
                        data: frm.serialize(),
                        success: function (data) {
                            console.log('Submission was successful.');
                            if(data.responseCode==1){
                                window.location.href = "/"
                            }
                        },
                        error: function (data) {
                            console.log('An error occurred.');
                            console.log(data);
                        },
                    });
                });
                
            })
            