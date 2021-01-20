$('#confirma').click(function() {


	Swal.fire({
				title: 'Tu registro ha sido exitoso!!',	
				position: 'center',
				icon: 'success',				
				confirmButtonText: 'Ok',
				}).then((result) => {
				 if (result.isConfirmed) {
				    window.location.href='index.html';
				  } 
				})
});

