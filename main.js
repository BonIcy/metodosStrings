/* 
METODOS  DE STRINGS:

toLowerCase() toUpperCase() raw()

El método toLowerCase() convierte una cadena en letras minúsculas.
El método toLowerCase() no cambia la cadena original.

toUpperCase() convierte una cadena de letras en mayusculas.
toUpperCase() no cambia la cadena original.

La función de etiqueta String.raw se puede usar con literales de plantilla para acceder a una versión de su contenido sin interpretar ninguna secuencia de escape de barra invertida.
String.raw`\n` contendrá una barra invertida y la letra n minúscula, mientras que `\n` o '\n' contendrán un solo carácter de nueva línea.
*/
let txt = "Viva Cristo rey";
let lower = txt.toLowerCase(); // se muestra todo en minusculas: "viva cristo rey"

let txto = "Viva Cristo rey";
let upper = txto.toUpperCase(); // se muestra todo en mayusculas: "VIVA CRISTO REY"

String.raw`Hi\n${2+3}!`;
// 'Hi\\n5!', el carácter después de 'Hi' no es un carácter de nueva línea,
// '\' y 'n' son 2 caracteres.

String.raw`Hi\u000A!`;
// 'Hi\\u000A!' lo mismo aquí, esta vez obtendremos el \, u, 0, 0, 0, A, 6 caracteres.}
/* Todos los tipos de caracteres de escape serán ineficaces y las barras invertidas estarán presentes en la cadena de salida.*/
// Puede confirmar esto comprobando la propiedad .length de la cadena.

let name = 'Bob';
String.raw`Hi\n${name}!`;
// 'Hi\\nBob!', substitutions are processed.

// Normalmente no llamarías a String.raw() como una función, pero puedes hacerlo:
String.raw({ raw: 'test' }, 0, 1, 2);
// 't0e1s2t'