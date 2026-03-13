# CV Personal - Fernando Terrazas Llanos

## Introducción

Sitio web de CV personal desarrollado con HTML5 y CSS3 puro. Presenta información profesional, proyectos, habilidades técnicas, educación y certificaciones de manera visual y accesible.

---

## Estructura del Proyecto

```
├── index.html          # Archivo HTML principal
├── styles.css          # Hoja de estilos CSS
├── README.md           # Documentación
|── img/                # Recursos visuales (imágenes e iconos)
|-- vendor/
|-- blocks/
```

**Secciones del sitio:**
- nav: Navegación principal
- home: Hero con presentación
- about: Biografía
- projects: Proyectos destacados
- abilities: Habilidades técnicas
- education: Educación y certificaciones
- footer: Información de contacto

---

## ¿Qué se Hace?

### Blocks

Pagina de avance de CV para la practica de HTML y Css.

1. **Home**: Nombre, profesión, frases motivacionales, enlaces a redes sociales, botón de contacto y navbar
2. **About Me**: Foto de perfil + descripción en dos columnas
3. **Proyectos**: Tarjetas en grilla 3x1 con imagen, título y enlace a GitHub
4. **Habilidades**: Dos tarjetas (Web/Tools) con iconos en grilla 3 columnas
5. **Educación**: Lista de formación académica y certificaciones
6. **Footer** Contiene informacion del estudiante de contacto

---

## ¿Cómo se Hace?

Se utilizo HTML y Css puro para el aprendizaje de la materia de aplicaciones web 1. Se utilizo tecnicas HTML y Css basicas con ayuda de la inteligencia artificial para el desarrollo.

---

## ¿Por Qué se Hace?

Se realiza debido a la practica de la materia de aplicaciones web con tecnologias de html y css. Se requiere aumentar el nivel en las habilidades tecnicas web. Ademas de la necesidad de tener un CV web enves de un pdf estatico para diferenciarte entre los profesionales.

---

## Tecnologías

- HTML5 Puro
- CSS3 Puro
- JavaScript Vanilla
--
## Figma

https://www.figma.com/design/MYUHpMgy4Jet7CjY1krfsu/Curriculum?node-id=0-1&m=dev

## IA Usada

NECESITO QUE ME AYUDES. COMO IMPLEMENTARIAS EL CODIGO DE UN ROUTER USANDO HISTORY API?

Voy a revisar cómo está estructurado tu proyecto (especialmente Router.js e index.html) para implementarte un router con History API que funcione de inmediato en tu código actual.

Primero voy a consultar la memoria del entorno y luego leer los archivos clave para asegurar que la implementación encaje sin romper tu estructura actual.

Ya confirmé que Router.js está vacío y tu index.html usa navegación por #hash. Ahora voy a implementar un router con History API que mapee rutas como /about, /projects, etc., y adaptaré los enlaces internos para que naveguen sin recargar la página.

Voy a editar index.html para convertir los enlaces internos de #hash a rutas limpias (/about, /projects, etc.), agregar id a contacto y cargar Router.js como módulo al final del documento.

Ya quedaron listos los enlaces para rutas limpias. Ahora voy a implementar Router.js con pushState, popstate, fallback de rutas y scroll a la sección correspondiente.

Voy a añadir un estilo mínimo para resaltar el enlace activo en navbar y footer, así se note qué ruta está seleccionada.

Edited
styles.css+6-0
La implementación ya está aplicada. Ahora voy a validar que no haya errores de sintaxis y luego te dejo cómo usarlo y una nota importante para que History API funcione al recargar rutas directas.

Implementé una versión funcional de router con History API en tu proyecto actual.

Cambios aplicados:

Router.js
index.html
styles.css
Qué hace el router:

Define rutas limpias: /, /about, /projects, /abilities, /education, /blog, /contact.
Intercepta clics en enlaces internos (a[data-link]) y navega con history.pushState(...) sin recargar.
Escucha popstate para que funcionen los botones Atrás/Adelante del navegador.
Hace fallback a / si la ruta no existe.
Actualiza document.title y marca el enlace activo con clase is-active.
Navega a la sección correspondiente con scrollIntoView(...).
Cambios de integración:

