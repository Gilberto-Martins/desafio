let max = parseInt(gets());

for(let i = 0; i < max; i++){
    let pars = gets().split(" ");
    let X = parseInt(pars[0]);
    let Y = parseInt(pars[1]);

    if (Y != 0 && Y > 0){
        let div = parseFloat(X / Y).toString(1);
        console.log(div)
    } else{
        console.log("Divisão Impossivel!!!");
    }
}