## Información general del proyecto
Se implementó una solución basada en Next.js con un enfoque en la simpleza y la practicidad. Se omitió usar dependencias que no sean totalmente necesarias o que no aporten un alto valor.

## Mejoras a futuro
- La implementación de los comentarios se realizó en el localStorage. Esta es una solución muy poco robusta, y se podría mejorar en algo mucho mas robusto. Por ejemplo hacer un backend con unos pocos servicios simples que gestionen los comentarios.
- Lo mismo sucede con los favoritos. Se usó el localstorage, pero con un servicio simple se podría mejorar mucho.
- El uso de emotion para los estilos se podría reestructurar y mejorar mucho la implementación. Sobretodo reutilizar estilos que se repiten mucho. Hace falta un grán refactor, pero se priorizaron otras cosas por sobre esta.
- En la búsqueda se implemento un sistema de debounce a fin de evitar que se dispare una consulta a la api por cada input del usuario. El debounce implementado se podría reemplazar por alguna libreria (lodash o ramda) que esté mas testeada y que abarque mas casos de uso. El implementado es muy básico.
- Los test unitarios se implementarón solo en /lib. Por priorizar tiempos se decidió no cubrir más coverage

## Dependencias
- mui/material: UI library
- emotion: CSS-in-JS 
- jest: Tests unitarios

## Instalación
1. npm install
2. npm run dev