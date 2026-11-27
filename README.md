# MetaNutrición

App web gratuita del programa de hábitos alimentarios de 12 semanas. Es un único `index.html` sin servidor, publicado con GitHub Pages.

- Modo coach: abre la app desde un dispositivo con tu clave de coach para crear planes y enlaces de cliente.
- Modo cliente: cada cliente abre su enlace personal firmado (caduca al trimestre).

## Configuración

Edita el bloque `CONFIG` al principio de `index.html` (busca `var CONFIG`):

| Campo | Qué poner |
| --- | --- |
| `appUrl` | La dirección pública de la app |
| `coachPublicKey` | Tu clave pública (pestaña Cliente). Con ella, solo tus dispositivos pueden crear planes |
| `youtube` | La dirección de tu canal de YouTube |
| `whatsapp` | Tu número con prefijo, sin espacios ni + |
| `amazonTag` | Tu identificador de afiliado de Amazon |
| `imgBase` | Carpeta con fotos de producto, por ejemplo `img/` |
| `precio` | Precio del programa en euros (se muestra al final del diagnóstico) |
| `plazasLibres` | Plazas fundadoras que quedan; 0 oculta el aviso |
| `garantiaDias` | Días de garantía de devolución |
| `coach` | Nombre, texto y foto de la tarjeta «Tu coach» |

## Enlaces útiles

- `app.metanutricion.es/#coach`: muestra «Soy el coach» para importar tu clave en un dispositivo nuevo (ya no aparece a los visitantes).
- `#diagnostico-ig`, `#diagnostico-gym`, `#diagnostico-wa`, `#diagnostico-tt`, `#diagnostico-yt`: abren el diagnóstico y añaden «Vengo de…» al mensaje de WhatsApp para saber de dónde llega cada cliente.

## Menús

- Cada alimento tiene una ración realista por comida (`BOUNDS`): nunca más de un plátano y medio, medio aguacate o 2 o 3 latas de atún. Si a alguien le faltan calorías, se añade pan o fruta como acompañamiento.
- La semana sigue las guías de la AESAN: pescado 3 o 4 veces (al menos 1 azul), legumbre 3 o 4, carne roja como mucho 2 y fruta de postre.
- Todas las recetas tienen pasos de preparación y tiempo aproximado.

Los textos de las 12 lecciones, los retos y los suplementos están en el bloque `PROGRAM`.
