function desafio2(){
    let peliDinamica = prompt("Bienvenido al cine Nosenombrarcosas. ¿Qué película desea ver?");
    let peliTest = peliDinamica.toLowerCase(); //uso esto asi puedo devolver la peli como la escribieron
    let peli1 = "jurassic park";
    let peli2 = "el padrino";
    let peli3 = "terminator";
    if(peliTest == peli1 || peliTest == peli2 || peliTest == peli3){
        let ticket = Number(prompt(`¿Cual es su número de ticket para ver ${peliDinamica}?`))
        if(isNaN(ticket)){
            alert("Por favor ingrese un número.");
        } else if (ticket<1 || ticket>60){
            alert(`Lo lamento, pero ${ticket} no es un número de ticket válido, intente nuevamente`);
        } else if (ticket>40){
            alert(`Su butaca de número ${ticket} para la función ${peliDinamica} se encuentra al fondo de la sala.`);
        } else if (ticket>20){
            alert(`Su butaca de número ${ticket} para la función ${peliDinamica} se encuentra a la mitad de la sala.`);
        } else {
            alert(`Su butaca de número ${ticket} para la función ${peliDinamica} se encuentra al principio de la sala.`);
        };
    } else {
        alert(`Lo lamento, pero ${peliDinamica} no esta en función.`)
    };
}