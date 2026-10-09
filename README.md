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

Los textos de las 12 lecciones, los retos y los suplementos están en el bloque `PROGRAM`.