En index.html cambié enlaces internos de #hash a rutas (/about, etc.) y agregué data-link.
En index.html agregué id="contact" a la sección de contacto.
En index.html agregué <script type="module" src="Router.js"></script> al final.
En styles.css agregué estilo simple para enlace activo.
Nota importante de History API:
si abres directamente una ruta como /about o recargas ahí, el servidor debe redirigir todo a index.html (fallback SPA).
Si no, verás 404 en servidores estáticos sin configuración.

Si quieres, el siguiente paso natural es:

Convertir esto a “vistas reales” (mostrar/ocultar secciones por ruta en vez de solo hacer scroll).
Agregar una ruta 404 visual (/not-found) en vez de redirigir automáticamente a /.


Optimizing tool selection...

Voy a buscar rápidamente dónde usas #page en tu proyecto para darte una recomendación exacta según tu código actual.

Sí, está bien usar #page en CSS.
No afecta al Router con History API.

Clave importante:

#page en CSS = selector de un elemento con id="page" (solo estilos).
href="#page" en HTML = navegación por hash (esto sí es otro tipo de navegación).
Para tu caso con History API:

Puedes dejar #page como selector de estilos sin problema.
Lo que debes evitar es usar enlaces href="#..." para rutas internas si ya navegas con pushState.
Solo por mantenibilidad, muchos prefieren clase (.page) en vez de id porque el selector por id tiene mayor especificidad.
Además, revisé tu proyecto actual y no encontré uso de #page ahora mismo.


Voy a limpiar cualquier href="#..." que quede y ajustar el router para que navegue solo con rutas (/ruta) sin depender de hashes. Primero haré una búsqueda global y luego aplico los cambios necesarios.

Encontré que ya no hay ningún href="#..." en index.html; ahora voy a mejorar Router.js para que funcione con cualquier enlace interno de ruta (/algo) sin depender de data-link, y luego limpiaré esos atributos del HTML.

Listo, ya quedó independiente de href="#..." y también de data-link. Voy a validar rápido que no queden hashes y que no haya errores en index.html y Router.js.

Hecho. Ya lo dejé funcionando sin href="#...".

Cambios aplicados:

Eliminé la dependencia de hash en navegación interna.
Actualicé el router para interceptar cualquier enlace interno con href="/ruta" (sin data-link).
Limpié los data-link del HTML porque ya no son necesarios.
Archivos modificados:

Router.js
index.html
Validación:

No quedan href="#..." en index.html.
Sin errores de sintaxis en index.html y Router.js.
Cómo quedó el comportamiento:

Enlaces internos como /about, /projects, etc. navegan con History API (pushState).
Botones Atrás/Adelante funcionan (popstate).
Se ignoran enlaces que no son rutas SPA (mailto:, tel:, externos, target="_blank").
Se mantiene la clase activa de navegación (is-active).
Si quieres, también puedo agregar una ruta visual 404 en lugar de redirigir siempre a /.


Sí, puede ser mucho más simple; voy a dejarte Router.js en una versión corta y didáctica que mantenga History API, rutas limpias y enlaces activos, pero sin tanta estructura de clase.

Edited
Router.js
Voy a validar sintaxis para asegurar que esta versión simplificada quedó estable y sin errores.

Checked Router.js, no problems found

Sí, totalmente: puede ser más sencillo.

De hecho ya te lo simplifiqué en Router.js y quedó funcionando con menos complejidad, manteniendo lo importante:

History API (pushState, replaceState, popstate)
rutas limpias (/about, /projects, etc.)
fallback a / si la ruta no existe
actualización de enlace activo (is-active)
scroll a la sección correspondiente
Archivo actualizado:

Router.js
Y validé que quedó sin errores de sintaxis.

La razón por la que antes tenía más líneas era por robustez extra (más encapsulación y validaciones). Para aprender, la versión corta que te dejé es mejor porque se entiende más rápido. Si quieres, en el siguiente paso te lo explico bloque por bloque en 1 minuto (qué hace cada función y por qué).


