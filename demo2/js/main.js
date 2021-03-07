$(document).ready(function(){
   $(".button-collapse").sideNav(); // metodo para el menu tipo hamburguesa 
   $(".modal-trigger").leanModal(); // metodo que inicializa los modal's
   $('.datepicker').pickadate({
	  selectMonths: true, // Creates a dropdown to control month
	  selectYears: 8 // Creates a dropdown of 15 years to control year
   });
   $('select').material_select();
   $(".loaderAjaxCRUD").hide();
   $(".loaderAjaxPrincipal").hide();
   llenarListaUsers();
});

function llenarListaUsers(){
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3000/api/user',
      dataType: "json",
      beforeSend: function(){
        $(".loaderAjaxPrincipal").show();
      },
      success: function(response){
          $(".loaderAjaxPrincipal").hide();
    	    let list = response;
    	    if (list.length < 1) {
    	       Materialize.toast("No data found", 4000);
    	    } else {
    	    	var status;
                $('.listaUsers li').remove();
                for(let i = 0; i < list.length; i++) {
                    if (list[i].activo==="1"){
                      status='<i class="material-icons prefix" style="color: green;">account_circle</i>';
                    }else{
                      status='<i class="material-icons prefix" style="color: yellow;">account_circle</i>';
                    }
    		        $('.listaUsers').append('<li class="collection-item avatar">'+
    		          '<img src="img/DiegoLira.jpg" alt="" class="circle">'+
    		          '<span class="title">'+list[i].nombre+'</span>'+
    		          '<a href="#!" class="secondary-content"><i class="material-icons iconoFlecha">></i></a>'+
    		         '</li>');            	
                }
    	    }   

      }, // fin de success
      error: function(response){
        alert("No data found")
        $(".loaderAjaxPrincipal").hide();
      }
    });  
}

$(".mdlAddUsers").on("click",function(){
   $('#mdlUsers').openModal();
   $("#mdlTitulo").text("Add user");
   $(".formUsers")[0].reset();
});

$(".formUsers").submit(function(event){
   event.preventDefault();
   if ($("#mdlTitulo").text() === 'Add user'){
     agregarUser();
   }else{
     // editarUser(); PENDIENTE
   } 
});


function agregarUser(){
    var serializedData = {
      first_name : $("#first_name").val(),
      last_name : $("#last_name").val(),
      password : $("#password").val(),
      birthday : $("#birthday").val(),
      gender_id : $("#gender").val(),
    }

    $.ajax({
        url: "http://localhost:3000/api/user",
        type: "POST",
        data: serializedData ,
        beforeSend: function(){
           $(".loaderAjaxCRUD").show();
        },
        success: function (response) {
           $(".loaderAjaxCRUD").hide();
           Materialize.toast("User created.", 4000);
           $('#mdlUsers').closeModal();
           llenarListaUsers();
        },
        error: function(jqXHR, textStatus, errorThrown) {
           Materialize.toast(textStatus+' - '+errorThrown, 4000);
        }
    });  
}