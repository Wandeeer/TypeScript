enum Nivel {
    Bajo = 20,
    Medio = 50,
    Alto = 100
}

function showNivel(n: Nivel): void {
    // la verdad esque no le veo mucho caso en este ya que se podria acer
    // fuera de la funcion pero no, se puede usar para validar, usarlo en calculos etc.

    // un ejemplo seria el del if
    if(n == Nivel.Bajo) {
        // aqui podemos hacer lo que queramos
        console.log("El nivel es el mas bajo");
        // y asi con todos los demas
    }

    console.log(n);
}

let nivel1: Nivel = Nivel.Bajo;
let nivel2: Nivel = Nivel.Medio;
let nivel3: Nivel = Nivel.Alto;

showNivel(nivel1);
showNivel(nivel2);
showNivel(nivel3);