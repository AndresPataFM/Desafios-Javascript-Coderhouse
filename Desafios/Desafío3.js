function desafio3(){
    let esclavo =prompt("Ingrese el mensaje a ser repetido");
    for(let i=0; i<5; i++){
        let j = i+1
        console.log(`Repetición ${j}: ${esclavo}`)
    }
}