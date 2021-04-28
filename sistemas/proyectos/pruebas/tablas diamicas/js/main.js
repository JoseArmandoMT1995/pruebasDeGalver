$(buscar_datos());

function buscar_datos(consulta){
	$.ajax({
		url: 'buscar.php' ,
		type: 'POST' ,
		dataType: 'html',
		data: {consulta: consulta},
	})
	.done(function(respuesta){
		$("#datos").html(respuesta);
	})
	.fail(function(){
		console.log("error");
	});
}
function tablaGenerada(){
	
}

$(document).on('keyup','#caja_busqueda', function(){
	var valor = $(this).val();
	if (valor != "") {
		buscar_datos(valor);
	}else{
		buscar_datos();
	}
});
/* 
<tr>
    					<td>".$fila['Id_no']."</td>
    					<td>".$fila['Name']."</td>
    					<td>".$fila['ClubName']."</td>
    					<td>".$fila['Rtg_Nat']."</td>
    					<td>".$fila['Title']."</td>
    				</tr>";

*/