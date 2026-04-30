function check_form()	{
	console.log("Click!!!!");
	let nombre = document.getElementById("contacto-nombre").value;
	
	console.log(nombre)
	
	}
	
	function check_mail(){
		let lengthEmail = document.getElementById("contacto-email").value;
		if (lengthEmail.length < 6){
		console.log("Oye, que es muy pequeño!");
		document.getElementById("contacto-email").focus();
		return false;
		}
	}
	
	function show_error (message){
	
		let error_msg = document.getElementById("error-msg");
		
		error_msg.innerHTML = message;
		
		error_msg.style.display = "block";
		
	}
	
	function verificarAño() {
		let dateEnviado = document.getElementById("contacto-nacimiento").value;
		let today = new Date();
		let yearActual = today.getFullYear();
		if (!dateEnviado) {
			show_error("No has seleccionado ninguna fecha");
			return false;
		}
		
		let año = new Date(dateEnviado).getFullYear();
		if (año < 1900) {
			show_error("Un poco viejo, no?");
			return false;
		} 
		else if (yearActual - año <= 18) {
			show_error("Eres menor de 18!");
			return false;
		} 
		else {
			show_error("Eres mayor de 18");
			return true;
		}
	}
	
	function verificarLocalización (){
		let paisEnviado = document.getElementById("contacto-pais").value;
		let img = document.getElementById("imagen-cat");

		console.log("País seleccionado:", paisEnviado);
		
		img.style.display = "none"

		if (paisEnviado === 'cat'){
			img.style.display = "block";
		}
	}