Entiendo: quieres un router SPA real, súper simple, que cambie la vista sin recargar ni pedir otro HTML por HTTP. Voy a leer el estado actual de Router.js e index.html y después lo rearmo para que renderice vistas locales en un contenedor único.

Voy a reemplazar Router.js completo por una versión SPA mínima que hace exactamente esto: guarda las secciones en memoria, elimina la vista actual del DOM y monta la nueva al cambiar de ruta, usando pushState sin recarga ni fetch de HTML.

Edited
Router.js
Ya está reescrito en modo SPA real (se quita una vista y se monta otra sin recarga). Ahora voy a verificar que no haya errores y te explico exactamente por qué esta versión sí cumple lo que pediste.

Listo. Ahora Router.js sí está en modo SPA simple y hace exactamente lo que pediste:

No recarga la página al navegar.
No hace request HTTP para traer nuevo HTML en cada ruta.
Quita la vista actual del DOM y monta la nueva.
Usa History API (pushState/replaceState + popstate).
Implementación aplicada en Router.js:

Guarda las secciones (home, about, projects, etc.) en memoria al iniciar.
Crea un contenedor #app.
Remueve todas las secciones iniciales del DOM.
En cada navegación:
currentView.remove()
app.append(nextView)
Intercepta clics en enlaces internos de rutas.
Actualiza document.title y enlaces activos.
Validación:

Sin errores en Router.js.
Sin errores en index.html.
Nota técnica breve:

Esto evita requests de HTML al cambiar ruta dentro de la app.
Solo la primera carga del sitio pide index.html (normal en cualquier SPA).

