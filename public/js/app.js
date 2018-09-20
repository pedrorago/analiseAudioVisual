
$(function()
{



    var tipoArquivoProgram;


    $('#Upload').change(function (e) {
        tipoArquivoProgram = this.files[0].type;

        var fileInput = document.getElementById('Upload');
        var fileUrl = window.URL.createObjectURL(fileInput.files[0]);
        $(".videoPreview").attr("src", fileUrl);
   
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
