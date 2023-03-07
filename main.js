/* 
METODOS  DE STRINGS:

charAt()


El método charAt() devuelve el carácter en un índice especificado (posición) en una cadena.

El índice del primer carácter es 0, el segundo 1, ...
 
(El que viene por defecto en casi de dejar el charAt() vacio, sera la posicion 0)
Examples (En ingles este jaja):

    Get the first character in a string:
    let text = "HELLO WORLD";
    let letter = text.charAt(0);

    Get the second character in a string:
    let text = "HELLO WORLD";
    let letter = text.charAt(1);

    Get the last character in a string:
    let text = "HELLO WORLD";
    let letter = text.charAt(text.length-1);
 */

const ejemplo = "Jesus es el mas lindo"; //(Constante porque asi es y será siempre)
let caracter = ejemplo.charAt(6); //se muestra la "e" de la palabra "es" que le sigue a "Jesus"
let caracter2 = ejemplo.charAt(-2); //se muestra la "d" de la palabra "lindo" ya que en negativo empieza desde la ultima de derecha a izquierda
