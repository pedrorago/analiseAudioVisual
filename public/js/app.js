
$(function()
{
    
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
          
          $("#NomeProgramacaoCadastro").val('Program-'+id);
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
    
    var typingTimer; 
    var doneTypingInterval = 1000; 
    
    /*$('#EditForm input, .formProfile input, .formProfile textarea').keyup(function() 
    {
        clearTimeout(typingTimer);
        if ($('#EditForm input, .formProfile input, .formProfile textarea').val) 
        {
            typingTimer = setTimeout(doneTyping, doneTypingInterval);
        }
    });*/
    
    function doneTyping() {
        $("#EditForm input, .formProfile input, .formProfile textarea").attr("disabled", "true");
        $("#EditForm input, .formProfile input, .formProfile textarea").css("color", "#333d5d");
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
                    self.removeClass('do animateEnd');
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
    
    
    $('.menuContainer-btn').click(function(){
        $(this).find('span').toggleClass('active');
        
        $("aside").toggleClass('activeSidebar');
        $("header").toggleClass('activeHeader');
    });
    
});


var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, 
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
                            ticks: {
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
            