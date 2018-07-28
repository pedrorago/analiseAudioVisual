
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
