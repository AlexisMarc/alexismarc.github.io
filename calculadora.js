// ***************************** //
//-----------Calculadora---------//
// ***************************** //
let number = '0', number2 = '0', operacion="", resultado;
function numero(numero){
    if(operacion==""){
        number=parseInt(number+numero);
        console.log(number);
        document.getElementById("total").setAttribute("value", number);
    }else{
        number2=parseInt(number2+numero);
        console.log(number2);
        document.getElementById("total").setAttribute("value", number+operacion+number2);
    }
    
}
function signo(signo){
    if(number2=="0"){
        if(operacion==""){
            operacion=signo;
            console.log(operacion);
            document.getElementById("total").setAttribute("value", number+operacion);
        }else{
            alert("Una operación a la vez");
        }
    }else{
        alert("Digite un numero primero");
    }
}
function calcular(){
    if(number2=="0"){
        alert("Digite el siguiente numero");
    }else{
        switch (operacion) {
            case "/":
                resultado=number/number2;
                console.log(resultado);
                break;
            case "*":
                resultado=number*number2;
                console.log(resultado);
                break;
            case "-":
                resultado=number-number2;
                console.log(resultado);
                break;
            case "+":
                resultado=number+number2;
                console.log(resultado);
                break;
            default:
                alert("Ohh!! Ocurrio un error...");
                break;
        }

        document.getElementById("total").setAttribute("value", resultado);
        number = '0';
        number2 = '0';
        operacion="";
    }
}