let number = 10;
let index = 0;
while(index < number) {
    console.log(index);
    index++;
}

for (let i = 0; i < number; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

const edad = 17;
const minoria = 18;
if (edad >= minoria) {
    console.log("Adelante");
} else {
    console.log("Eres menor de edad");
}