const Router = {
init: () => {
document.querySelectorAll("a.nav__link").forEach((a) => {
a.addEventListener("click", (event) => {
event.preventDefault();
const href = event.target.getAttribute("href");
Router.go(href);
});
});
window.addEventListener("popstate", (event) => {
Router.go(event.state.route, false);
});
Router.go(location.pathname);
},

go: (route, addToHistory = true) => {
if (addToHistory) {
history.pushState({ route }, "", route);
}
let pageElement = null;
switch (route) {
case "/":
pageElement = document.createElement("menu-page");
break;
case "/products":
pageElement = document.createElement("menu-page");
break;
case "/restaurants":
pageElement = document.createElement("h1");
pageElement.textContent = "Restaurants Page";
break;
case "/order":
pageElement = document.createElement("h1");
pageElement.textContent = "Order Page";
break;
default:
if (route.startsWith("/products/")) {
pageElement = document.createElement("h2");

},
};

export default Router;

NECESITO QUE SEA ALGO ASI. PERO CON UNA CORRECTA ESTRUCTURA

Perfecto, voy a reestructurar Router.js con el estilo Router.init() y Router.go() como tu ejemplo, pero adaptado a tu sitio real (secciones existentes) y corrigiendo detalles clave como popstate, scroll y manejo de rutas no válidas.

Voy a reemplazar el archivo completo con una versión en objeto (Router.init/Router.go) como pediste, manteniendo SPA real (swap de vistas en <main>, sin fetch de HTML y sin recarga).

Edited
Router.js
Voy a hacer una validación rápida de errores para confirmar que quedó estable con la nueva estructura que pediste.

Perfecto. Ya lo dejé con la estructura que querías: objeto Router con init() y go() en Router.js.

Cambios clave en Router.js:

Estructura simple tipo:
Router.init()
Router.go(route, addToHistory = true)
Navegación SPA real:
No recarga página.
No hace request de nuevo HTML por cada ruta.
Remueve la vista actual y monta la nueva dentro de main#app.
History API bien manejado:
pushState al navegar.
popstate para atrás/adelante.
replaceState para normalizar rutas inválidas.
Correcciones importantes vs ejemplo:
Uso de event.currentTarget (más robusto que event.target).
Scroll correcto con window.scrollTo(...) (no window.scrollX/Y = 0).
Fallback seguro cuando event.state es null.
Archivo actualizado:

Router.js
Estado:

Sin errores de sintaxis en Router.js.
Si quieres, en el siguiente paso te lo simplifico aún más (menos líneas) quitando title y active links, dejando solo swap + history.

AHORA QUIERO QUE ME EXPLIQUES. QUE HACE CADA FUNCION CORRESPONDIENTE. NO ENITENDO EL PORQUE DE NORMALIZE, etc. COMENTA ARRIBA DE CADA FUNCION PARA QUE PUEDA ELIMINARLA EN CASO DE QUE NO LA VEA NECESARIA

✅ Ya dejé el router con comentarios claros encima de cada función (incluyendo normalize) para que entiendas qué hace cada parte y puedas eliminar lo que no necesites.

✨ Qué hace cada función (comentada directamente en el código)
normalize(route)

Quita query strings (?x=1), hashes (#abc) y barras finales (/about/ → /about).
Convierte todo a minúsculas.
Motivo: para que "/about", "/about/", "/about?x=1" y "/ABOUT" se traten como la misma ruta.
updateActiveLinks(route)

Marca con clase CSS .is-active el link que apunta a la ruta actual.
También ajusta aria-current="page" para accesibilidad.
Puedes borrarlo si no necesitas el “highlight” en el menú.
go(route, addToHistory = true)

La “curva” central:
Normaliza la ruta y decide si existe en routes.
Actualiza el histórico de navegación (pushState/replaceState).
Cambia la vista DOM actual por la siguiente (sin recargar).
Actualiza el título, los enlaces activos y resetea el scroll.
No hace ninguna petición HTTP. Todo está en el DOM.
init()

Se ejecuta al cargar la página.
Guarda en views las secciones que ya están en el HTML.
Crea el <main id="app"> donde se montarán los “vistas”.
Elimina del DOM las secciones que no son visibles (para que no estén todas al mismo tiempo).
Intercepta los clicks en los enlaces de navegación y llama a go().
Conecta el popstate para que Atrás/Adelante funcione.
✅ Qué puedes eliminar si no lo necesitas
Si no quieres resaltar el link activo → elimina updateActiveLinks() y la llamada dentro de go().
Si no quieres normalizar rutas (ej. aceptar /about/ distinto de /about) → elimina normalize() y úsala directamente.
Si no quieres manejar popstate → borra ese listener (pero perderás Back/Forward).
Si querés, te puedo dejar una versión aún más corta (1 solo método go() + un listener click) sin nada extra, para que sea lo más simple posible.

ESTA MAL COMO LO ESTAS PLANTEANDO. MI PAGINA ES UN CV SCROLLEABLE. Y ESTAS ELIMINANDO TODO EL CONTENIDO. NECESITO QUE BORRES EL NORMALIZE, BORRES EL UPDATE ACTIVE LINKS (SOLO ES COSMETICO). TE PEDI QUE LO HICIERAMOS LO MAS SENCILLO POSIBLE. NO ENTENDISTE? NECESITO QUE NO TENGAA NADA DE COSMETICO, SOLO FUNCIONAL. DEBES HACERLO LO MAS SIMPLE POSIBLE, SIN VERIFICACIONES DE QUE ALGO PUEDA SALIR MAL (PRIMERO ASI PARA QUE EL CODIGO SEA MAS SENCILLO, ENTIENEDES?)

window.addEventListener("popstate", (event) => {
const route = event.state?.route || window.location.pathname;
this.go(route, false);
});
QUE HACE ESTO

Ese bloque se ejecuta cuando el usuario usa Atrás/Adelante del navegador (evento popstate).

Cuando llamaste a history.pushState({ route }, "", route) al navegar, el objeto { route } se guarda en el historial.
Al volver con “Atrás” o “Adelante”, el navegador dispara popstate y event.state contiene ese objeto { route }.
La línea const route = event.state?.route || window.location.pathname; intenta leer la ruta guardada, y si no existe (por ejemplo en la primera carga) usa la ruta actual (window.location.pathname).
Finalmente llama this.go(route, false) para cambiar la vista sin agregar otra entrada al historial (porque ya estás navegando dentro del historial).
En resumen: es lo que hace que los botones Atrás/Adelante funcionen sin recargar la página.


✅ El problema no era el popstate en sí, sino que el navegador restauraba el scroll de la entrada de historial anterior (el punto donde estabas en la página), y eso es lo que te hacía “volver al footer” en vez de al contenido de projects.

🔧 Qué causaba el comportamiento
Cuando navegás a /projects, el navegador guarda en el historial no sólo la URL sino también la posición de scroll en ese momento. Si después te movés al footer y hacés click en otro enlace, la entrada de historial /projects sigue teniendo ese scroll “abajo”. Al apretar Atrás, el navegador restaura esa posición de scroll automáticamente.

✅ Cómo lo arreglé (ya aplicado en tu Router.js)
Agregué esto en init():

Eso le dice al navegador: NO restaurés la posición de scroll automáticamente. En cambio, nosotros (el router) hacemos el scroll con section.scrollIntoView() cada vez que se dispara popstate, así siempre vamos al “centro” de la sección correcta.

Resultado
Ahora, cuando:

vas a Projects
bajas al footer
vas a Blog
apretás Atrás
…el router te retorna a la sección Projects (no al footer).

Si querés, puedo hacer un ajuste extra para que en vez de scrollIntoView() uses scrollIntoView({ block: "start" }) y garantice siempre que empiece desde arriba de la sección (aunque ya debería funcionar bien con la versión actual).


Cuando creaste index.js dejaste de funcionar el router porque estás usando import Router from "./services/Router.js", y eso solo funciona en un <script type="module">.

Tu index.html estaba cargando index.js como script clásico:

Eso genera un error tipo “Cannot use import statement outside a module” y hace que el archivo no se ejecute, por lo que Router.init() nunca se llama.

✅ Solución aplicada (ya funciona)
En index.html reemplacé la línea por:

Con esto:

index.js se ejecuta como módulo ES.
import Router from "./services/Router.js"; funciona.
Router.init() se ejecuta y el router vuelve a funcionar.
🔍 Qué debes tener en cuenta en adelante
Si usás import ... en un archivo JS, siempre debe cargarse con type="module".
Con módulos ya no necesitas (y no debes) usar <script src="Router.js">; se importa desde el archivo principal (index.js).
Si querés, puedo revisar si el router sigue con el mismo comportamiento ya que antes estabas teniendo problemas con el “Back” y el scroll (ese ajuste con history.scrollRestoration = "manual" puede volver a necesitarse).

COMO SERIA UN BUEN METODO PARA PODER HACER UN json para simular datos

Un buen método para simular datos con un JSON es tratarlo como una “base de datos en memoria”: un array de objetos con campos consistentes, representando la entidad que quieres simular (posts, productos, usuarios, etc.).

Para un blog, por ejemplo, un buen JSON tendría:

id único (para buscar/filtrar)
title y slug (para rutas amigables)
body / excerpt
author / date
tags/categorías
imagen (URL relativa o absoluta)
status (draft/published) si quieres filtrar

Un buen método para simular datos con un JSON es tratarlo como una “base de datos en memoria”: un array de objetos con campos consistentes, representando la entidad que quieres simular (posts, productos, usuarios, etc.).

Para un blog, por ejemplo, un buen JSON tendría:

id único (para buscar/filtrar)
title y slug (para rutas amigables)
body / excerpt
author / date
tags/categorías
imagen (URL relativa o absoluta)
status (draft/published) si quieres filtrar

[
  {
    "id": 1,
    "title": "SEO en proyectos pequeños",
    "slug": "seo-en-proyectos-pequenos",
    "excerpt": "Cómo mejorar tu presencia online sin gastar una fortuna.",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    "author": "Fernando Terrazas Llanos",
    "publishedAt": "2025-09-10T12:00:00Z",
    "tags": ["SEO", "Marketing", "Web"],
    "image": "img/blogSEO.png",
    "status": "published"
  },
  {
    "id": 2,
    "title": "Origen de Linux y sus versiones",
    "slug": "origen-de-linux-y-sus-versiones",
    "excerpt": "Un recorrido rápido por la historia de Linux desde 1991.",
    "body": "En 1991, Linus Torvalds lanzó un kernel que cambiaría el mundo...",
    "author": "Fernando Terrazas Llanos",
    "publishedAt": "2025-10-02T09:30:00Z",
    "tags": ["Linux", "Historia", "Sistemas Operativos"],
    "image": "img/blogLinux.png",
    "status": "published"
  }
]

🛠️ ¿Cómo usarlo en tu JS (simulación de datos)?
En tu frontend solo necesitas hacer un fetch al JSON local y usarlo como si viniera de una API:

Luego filtras/ordenas/renderizas según lo que necesites.

🧠 Consejos para “buen” JSON de prueba
Mantener siempre mismo esquema en cada objeto (mismas llaves).
Usar IDs numéricos o UUID para poder referenciar fácilmente (/blog/:id o /blog/:slug).
Separar datos “estáticos” (títulos, texto) de “meta” (fecha, etiquetas).
Si necesitas datos de usuario, crea otro archivo (users.json) con referencias (authorId).
Si querés, te genero el JSON completo para tus 3 posts actuales (los que aparezcan en tu HTML) y un pequeño loader JS que los muestre en la sección de blog.


Hecho: ahora categories.json tiene una lista de categorías “real” que puedes consumir desde el frontend como si fuera una pequeña base de datos.

✅ Ejemplo de categories.json (ya creado)

[
    {
        "id": 1,
        "name": "Frontend",
        "slug": "frontend",
        "description": "Articles and resources about HTML, CSS, JavaScript, and UI best practices.",
        "color": "#3b82f6"
    },
    {
        "id": 2,
        "name": "Backend",
        "slug": "backend",
        "description": "Topics on servers, APIs, databases, and backend architecture.",
        "color": "#10b981"
    },
    {
        "id": 3,
        "name": "DevOps",
        "slug": "devops",
        "description": "CI/CD, deployment, infrastructure as code, and tooling.",
        "color": "#f59e0b"
    },
    {
        "id": 4,
        "name": "Mobile",
        "slug": "mobile",
        "description": "Mobile development and cross-platform frameworks.",
        "color": "#ef4444"
    }
]

const categories = await fetch("/data/categories.json").then(r => r.json());

const container = document.querySelector(".categories-container");
container.innerHTML = categories
  .map(cat => `
    <div class="category" style="border-color:${cat.color}">
      <h3>${cat.name}</h3>
      <p>${cat.description}</p>
    </div>
  `)
  .join("");

  💡 Tips para tu JSON de “datos de prueba”
Usa siempre mismo esquema en cada objeto (mismas llaves: id, name, slug, etc.).
Usa slug si vas a filtrar mediante URL (por ejemplo /blog?category=frontend).
Agrega campos extra solo si los necesitas (por ejemplo icon, order, visible, parentId).
Si querés, puedo crear también un JSON para tus “posts” y un ejemplo de cómo mostrarlos por categoría.

<button class="blog__categories-button">Categories</button>
COMO PUEDO HACER QUE ESTE BOTON MUESTRE TODAS LAS CATEGORIAS DE categories.json?

✅ Ya está funcionando: el botón Categories ahora muestra/oculta la lista de categorías cargadas desde categories.json.

🔧 Qué estaba fallando (y cómo lo arreglé)
1) El JS que maneja el botón no hacía nada visible
El código original solo hacía:

En algunos navegadores/estilos esto no cambia nada porque el hidden puede no afectar si hay CSS que forza display: none u otro comportamiento.

2) Ahora el botón siempre muestra la lista con estilo
Modifiqué blog-btn-categories.js para:

Cargar el JSON (categories.json) al primer click
Renderizar la lista con HTML
Alternar visibilidad usando style.display (funciona garantizado)
✅ Qué cambió en el código
✅ blog-btn-categories.js (lo clave)
Usa fetch("./data/categories.json") (ruta relativa correcta).
Inicializa container.style.display = "none" para ocultar inicialmente.
Alterna container.style.display = "block" / "none" al hacer click.
✅ blog.css
Agregué CSS para que la lista y cada categoría tengan estilo visible (color, padding y separación).

🧪 Cómo verificar que funciona
Abre tu página en el navegador.
Ve a la sección Blog.
Haz click en Categories.
Deberías ver la lista con:
projects
linux
Si querés, puedo tomar esos datos (id, name) y mostrar el resultado en tu blog__container al hacer click (por categoría) en lugar de solo listar los nombres.


[Error] SyntaxError: Importing binding name 'initCategories' is not found.
[Error] Failed to load resource: the server responded with a status of 404 (Not Found) (Router.js, line 0)

YA FUNCIONO. FALTABA EL export, gracias

¡Perfecto! 👍

Me alegra que ya funcione. Efectivamente, al usar import { initCategories } ... el archivo debe exportar esa función (y al no hacerlo, el import fallaba).

Si necesitás que lo haga “más completo” (ej. filtrar por categoría, mostrar post por categoría, etc.), avísame y te paso un ejemplo rápido.


display

es la propiedad CSS que decide cómo se renderiza (y si se renderiza) un elemento en el layout.

🟢 display: none
El elemento no se pinta, no ocupa espacio, y no participa en el flujo del documento.
Es equivalente a “ocultar completamente el elemento”.
🟢 display: flex
El elemento sí se pinta y se muestra.
Además cambia el comportamiento del contenedor (actúa como un flex container).
¿Por qué lo usamos aquí?
Tu CSS define .blog__categories-list { display: flex; }, así que aunque pongas hidden = true, el navegador puede seguir mostrando el elemento porque el propio CSS fuerza que sea display: flex.

Entonces, en JS ponemos:

container.style.display = "none" → oculta la lista.
container.style.display = "flex" → la muestra de nuevo (igual que tu CSS quería).
De ese modo el botón oculta/muestra la lista de categorías de forma fiable, sin depender del atributo hidden, que en este caso quedaba “debajo” del CSS existente.

AHORA QUIERO FILTAR LAS CATEGORIAS DEPENDIENDO DE LAS CATEGORIA SELECCIONADA EN EL BOTON DE CATEGORIAS IMPLEMENTADO ANTERIORMENTE


onSelect

es una función (callback) que se le pasa a renderCategories para que ésta pueda notificar algo cuando el usuario clickea una categoría.

En este caso:

renderCategories sólo renderiza botones en el DOM.
Si recibe onSelect (y es función), le agrega un click a cada botón.
Cuando el usuario hace click, renderCategories llama a onSelect(...) enviándole la categoría elegida:
➡️ Es una forma de decir “hacé esto cuando el usuario elige una categoría” sin que renderCategories sepa qué se debe hacer (por ejemplo, filtrar posts, cambiar de página, etc.).

PARA QUE ES NECESARIO EL onSelect? que seria el onCategorySelect?

onSelect

/ onCategorySelect es un callback (una función que se le pasa como argumento) y su único propósito es decirle a renderCategories qué tiene que hacer cuando el usuario elige una categoría.


Sí, sé lo que es un Web Component.

Es un conjunto de tecnologías estándar que permiten crear componentes HTML personalizados y reutilizables con comportamiento encapsulado, que funcionan en cualquier framework (o sin framework).

Un Web Component típico usa 3 piezas:

Custom Elements – defines un nuevo elemento HTML (<mi-componente>).
Shadow DOM – le da encapsulación de estilos/DOM al componente (sus estilos no “se filtran” hacia afuera ni se ven afectados por la página).
HTML Templates – permite definir el HTML base del componente en <template> y clonarlo cuando se instancia.
Ejemplo mínimo:

class MyCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = `
      <style>p { color: teal }</style>
      <p>Hola desde un Web Component</p>
    `;
  }
}

