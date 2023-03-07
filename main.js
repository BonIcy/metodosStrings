/* 
METODOS  DE STRINGS:

charCodeAt()

El método charCodeAt() devuelve el Unicode del carácter en un índice especificado (posición) en una cadena.

El índice del primer carácter es 0, el segundo es 1, ....

El índice del último carácter es la longitud de la cadena - 1

(Lo mismo que el charAt() pero al reves jajajajajajaajajjaajaj)
*/
let ejemplo = "Recargame robux";
let posic = ejemplo.charCodeAt(4); //Aca e muestra el caracter que esta en la posicion indicada, en este caso, la "r" del medio de la palabra "Recargame"

let ejemplo2 = "Y el incentivo";
let posic2 = ejemplo2.charCodeAt(-3); ///Aca se muestra la ultima "i" de la palabra "Incentivo"