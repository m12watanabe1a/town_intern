function getData(){
    var wp_url_admin_ajax = 'http://localhost:8080/wp-admin/admin-ajax.php';
    jQuery(function ($){
        $.ajax({
            type: 'POST',
            dataType: 'json',
            crossDomain: true,
            url: wp_url_admin_ajax,
            data: {
                //action : paket
                action : "tell_me",
                'lat': paket[0],
                'lng': paket[1]
            },
            success: function(response){
                if(response != "error"){
                    mark(response);
                }
                else{
                    console.log(`No toilet around here`);
                }
            }
        });
    });
}