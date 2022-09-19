// ***************************** //
//----------Order ------------//
// ***************************** //

const calculadora=document.querySelector(".calculadora");
const ejercicio1=document.querySelector(".registro");
const ejercicio2=document.querySelector(".grados");
const ejercicio3=document.querySelector(".triangulos");
const ejercicio4=document.querySelector(".maestros");
const ejercicio5=document.querySelector(".figuras");
const ejercicio6=document.querySelector(".formulario");

document.getElementById("0").addEventListener("click", function fun(){ orden(0) });
document.getElementById("1").addEventListener("click", function fun(){ orden(1) });
document.getElementById("2").addEventListener("click", function fun(){ orden(2) });
document.getElementById("3").addEventListener("click", function fun(){ orden(3) });
document.getElementById("4").addEventListener("click", function fun(){ orden(4) });
document.getElementById("5").addEventListener("click", function fun(){ orden(5) });
document.getElementById("6").addEventListener("click", function fun(){ orden(6) });

function orden(numero){
    if (numero==1) {
        calculadora.style.setProperty("display","none");
        ejercicio1.style.setProperty("display","flex");
        ejercicio2.style.setProperty("display","none");
        ejercicio3.style.setProperty("display","none");
        ejercicio4.style.setProperty("display","none");
        ejercicio5.style.setProperty("display","none");
        ejercicio6.style.setProperty("display","none");
    }else if (numero==2) {
        calculadora.style.setProperty("display","none");
        ejercicio1.style.setProperty("display","none");
        ejercicio2.style.setProperty("display","flex");
        ejercicio3.style.setProperty("display","none");
        ejercicio4.style.setProperty("display","none");
        ejercicio5.style.setProperty("display","none");
        ejercicio6.style.setProperty("display","none");
    }else if (numero==3) {
        calculadora.style.setProperty("display","none");
        ejercicio1.style.setProperty("display","none");
        ejercicio2.style.setProperty("display","none");
        ejercicio3.style.setProperty("display","flex");
        ejercicio4.style.setProperty("display","none");
        ejercicio5.style.setProperty("display","none");
        ejercicio6.style.setProperty("display","none");
    }else if (numero==4) {
        calculadora.style.setProperty("display","none");
        ejercicio1.style.setProperty("display","none");
        ejercicio2.style.setProperty("display","none");
        ejercicio3.style.setProperty("display","none");
        ejercicio4.style.setProperty("display","flex");
        ejercicio5.style.setProperty("display","none");
        ejercicio6.style.setProperty("display","none");
    }else if (numero==5) {
        calculadora.style.setProperty("display","none");
        ejercicio1.style.setProperty("display","none");
        ejercicio2.style.setProperty("display","none");
        ejercicio3.style.setProperty("display","none");
        ejercicio4.style.setProperty("display","none");
        ejercicio5.style.setProperty("display","flex");
    }else if (numero==0) {
        calculadora.style.setProperty("display","flex");
        ejercicio1.style.setProperty("display","none");
        ejercicio2.style.setProperty("display","none");
        ejercicio3.style.setProperty("display","none");
        ejercicio4.style.setProperty("display","none");
        ejercicio5.style.setProperty("display","none");
        ejercicio6.style.setProperty("display","none");
    }else if (numero==6) {
        calculadora.style.setProperty("display","none");
        ejercicio1.style.setProperty("display","none");
        ejercicio2.style.setProperty("display","none");
        ejercicio3.style.setProperty("display","none");
        ejercicio4.style.setProperty("display","none");
        ejercicio5.style.setProperty("display","none");
        ejercicio6.style.setProperty("display","flex");
}
}

// ***************************** //
//----------Ejercicio-1 ------------//
// ***************************** //

function letras(numero) {
    let name = document.getElementById("name").value;
    if (name == "") {
        alert("Digite su nombre primero");
    } else {
        switch (numero) {
            case 1:
                alert(name.toUpperCase());
                console.log("Mayusculas");
                break;
            case 2:
                alert(name.toLowerCase());
                console.log("Minusculas");
                break;
            case 3:
                alert(name.length);
                console.log("Longitud");
                break;
            case 4:
                alert(name.charAt());
                console.log("Primera letra");
                break;
            default:
                break;
        }
    }
}

