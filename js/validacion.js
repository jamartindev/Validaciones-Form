function validarFormulario() {
  // Obtengo los valores de los campos del formulario
  let userNombre = document.getElementById("userNombre").value;
  let userApellido = document.getElementById("userApellido").value;
  let userEmail = document.getElementById("userEmail").value;
  let userPassword1 = document.getElementById("userPassword1").value;
  let userPassword2 = document.getElementById("userPassword2").value;
  let userTerminos = document.getElementById("userTerminos").checked;

  // Validaciones
  if (
      userNombre.trim() === "" ||
      userApellido.trim() === "" ||
      userEmail.trim() === "" ||
      userPassword1.trim() === "" ||
      userPassword2.trim() === ""
  ) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ningún campo puede estar vacío',
      });
      return false;
  }

  if (!validarEmail(userEmail)) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'El Email debe de ser valido',
      });
      return false;
  }

  if (userPassword1.length < 6) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'La contraseña debe tener un minimo de 6 caracteres',
      });
      return false;
  }

  if (userPassword1 !== userPassword2) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Las contraseñas no coinciden',
      });
      return false;
  }

  if (!userTerminos) {
      Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Debes aceptar los términos y condiciones',
      });
      return false;
  }

  // Si todas las validaciones pasan, se envía el formulario
  Swal.fire({
      icon: 'success',
      title: 'Registro exitoso',
      text: '¡Tu registro ha sido exitoso!',
  });

  console.log("enviado!");
  return true;
}

function validarEmail(email) {
  // Expresión regular para validar el formato del email
  let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}