let amigos = ['Jose', 'Marcos', 'Flavia', 'Daniela'];

let amigosJSON = JSON.stringify(amigos); //Stringify convierte el array dado en un string formato JSON.

console.log(amigosJSON);

let amigosOriginal = JSON.parse(amigosJSON); // Devuelve el array original, o sea, convierte el archivo en formato JSON en un array. 

console.log(amigosOriginal); 

let persona = {
    nombre: 'Alan',
    apellido: 'Rios',
    edad: 28,
    ciudad: 'Avellaneda'
};

let personaJSON = JSON.stringify(persona);

console.log(personaJSON);

let personaOriginal = JSON.parse(personaJSON);

console.log(personaOriginal);

/*
Estructura json genérica

{
    "propiedad1" : "valor",
    "propiedad2" : "valor"
}

Ejemplo de estructura json simple

{
    "id": 1,
    "nombre": "Luke",
    "apellido": "Skywalker",
    "edad": 19
}


Ejemplo de estructura json más avanzada

{
    "provincias": [
        {
            "nombre": "Santiago del Estero",
            "id": "86",
            "centroide": {
                "lat": -27.782412,
                "lon": -63.252387
            }
        }
    ],
    "cantidad": 1,
    "total": 1,
    "inicio": 0,
    "parametros": { ... }
}

Array de elementos en formato json
[
    {
        "id": 1,
        "nombre": "Luke",
        "apellido": "Skywalker",
        "edad": 19,
        "password": "$2y$10$Hd35v8se0MIYhdzyeiCXuej8T5j6yNmgWWJSWJowLgelMFvSiqevq"
    },
    {
        "id": 2,
        "nombre": "Leia",
        "apellido": "Organa",
        "edad": 19,
        "password": "$2y$10$pMuPiJ3dOvFw4Jzbl4cpJu59QggCNdterkHjdYn2.ThIPtVKWuiHy"
    }
] 
 */