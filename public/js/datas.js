$(document).ready(function () {
    $('#users').DataTable({
        "scrollY":        "200px",
        "scrollCollapse": true,
        "lengthMenu": [[-1], ['All']],
    });


    $('.table #btnEdit').click(function(){
      //$('#content_edit_user').load("public/views/admin/editUser.php");
        $valor = $(this).val();
        $url = window.location.origin + '/admin/'+$valor+"/edit_dir";
        $('.user_create #frame_show').attr("src", $url);

        //alert("el valor es: "+ $valor);
    });

});
