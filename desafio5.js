/*5. Factorial 
Escribe código que multiplique todos los valores del 1 al 12 en una variable producty, al final,
console.log dé como resultado  1 * 2 * 3 * ... * 10 * 11 * 12. Deberíamos obtener  479001600al final.*/

let mult=1
for(var i=1;i<=12;i++){
    mult*=i;
}
console.log(mult);