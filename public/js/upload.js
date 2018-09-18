
var frm = $("#SingUpForm");

frm.submit(function (e) {

    $('.progress-bar').text('0%');
    $('.progress-bar').width('0%');
    

    var dataEmissao = $(".SingUpForm #Data").val()+"/"+$(".SingUpForm #Mes").val()+"/"+$(".SingUpForm #Ano").val();

    console.log(dataEmissao);

    let data = new FormData(document.getElementById('SingUpForm'));

    data.append('data_emissao',dataEmissao);

    e.preventDefault();
    
    $.ajax({
        url: '/s3StreamUpload',
        type: 'POST',
        data: data,
        processData: false,
        contentType: false,
        success: function(data){
            console.log('upload successful!\n' + data);
        },
        xhr: function() {
          // create an XMLHttpRequest
          var xhr = new XMLHttpRequest();
  
          // listen to the 'progress' event
          xhr.upload.addEventListener('progress', function(evt) {
  
            if (evt.lengthComputable) {
                // calculate the percentage of upload completed
                var percentComplete = evt.loaded / evt.total;
                percentComplete = parseInt(percentComplete * 100);
    
                // update the Bootstrap progress bar with the new percentage
                $('.progress-bar').text(percentComplete + '%');
                $('.progress-bar').width(percentComplete + '%');
    
                // once the upload reaches 100%, set the progress bar text to done
                if (percentComplete === 100) {
                  $('.progress-bar').html('Done');
                }
    
              }
  
          }, false);
  
          return xhr;
        }
      });
  
});