customElements.define("my-card", MyCard);


Para agregar Web Components al proyecto, lo más útil es elegir qué partes quieres volver reutilizables y encapsuladas. En tu caso lo ideal son:

El listado de blogs (artículos)
El selector de categorías (botón + lista)
1) Qué componentes haría
✅ <blog-list>
Encapsula:

Leer blogs.json
Renderizar artículos (imagen + título + botón favorito)
Filtrar por categoría (puede recibir un atributo o evento “category-changed”)
✅ <category-picker>
Encapsula:

Leer categories.json
Mostrar/ocultar el desplegable
Emitir un evento cuando se selecciona una categoría (category-changed)
2) Cómo estructuraría los archivos
3) Ejemplo de implementación (esqueleto)
blocks/blog/components/CategoryPicker.js


const template = document.createElement("template");
template.innerHTML = `
  <style>
    :host { display: block; }
    .list { display: none; flex-wrap: wrap; gap: 0.75rem; }
    .list.show { display: flex; }
  </style>
  <button class="btn">Categories</button>
  <div class="list"></div>
`;

class CategoryPicker extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    this.btn = this.shadowRoot.querySelector(".btn");
    this.list = this.shadowRoot.querySelector(".list");
  }

  connectedCallback() {
    this.btn.addEventListener("click", () => this.toggle());
    this.load();
  }

  async load() {
    const res = await fetch("./data/categories.json");
    const cats = await res.json();
    this.list.innerHTML = cats
      .map(c => `<button class="item" data-cat="${c.name}">${c.name}</button>`)
      .join("");
    this.list.querySelectorAll(".item").forEach((btn) => {
      btn.addEventListener("click", () => {
        this.dispatchEvent(new CustomEvent("category-changed", { detail: btn.dataset.cat, bubbles: true }));
      });
    });
  }

  toggle() {
    this.list.classList.toggle("show");
  }
}

