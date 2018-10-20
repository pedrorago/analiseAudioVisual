
function saveAnalise() {

  var form = $('#form_save_analyze');

      $.ajax({
        url: '/save-analyze',
        type: 'POST',
        data: form.serialize(),
        success: function(data){
            console.log('upload successful!\n' + data);
            console.log(data);
            alert(data);
            location.reload();
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
                $('.progress-bar').width(percentComplete + '%');
    
                // once the upload reaches 100%, set the progress bar text to done
                if (percentComplete === 100) {

                  setTimeout(function()
                  {

                    $('.progress-bar').css('display', 'none');

                  }, 2250);

                }   
              }
              
          }, false);
  
          return xhr;
        }
      });

};

