window.onload = function(){
    /*console.log(window)

    let titulo = document.querySelector('#titulo')
    let subtitulo = document.getElementById('subtitulo')
    let ul = document.querySelector('ul')
    let lista = document.getElementsByClassName('list')
    let btnOscuro = document.getElementById('btn-oscuro')
    let linkGoogle = document.querySelector('a');
    let inputPrueba = document.getElementById('input-prueba')
    titulo.style.color = "red";
    titulo.style.textAlign = 'center';

    btnOscuro.onclick =function(){
        titulo.classList.add('display-1')
        titulo.style.color = 'Blue'
    }

    
    let intervalo = setInterval(() => {
        alert('pasaron 3 segundos')
    }, 3000);

    setTimeout(() => {
       clearInterval(intervalo) 
    }, 6000);

    inputPrueba.onkeydown = function (e){
        console.log('se apreto' + e.key) //devuelve la tecla que se apretó
    }
    
   // inputPrueba.onkeydown = function (e){
   //     console.log(e) //devuelve la tecla que se apretó
    //}

    linkGoogle.addEventListener('click', (e) => {
        e.preventDefault()
        console.log('no me fui')
    })

    titulo.onmouseover = function(){
        titulo.style.color = 'green'
    }*/


    let form = document.querySelector('form')
    let inputNombre = document.getElementById('nombre')
    let inputApellido = document.getElementById('apellido')
    let inputEmail = document.getElementById('email')
    let inputPass = document.getElementById('password')
    let inputBtn = document.getElementById('btn')
    
   function validateInputs(){

        let errores = [];

        if(inputNombre.value.length < 3){
            errores.push('Este input tiene que tener al menos 3 carateres')
        }
        if(inputApellido.value.length < 3){
            errores.push('Este input tiene que tener al menos 3 carateres')
        }


   }




}