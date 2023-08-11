/* function fullName (nombre, apellido){
    return nombre + ' ' + apellido
}

fullName('Cesar', 'Moreno')
console.log(fullName('Juan', 'Riquelme')) */

/* let respuesta

while (respuesta != '4') {
    let pregunta = prompt('¿cuanto es 2 + 2')
    respuesta = pregunta;
} */

/* function imprimirElemento(array) {
    for (let i = array.length; i = 0; i--) {
        console.log(array[i])

    }
    
}

imprimirElemento(['Juan', 'Yerson', 'Carlos', 'Gabriel']) */

/* const obj = {
    nombre: 'fulanito',
    edad: 3,
    comidasFavoritas: ['arroz', 'carne', 'sopa']
};

const array = Object.values(obj)

console.log(array) */

//Manipulacion DOM desde JS
 
/* const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(h1)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

/* h1.innerHTML = 'patito <br> feo'
console.log(h1.setAttribute('class', 'rojo')) */

/* h1.classList.add('rojo')
h1.classList.remove('verde') 

input.value= "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://caracoltv.brightspotcdn.com/dims4/default/6edbc6e/2147483647/strip/true/crop/576x540+0+0/resize/576x540!/quality/90/?url=http%3A%2F%2Fcaracol-brightspot.s3.amazonaws.com%2Fe0%2F09%2F7f67aeb64cbb88695548b4d8299b%2Fdavid-ospina.png');

pid.append(img); */

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const inputimp = document.querySelector('#impresion');
const btn = document.querySelector('#btnCalcular');
const form = document.getElementById('formulario')

form.addEventListener('submit', SumarInputs);

function SumarInputs (event) {
    event.preventDefault();
    const suma = Number(input1.value) + Number(input2.value)
    inputimp.value = suma
}