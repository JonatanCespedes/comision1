let qs = function(elemento){
    return document.querySelector(elemento)
}

window.addEventListener('load', function(){

    console.log('Js vinculado')

    let formulario = qs('form#registro')

    let inputNombre = qs('#nombre');
    let inputApellido = qs('#apellido');
    let inputDni = qs('#dni');
    let inputEmail = qs('#email');
    let inputPass = qs('#pass');
    let inputPass2 = qs('#pass2');
    let inputFecha = qs('#fecha');
    let selectSexo = qs('#sexo');
    let inputFoto = qs('#foto');
    let textComentario = qs('#comentario');

    let errores = {};
    let regExDNI = /^[0-9]{8}$/
    let regExEmail =  /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]:+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/;
    let regExPass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/;




    inputNombre.addEventListener('blur', function(){
        switch (true) {
            case this.value.length == 0:
                errores.nombre = 'El campo nombre es obligatorio';
                errorNombre.innerHTML = errores.nombre
                this.classList.add('is-invalid')
                break;
            case this.value.length <= 2:
                errores.nombre = 'El campo nombre debe tener al menos 3 letras';
                errorNombre.innerHTML = errores.nombre
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorNombre.innerHTML = ''
                break;
        }
    })

    inputApellido.addEventListener('blur', function(){
        switch (true) {
            case this.value.length == 0:
                errores.apellido = 'El campo apellido es obligatorio';
                errorApellido.innerHTML = errores.apellido
                this.classList.add('is-invalid')
                break;
            case this.value.length <= 2:
                errores.apellido = 'El campo nombre debe tener al menos 3 letras';
                errorApellido.innerHTML = errores.apellido
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorApellido.innerHTML = ''
                break;
        }
    })

    inputDni.addEventListener('blur', function(){
        switch (true) {
            case this.value.length == 0:
                errores.dni = 'El campo dni es obligatorio';
                errorDni.innerHTML = errores.dni
                this.classList.add('is-invalid')
                break;
            case !regExDNI.test(this.value):
                errores.dni = 'Debes escribir un DNI válido';
                errorDni.innerHTML = errores.dni
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorDni.innerHTML = ''
                break;
        }
    })  

    inputEmail.addEventListener('blur', function(){
        switch (true) {
            case this.value.length == 0:
                errores.email = 'El campo email es obligatorio';
                errorEmail.innerHTML = errores.email
                this.classList.add('is-invalid')
                break;
            case !regExEmail.test(this.value):
                errores.email = 'Debes escribir un Email válido';
                errorEmail.innerHTML = errores.email
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorEmail.innerHTML = ''
                break;
        }
    })  

    inputPass.addEventListener('blur', function(){
        switch (true) {
            case this.value.length == 0:
                errores.pass = 'El campo contraseña es obligatorio';
                errorPass.innerHTML = errores.pass
                this.classList.add('is-invalid')
                break;
            case !regExPass.test(this.value):
                errores.pass = 'La contraseña debe tener: entre 6 o 12 caracteres, al menos una mayúscula, una minúscula y un número';
                errorPass.innerHTML = errores.pass
                this.classList.add('is-invalid')
                break;
            default:
                this.classList.remove('is-invalid');
                this.classList.add('is-valid');
                errorPass.innerHTML = ''
                break;
        }
    })  

    inputPass2.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.pass2 = "La verificación de contraseña es obligatorio"
                errorPass2.innerHTML = errores.pass2;
                this.classList.add('is-invalid')
            break
            case this.value != inputPass.value:
                errores.pass2 = "Las contraseñas no coinciden"
                errorPass2.innerHTML = errores.pass2;
                this.classList.add('is-invalid')
            break;
            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorPass2.innerHTML = "";
        }
    })

    inputFecha.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.fecha = "Debe ingresar su fecha de nacimiento"
                errorFecha.innerHTML = errores.fecha;
                this.classList.add('is-invalid')
            break
            case moment(inputFecha.value)>moment():
                errores.fecha = "Fecha inválida"
                errorFecha.innerHTML = errores.fecha;
                this.classList.add('is-invalid')
            break
            case moment().diff(moment(inputFecha.value),'years')<18:
                errores.fecha = "Debes ser mayor de edad"
                errorFecha.innerHTML = errores.fecha;
                this.classList.add('is-invalid')
            break
           
            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFecha.innerHTML = "";
        }
    })

    inputFoto.addEventListener('blur',function(){
        switch (true) {
            case this.value == "":
                errores.foto = "Este campo es obligatorio"
                errorFoto.innerHTML = errores.foto;
                this.classList.add('is-invalid')
            break
            default:
            this.classList.remove('is-invalid');
            this.classList.add('is-valid');
            errorFoto.innerHTML = "";
        }
    })

    formulario.addEventListener('submit',function(event){
        let error = false
        event.preventDefault()

        let elementosForm = this.elements
        
        for (let index = 0; index < elementosForm.length-1; index++) {
            if(elementosForm[index].value == ""){
                elementosForm[index].classList.add('is-invalid');
                msgError.innerHTML = "Los campos señadados son obligatorios";
                error =true
            }
        }
        if(!error){
            console.log("Todo Perfecto!!");
            formulario.submit()
        }
        
    })



})