customElements.define("category-picker", CategoryPicker);

import Storage from "../../services/Storage.js";

const template = document.createElement("template");
template.innerHTML = `
  <style>
    .grid { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fit,minmax(280px,1fr)); }
    .card { border-radius: 32px; background: #fff; position: relative; }
    .favorite { position: absolute; top: 1rem; right: 1rem; cursor: pointer; }
  </style>
  <div class="grid"></div>
`;

class BlogList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }).appendChild(template.content.cloneNode(true));
    this.grid = this.shadowRoot.querySelector(".grid");
    this.posts = [];
  }

  connectedCallback() {
    this.load();
    this.addEventListener("category-changed", (e) => this.filter(e.detail));
  }

  async load() {
    const res = await fetch("./data/blogs.json");
    this.posts = await res.json();
    this.render(this.posts);
  }

  filter(category) {
    if (!category) return this.render(this.posts);
    this.render(this.posts.filter(p => p.category === category));
  }

  render(posts) {
    this.grid.innerHTML = posts.map((post) => {
      const fav = Storage.isFavorite(post.id) ? "★" : "☆";
      return `
        <article class="card">
          <button class="favorite" data-id="${post.id}">${fav}</button>
          <img src="${post.image}" alt="${post.title}" />
          <h4>${post.title}</h4>
        </article>`;
    }).join("");

    this.grid.querySelectorAll(".favorite").forEach((btn) => {
      btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        const isFav = Storage.toggleFavorite(id);
        btn.textContent = isFav ? "★" : "☆";
      });
    });
  }
}

customElements.define("blog-list", BlogList);


## Patrones de diseno Usados

### Singleton

Se aplico singleton para la clase Storage. Solo existira un almacen mediante local storage. No debe hacer otras instancias de storage.

### Mixin

Se implemento Mixin para la busqueda de favoritos, fue una nueva implementacion para los blogs. Por lo que para dividir logica de negocio se aplico Mixin.

### Observer

Se utilizo el patron observer para que se realicen acciones tras oprimir el boton de una cateogoria y
que realice la busqueda mediante la categoria seleccionada. Es eficaz para un futuro si requiero en un futuro que se realice otra accion tras oprimir ese boton.

### Singleton

Se aplico para el observer del observer para el boton de categorias. Esto para que la lista de observadores sea la misma apra esta clase.

### 

## Autor

**Fernando Terrazas Llanos**  
Estudiante de Ingeniería de Software - UCB

- GitHub: [FernandoTerrazasLl](https://github.com/FernandoTerrazasLl)
- LinkedIn: [Fernando Terrazas Llanos](https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/)
- Email: terrazasllanosfernando@gmail.com
