//Corrija la tarea de su alumno

// Definir la función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
  // Usar la fórmula A = π * r^2 para calcular el área
  var area = Math.PI * Math.pow(radio, 3);
  return area;
}

// Ejemplo de uso de la función
var radioCirculo = 5;
var areaDelCirculo = calcularAreaCirculo(radioCirculo);

// Mostrar el resultado en la consola
console.log("El área del círculo con radio " + radioCirculo + " es: " + areaDelCirculo);

