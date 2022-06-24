//Orden de compras

//Crear un programa que tome la orden de compra de un local. 
//Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, 
//mostrar el valor total de la compra y 
//preguntar en cuántas cuotas desea realizar el pago. 
//Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.


const producto1 = 200; Number(prompt("Ingrese el producto que desea comprar"));
const cant1 = Number(prompt("Ingrese la cantidad que desea comprar"));
const producto2 = 300; Number(prompt("Ingrese el producto que desea comprar"));
const cant2 = Number(prompt("Ingrese la cantidad que desea comprar"));
const producto3 = 400; Number(prompt("Ingrese el producto que desea comprar"));
const cant3 = Number(prompt("Ingrese la cantidad que desea comprar")); 
alert (`El valor total de la compra es: $${producto1*cant1 + producto2*cant2 + producto3*cant3}`)
const cuotas = Number(prompt(`¿En cuántas cuotas desea realizar el pago?`));
alert (`Producto 1: $${producto1}, cantidad de unidades: ${cant1}; 
Producto 2: $${producto2}, cantidad de unidades: ${cant2}; 
Producto 3: $${producto3}, cantidad de unidades: ${cant3}.
Valor de la compra: $${producto1*cant1 + producto2*cant2 + producto3*cant3}. La cantidad de cuotas es ${cuotas}.
El valor de cada cuota es $${(producto1*cant1 + producto2*cant2 + producto3*cant3)/cuotas}.`);




