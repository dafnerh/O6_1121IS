let result = '';
let palabra ="";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let number = 53;
    var i = 1;
    var l=1;
    var num1 = prompt("Ingrese un numero");
    for(i=1;i<=num1;i++){
        for(l=1;l<=num1;l++){
    result = Math.floor(Math.random() * number);
    result =characters.charAt(result);
    palabra = palabra + result;
       }
       console.log(palabra);
       palabra="";
    }