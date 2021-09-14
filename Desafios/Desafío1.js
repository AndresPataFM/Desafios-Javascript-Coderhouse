function desafio1A(){
    let valor1 = Number(prompt('Ingresa el primer número'));
    let valor2 = Number(prompt('Ingresa el segundo número'));
    
    let sumaValores = valor1+valor2;
    let restaValores = valor1-valor2;
    let multiplicarValores = valor1*valor2;
    let dividirValores = valor1+valor2;
    
    
    alert(
        `
        Al sumar los valores se obtiene ${sumaValores}.
        Al restar los valores se obtiene ${restaValores}.
        Al multiplicar los valores se obtiene ${multiplicarValores}.
        Al dividir gitlos valores se obtiene ${dividirValores}`
    );
};
function desafio1B(){
    let nombreDesafio1B = prompt("Por favor ingrese su nombre");
    let apellidoDesafio1B = prompt("Por favor ingrese su apellido");
    alert(`¡Hola ${nombreDesafio1B} ${apellidoDesafio1B}!`);
};