# 5. Delegación de Eventos (Event Delegation)

Gracias a que los eventos **burbujean** (Fase 3: Bubbling Phase), podemos usar un patrón de arquitectura extremadamente eficiente llamado **Delegación de Eventos**.

## El Problema
Imagina que tienes una lista `<ul>` con 1,000 elementos `<li>` y quieres que al hacer clic en cualquiera de ellos pase algo.
La aproximación de novato es iterar (con un `forEach`) y añadir un `addEventListener` a cada uno de los 1,000 `<li>`. 

**Inconvenientes:**
1. Alto consumo de memoria (1,000 listeners).
2. Si añades un `<li>` nuevo al DOM después dinámicamente, ¡no tendrá el evento! Tendrías que asignárselo manualmente tras crearlo.

## La Solución: Delegación
Consiste en añadir **un único** listener al elemento padre (`<ul>`).
Como los clics en los `<li>` suben (burbujean) inevitablemente hacia el `<ul>`, el listener del padre los interceptará todos.

Solo necesitamos verificar dentro de la función si el clic ocurrió realmente en un `<li>` usando `event.target`.

```javascript
// Único listener en el padre
document.querySelector('ul').addEventListener('click', function(event) {
    // Verificamos el nodo que originó el evento
    if (event.target.tagName === 'LI') {
        console.log("Hiciste clic en el item:", event.target.textContent);
    }
});
```

**Ventajas de la Delegación:**
1. Consumo de memoria mínimo (1 solo listener).
2. Funciona automáticamente para elementos insertados en el DOM en el futuro (Elementos Dinámicos).
3. Escribes mucho menos código de mantenimiento.
