
var login = function() {

	return {
		init: function(){
			$('#idParse').on('click', function(){
    	
		
				var respuesta = $('#btnRedc').val();
				try {
					var esNumerico = parseInt(respuesta);
					

					if( null === respuesta.trim()  || respuesta.trim() === ''){
						$( "#dialog" ).dialog();
					}else if(isNaN(esNumerico)){
						console.log("NO es numerico")
						location.href = "actualizacion.html";
					}else{
						console.log("es numerico")
						location.href = "beyond/index.html";
					}
					
					
				 }
				 catch (e) {
					
				}
		
		
			});
		}
	}
    

}();

document.addEventListener("DOMContentLoaded", function() {
	const steps = document.querySelectorAll(".form-step");
	let currentStep = 0;
  
	function showStep(step) {
	  steps.forEach((s, index) => {
		if (index === step) {
		  s.style.display = "block";
		} else {
		  s.style.display = "none";
		}
	  });
	}
  
	function nextStep() {
	  if (currentStep < steps.length - 1) {
		currentStep++;
		showStep(currentStep);
	  }
	}
  
	function prevStep() {
	  if (currentStep > 0) {
		currentStep--;
		showStep(currentStep);
	  }
	}
  
	document.querySelectorAll(".next-btn").forEach(btn => {
	  btn.addEventListener("click", nextStep);
	});
  
	document.querySelectorAll(".prev-btn").forEach(btn => {
	  btn.addEventListener("click", prevStep);
	});
  
	document.querySelectorAll(".option-btn").forEach(btn => {
	  btn.addEventListener("click", function() {
		const selectedOption = this.getAttribute("data-option");
		document.getElementById("step-0").style.display = "none";
		document.getElementById("step-" + selectedOption).style.display = "block";
		currentStep++;
	  });
	});
  
	document.querySelector(".validate-btn").addEventListener("click", function() {
	  // Aquí puedes agregar la lógica para validar la selección de opción
	  // Por ejemplo, puedes verificar si una opción ha sido seleccionada antes de pasar al siguiente paso
	  const selectedOption = document.querySelector(".option-btn:checked");
	  if (selectedOption) {
		nextStep();
	  } else {
		alert("Por favor, selecciona una opción antes de continuar.");
	  }
	});
  });