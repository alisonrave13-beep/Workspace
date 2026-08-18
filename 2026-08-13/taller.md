1) descripcion del comportamiento raro observado
r/ Al hacer clic en Ocultar reloj, el componente desaparece de la pantalla, pero en la consola se siguen imprimiendo los logs de Reloj tick, indefinidamente.

2) El número en pantalla sube a 1 en el primer segundo y se congela ahí. Sin embargo, la consola sigue imprimiendo Efecto del Contador automático ve el valor 0 cada segundo.

3) Al cambiar el tamaño de la ventana, la consola empieza a imprimir el mensaje múltiples veces por cada píxel de movimiento. Los eventos se acumulan exponencialmente.

4) Al presionar el botón "Usuario 2", el estado usuarioId del padre cambia correctamente, pero la pantalla sigue mostrando "Alan Turing". El console.log de la búsqueda no se vuelve a disparar.
 

