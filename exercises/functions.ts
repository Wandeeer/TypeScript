function op(a, b, op) {
    switch(op) {
        case 1:
            return console.log(a + b);
        case 2:
            return console.log(a - b);
        case 3:
            return console.log(a * b);
        case 4:
            return console.log(a / b);
        default:
            console.log("Opcion invalida");
            return;
    }
}

op(23, 2, 4)

// Rescribir la funcion en funcion flecha

let arrow_op = (a, b) => { return console.log(a + b) }

arrow_op(20, 8);