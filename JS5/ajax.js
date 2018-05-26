//IE9+ jQuery.post()
$("form").on("submit", function() {
    var url = '/carrots-admin-ajax/a/login';
    var formdata = $(this).serialize();
    var timer = null;
    $.post(url, formdata,
        function(data) {
            console.log(formdata);
            console.log(data);
            if (data.code === 0) {
                window.location.href = "http://dev.admin.carrots.ptteng.com/";
            } else {
                clearInterval(timer);
                $('#msg').html(data.message);
                timer = setTimeout(function() {
                    $('#msg').html('');
                }, 3000)
            }
        }, 'json');
    return false;//阻止表单默认提交行为
})

//IE9+ jQuery.ajax()
// $("form").on("submit", function() {
//     var timer = null;
//     $.ajax({
//         type: 'POST',
//         url: '/carrots-admin-ajax/a/login',
//         data: $('#login').serialize(),
//         dataType: 'json',
//         success: function(data) {
//             console.log(data);
//             if (data.code === 0) {
//                 window.location.href = "http://dev.admin.carrots.ptteng.com/";
//             } else {
//                $('#msg').html(data.message);
//                 timer = setTimeout(function() {
//                     $('#msg').html('');
//                 }, 3000)
//             }
//         }
//     })
//     return false;//阻止表单默认提交行为
// })

//IE10+ jQuery.ajax() & FormData
// $("form").on("submit", function() {
//     var formdata = new FormData($('#login')[0]);
//     $.ajax({
//         type: 'POST',
//         url: '/carrots-admin-ajax/a/login',
//         data: formdata,
//         processData: false,
//         contentType: false,
//         dataType: 'json',
//         success: function(data) {
//             console.log(data);
//             if (data.code === 0) {
//                 window.location.href = "http://dev.admin.carrots.ptteng.com/";
//             } else {
//                 $('#msg').html(data.message);
//                 timer = setTimeout(function() {
//                     $('#msg').html('');
//                 }, 3000)
//             }
//         }
//     })
//     return false; //阻止表单默认提交行为
// })
