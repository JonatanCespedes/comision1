window.onload = function(){

    let qs = function(elemento){
        return document.querySelector(elemento)
    }

    alert('Bienvenidos a mi sitio')

    let avanzar = confirm('¿Estás segur@ de querer avanzar?')

    if(!avanzar){

        document.querySelector('.bienvenida h2').innerText = 'Lamentamos que no quieras continuar tu visita por este maravilloso sitio.'
        
    }else{

        document.querySelector('.bienvenida h2').innerText = 'Que alegría que quieras continuar con tu visita por este maravilloso sitio.'
        
        let nombre = prompt('Ingresá tu nombre')
        
        document.querySelector('h1').innerHTML = 'Bienvenid@' + ' ' + nombre 

        let edad = prompt('Ingresa tu edad')
        
        console.log(edad)
        
        if (Number(edad) <= 18){
            document.querySelector('.container-general').style.display = 'none'
            document.getElementById('accesoDenegado').style.display = 'block'
        
        }else{
            let hobbiesUser = prompt('Nos gustaría conocer sus hobbies.\nPor favor, coloquelos a continuación separados por comas( , )')
            let hobbies = hobbiesUser.split(',')
            
                if(hobbies.indexOf('programar','programacion','programación')){
                    alert('Que bueno que te guste la programación')
                    let listaHobbies = document.querySelector('article.hobbies')
                    console.log(listaHobbies)
                    hobbies.forEach(element => {
                    listaHobbies.innerHTML += '<ol>'+ element +'</ol>'
                    });
                    let fondoLike = document.querySelector('div .background-img')
                    fondoLike.classList.remove('background-img')
                    fondoLike.classList.add('background-img-like')
                }else{
                    alert('Que lástima que no te guste la programación')
                    let fondoLike = document.querySelector('div .background-img')
                    fondoLike.classList.remove('background-img')
                    fondoLike.classList.add('background-img-dislike')
                }
        }
    }
}