let boton1 = document.getElementById("ma")
boton1.addEventListener("click", function fun() { letras(1) });
let boton2 = document.getElementById("mi")
boton2.addEventListener("click", function fun() { letras(2) });
let boton3 = document.getElementById("lon")
boton3.addEventListener("click", function fun() { letras(3) });
let boton4 = document.getElementById("le")
boton4.addEventListener("click", function fun() { letras(4) });

// ***************************** //
//----------Ejercicio-2 ------------//
// ***************************** //

function grados(numero) {
    let grado = document.getElementById("grado").value;
    switch (numero) {
        case 1:
            //c a f
            respuesta = (((parseFloat(grado)) * 9) / 5) + 32;
            alert(grado + " grados Celsius son " + respuesta + " grados Fahrenheit");
            break;
        case 2:
            //c a k
            respuesta = (parseFloat(grado)) + 273.15;
            alert(grado + " grados Celsius son " + respuesta + " grados Kelvin");
            break;
        case 3:
            //f a c
            respuesta = (((parseFloat(grado)) - 32) * 5) / 9;
            alert(grado + " grados Fahrenheit son " + respuesta + " grados Celsius");
            break;
        case 4:
            //f a k
            respuesta = ((((parseFloat(grado)) - 32) * 5) / 9) + 273.15;
            alert(grado + " grados Fahrenheit son " + respuesta + " grados Kelvin");
            break;
        case 5:
            //k a c
            respuesta = (parseFloat(grado)) - 273.15;
            alert(grado + " grados Kelvin son " + respuesta + " grados Celsius");
            break;
        case 6:
            //k a f
            respuesta = (((parseFloat(grado)) - 273.15) * 9) / 5 + 32;
            alert(grado + " grados Kelvin son " + respuesta + " grados Fahrenheit");
            break;
        default:
            // igual
            alert(grado + " grados");
            break;
    }
}

let calgrados = document.getElementById("calgrados").addEventListener("click", congrados);

function congrados() {
    let agrados = document.getElementById("agrados").value;
    let degrados = document.getElementById("degrados").value;
    if (agrados == "C") {
        if (degrados == "F") {
            grados(1);
        } else if (degrados == "K") {
            grados(2);
        } else {
            grados();
        }
    }
    if (agrados == "F") {
        if (degrados == "C") {
            grados(3);
        } else if (degrados == "K") {
            grados(4);
        } else {
            grados();
        }
    }
    if (agrados == "K") {
        if (degrados == "C") {
            grados(5);
        } else if (degrados == "F") {
            grados(6);
        } else {
            grados();
        }
    }
}
// ***************************** //
//----------Ejercicio-3 ------------//
// ***************************** //
function tipoTriangulo() {
    let lado1 = parseFloat(document.getElementById("lado1").value);
    let lado2 = parseFloat(document.getElementById("lado2").value);
    let lado3 = parseFloat(document.getElementById("lado3").value);

    if (lado1 > 0 && lado2 > 0 && lado3 > 0) {
        if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) {
            alert("Es un triangulo Equilátero, todos sus lados son iguales");
        } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
            alert("Es un triangulo Isósceles, 2 lados del triangulo son iguales");
        } else {
            alert("Es un triangulo Escaleno, todos sus lados son diferentes");
        }
    }else{
        alert("Ingrese todos lados del triangulo");
    }
}
let caltriangulo = document.getElementById("caltriangulo").addEventListener("click", tipoTriangulo);

// ***************************** //
//----------Ejercicio-4 ------------//
// ***************************** //

function maestro(){
    let nombre = document.getElementById("nomaestro").value;
    let apellido = document.getElementById("apemaestro").value;
    let actividad = document.getElementById("actmaestro").value;

    if (nombre == "A" && apellido == "A" && actividad == "A") {
        alert("La respuesta es correcto");
    } else if (nombre == "B" && apellido == "B" && actividad == "B") {
        alert("La respuesta es correcto");
    } else if (nombre == "C" && apellido == "C" && actividad == "C") {
        alert("La respuesta es correcto");
    } else if (nombre == "D" && apellido == "D" && actividad == "D") {
        alert("La respuesta es correcto");
    } else if (nombre == "E" && apellido == "E" && actividad == "E") {
        alert("La respuesta es correcto");
    } else if (nombre == "F" && apellido == "F" && actividad == "F") {
        alert("La respuesta es correcto");
    } else {
        alert("La respuesta es incorrecto");
    }
}

