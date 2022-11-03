window.addEventListener('load', function(){
    let title = document.getElementById('titulo')
    let gif = document.getElementById('gif')
    let url = document.getElementById('boton')
    
let randomGif = function(){   
fetch('https://api.giphy.com/v1/gifs/random?api_key=4ENEvVEk4ZQJcLnfebKKy14Onpxyq0ba&tag=&rating=g')
.then(function(response){
    return response.json()
})
.then(function(information){
    title.innerHTML = information.data.title;
    gif.src = information.data.images.original.url
})
.catch(function(error){
    consolelog('Error:' +  error)
})
} 

randomGif()

url.addEventListener('click', function(){
    
    gif.src = data.images.original.url
    
})


})
