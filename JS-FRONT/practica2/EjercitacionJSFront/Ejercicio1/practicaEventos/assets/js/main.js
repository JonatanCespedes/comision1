window.onload = ()=>{
    alert('JS Vinculado')

    let btn_abracadabra = document.getElementById('abracadabra')
    btn_abracadabra.onclick = ()=>{
        let nombre = prompt('Por favor, ingrese su nombre')

        let tituloNombre = document.querySelector('strong')
        tituloNombre.innerHTML = nombre 
    }
}