let calmaestro = document.getElementById("calmaestro").addEventListener("click", maestro);

// ***************************** //
//----------Ejercicio-5 ------------//
// ***************************** //
function boton(numero){
    if (numero==1) {
        modal.style.setProperty("display","flex");
        cuadrado.style.setProperty("display","flex");
        triangulo.style.setProperty("display","none");
        rectangulo.style.setProperty("display","none");
        circulo.style.setProperty("display","none");
    }else if (numero==2) {
        modal.style.setProperty("display","flex");
        cuadrado.style.setProperty("display","none");
        triangulo.style.setProperty("display","flex");
        rectangulo.style.setProperty("display","none");
        circulo.style.setProperty("display","none");
    }else if (numero==3) {
        modal.style.setProperty("display","flex");
        cuadrado.style.setProperty("display","none");
        triangulo.style.setProperty("display","none");
        rectangulo.style.setProperty("display","flex");
        circulo.style.setProperty("display","none");
    }else if (numero==4) {
        modal.style.setProperty("display","flex");
        cuadrado.style.setProperty("display","none");
        triangulo.style.setProperty("display","none");
        rectangulo.style.setProperty("display","none");
        circulo.style.setProperty("display","flex");
    }
}

function perimetros(numero){
    if (numero==1) {
        ladc=parseFloat(document.getElementById("ladc").value);
        perimetro=ladc+ladc+ladc+ladc;
        alert("El perimetro es: "+perimetro);
    }else if (numero==2) {
        ladt1=parseFloat(document.getElementById("ladt1").value);
        ladt2=parseFloat(document.getElementById("ladt2").value);
        ladt3=parseFloat(document.getElementById("ladt3").value);
        perimetro=ladt1+ladt2+ladt3;
        alert("El perimetro es: "+perimetro);
    }else if (numero==3) {
        lad1r=parseFloat(document.getElementById("lad1r").value);
        lad2r=parseFloat(document.getElementById("lad2r").value);
        perimetro=lad1r+lad1r+lad2r+lad2r;
        alert("El perimetro es: "+perimetro);
    }else if (numero==4) {
        radio=parseFloat(document.getElementById("radio").value);
        perimetro=2*3.1416*radio;
        alert("El perimetro es: "+perimetro);
    }
}
const modal=document.querySelector(".modal");
const cuadrado=document.querySelector(".modal-cuadrado");
const triangulo=document.querySelector(".modal-triangulo");
const rectangulo=document.querySelector(".modal-rectangulo");
const circulo=document.querySelector(".modal-circulo");

let perimetrocu = document.getElementById("perimetrocu")
perimetrocu.addEventListener("click",  function fun() { perimetros(1) });
let perimetrot = document.getElementById("perimetrot")
perimetrot.addEventListener("click", function fun(){ perimetros(2) });
let perimetror = document.getElementById("perimetror")
perimetror.addEventListener("click", function fun(){ perimetros(3) });
let perimetroc = document.getElementById("perimetroc")
perimetroc.addEventListener("click", function fun(){ perimetros(4) });

let x = document.getElementById("cerrar").addEventListener("click", function fun(){ 
    modal.style.setProperty("display","none");
});

let perimetroCuadrado = document.getElementById("perimetroCuadrado").addEventListener("click",  function fun() { boton(1) });
let perimetroTriangulo = document.getElementById("perimetroTriangulo").addEventListener("click",  function fun() { boton(2) });
let perimetroRectangulo = document.getElementById("perimetroRectangulo").addEventListener("click",  function fun() { boton(3) });
let perimetroCirculo = document.getElementById("perimetroCirculo").addEventListener("click",  function fun() { boton(4) });

