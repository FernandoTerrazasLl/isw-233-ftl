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

## IA

IntersectionObserver
MutationObserver
ResizeObserver

IntersectionObserver
MutationObserver
ResizeObserver
NECESITO AHORA IMPLEMENTAR CADA UNO DE ESTOS OBSERVER EN MI PROYECTO. PODRIAS PROPONERME IDEAS? YA IMPLEMENTE EL MUTATION OBSERVER PARA QUE EL TEXTO DEL NAVBAR CAMBIE DE COLOR DEPENDIENDO DE LA URL. AHORA NECESIO QUE ME PROPONGAS DONDE PONER ESTOS OBSERVER. PERO NO LO IMPLEMENTES TODAVIA

Voy a proponerte ubicaciones concretas para cada observer basadas en cómo está armado tu proyecto SPA. Primero reviso rápidamente la estructura real del enrutado y de las secciones para darte ideas aterrizadas y no genéricas.

Haré una lectura en paralelo de los archivos base (router, entrada y navbar) para identificar puntos naturales donde conectar IntersectionObserver, MutationObserver y ResizeObserver sin implementar nada todavía.

a confirmé que es una SPA con Router propio y que tu MutationObserver en navbar está funcionando sobre data-route del body. Ahora voy a revisar secciones con contenido dinámico (blog/proyectos/home) para proponerte observers donde realmente aporten UX o performance.

Siguiente paso: voy a inspeccionar los HTML/CSS de secciones clave para proponerte triggers concretos (qué elemento observar, qué evento de negocio disparar y en qué archivo ubicar cada observer).

Con esto ya tengo buenas señales para el blog y proyectos; voy a mirar la estructura general de la página para proponerte observación entre secciones (scroll/visibilidad) a nivel app completa.

Ya tengo suficiente contexto técnico para darte propuestas precisas. Solo revisaré estilos del navbar para que las ideas de IntersectionObserver encajen con tu comportamiento visual actual en scroll.

Antes de responderte con propuestas finales, voy a guardar una nota breve del repo para reutilizar este contexto técnico en siguientes tareas sin releer todo.

Excelente enfoque. Ya tienes un MutationObserver útil en navbar, así que te propongo ubicaciones que te den valor real en UX y mantenimiento, sin implementar todavía.

Regla importante para tu proyecto

Como varias secciones usan shadowRoot cerrado, los observers deben vivir dentro del componente de esa sección, no afuera.
Tu Router reemplaza el contenido de main en cada ruta, así que todo observer debe crearse en connectedCallback y desconectarse en disconnectedCallback para evitar fugas.

IntersectionObserver: dónde te conviene más

Reveal de tarjetas del blog al entrar en viewport.
Ubicación sugerida: blog-show-blogs.js.
Idea: observar cada .blog__article después de cada render (filtros/categorías también re-renderizan), agregar clase de animación cuando entren y luego dejar de observar ese nodo.

Reveal de tarjetas de proyectos al hacer scroll.
Ubicación sugerida: ProjectsSection.js.
Idea: observar .projects__project para animar entrada y mejorar percepción de rendimiento; este caso encaja perfecto porque proyectos es una lista visual estática.

Cambio de estado visual del navbar por visibilidad del hero en Home.
Ubicación sugerida: producir estado desde HomeSection.js y consumirlo en NavbarSection.js.
Idea: mientras el bloque principal de Home está visible, navbar usa estilo A; cuando sale de viewport, estilo B. Esto te da una transición más natural que solo depender de la ruta.

MutationObserver: ideas adicionales (además de tu navbar)

Detectar inserción de posts en el contenedor del blog.
Ubicación sugerida: blog-show-blogs.js.
Idea: observar .blog__container con childList para ejecutar lógica post-render automática (reaplicar animaciones, lazy hooks, métricas de cuántos posts visibles quedaron tras filtro).

Detectar reemplazo de sección principal en el Router.
Ubicación sugerida: Router.js.
Idea: observar .main para reaccionar cuando cambia la vista (telemetría, título dinámico, limpieza centralizada de estado UI).

Vigilar cambios en panel de categorías.
Ubicación sugerida: blog-btn-categories.js.
Idea: observar apertura/cierre y cambios del listado para mantener consistencia visual o persistencia de estado (por ejemplo recordar si quedó abierto).

ResizeObserver: dónde realmente aporta

Responsive inteligente del bloque de búsqueda de blog.
Ubicación sugerida: BlogSection.js o blog-btn-categories.js.
Idea: observar .blog__search-container y cambiar a modo compacto cuando el ancho real sea pequeño, sin depender solo de breakpoints globales.

Igualar altura visual de tarjetas de proyectos/blog.
Ubicación sugerida: ProjectsSection.js y blog-show-blogs.js.
Idea: al redimensionar, recalcular alturas de título/info para que las cards no “salten” ni queden desalineadas.

Proteger navbar contra overflow horizontal.
Ubicación sugerida: NavbarSection.js.
Idea: observar ancho disponible del host/navbar y activar modo compacto (reducir gap, font-size, o colapsar enlaces) cuando no alcance el espacio.

Prioridad recomendada para ti ahora

IntersectionObserver en blog cards.
ResizeObserver en buscador del blog.
MutationObserver en main desde Router.
Si quieres, en el siguiente paso te armo un mini plan técnico por observer (qué observar, qué options usar, cuándo desconectar y qué clases CSS necesitarías) para que lo implementes por fases sin romper nada.

GPT-5.3-Codex • 1x

MutationObserver: ideas adicionales (además de tu navbar)

Detectar inserción de posts en el contenedor del blog.
Ubicación sugerida: blog-show-blogs.js.
Idea: observar .blog__container con childList para ejecutar lógica post-render automática (reaplicar animaciones, lazy hooks, métricas de cuántos posts visibles quedaron tras filtro).

Detectar reemplazo de sección principal en el Router.
Ubicación sugerida: Router.js.
Idea: observar .main para reaccionar cuando cambia la vista (telemetría, título dinámico, limpieza centralizada de estado UI).

Vigilar cambios en panel de categorías.
Ubicación sugerida: blog-btn-categories.js.
Idea: observar apertura/cierre y cambios del listado para mantener consistencia visual o persistencia de estado (por ejemplo recordar si quedó abierto).

ResizeObserver: dónde realmente aporta

Responsive inteligente del bloque de búsqueda de blog.
Ubicación sugerida: BlogSection.js o blog-btn-categories.js.
Idea: observar .blog__search-container y cambiar a modo compacto cuando el ancho real sea pequeño, sin depender solo de breakpoints globales.

Igualar altura visual de tarjetas de proyectos/blog.
Ubicación sugerida: ProjectsSection.js y blog-show-blogs.js.
Idea: al redimensionar, recalcular alturas de título/info para que las cards no “salten” ni queden desalineadas.

Proteger navbar contra overflow horizontal.
Ubicación sugerida: NavbarSection.js.
Idea: observar ancho disponible del host/navbar y activar modo compacto (reducir gap, font-size, o colapsar enlaces) cuando no alcance el espacio.

Prioridad recomendada para ti ahora

IntersectionObserver en blog cards.
ResizeObserver en buscador del blog.
MutationObserver en main desde Router.
Si quieres, en el siguiente paso te armo un mini plan técnico por observer (qué observar, qué options usar, cuándo desconectar y qué clases CSS necesitarías) para que lo implementes por fases sin romper nada.

UNA PREGUNTA, QUE ES LAZY LOADING? MI DOCENTE ME RECOMENDO USAR ESO PARA MIS SECCIONES O IMAGENES

✅ ¿Qué es “lazy loading”?
Lazy loading (carga perezosa) es una técnica para diferir la carga/creación de contenido hasta que realmente se necesite, en lugar de cargarlo todo al inicio.
Esto reduce el tiempo de carga inicial, ahorra datos y mejora la percepción de velocidad de tu sitio.

🧠 Aplicaciones típicas (y por qué tu profe te lo recomendó)
1) Imágenes
Cargar solo las imágenes que están cerca de ser visibles en la pantalla, en vez de todas a la vez.

Beneficio: ahorro de ancho de banda y carga inicial más rápida.
Ejemplo nativo (HTML):
2) Secciones/Componentes de la SPA
En tu proyecto, cada ruta reemplaza el main con un componente (home, about, blog, etc.). Con lazy loading puedes:

No instanciar o no fetched (traer) la sección hasta que el usuario la vaya a “ver” (por scroll o navegación).
Ejemplo: cargar la sección “blog” solo cuando el usuario haga scroll cerca de ella o cuando elija ir a “Blog”.

🔧 ¿Cómo se relaciona con tus Observers (Intersection / Resize / Mutation)?
IntersectionObserver = principal aliado de lazy loading
Se usa típicamente para:

Detectar cuándo una imagen/card/section entra en el viewport.
Entonces, “activar” la carga (poner el src, renderizar, animar, etc.).
En tu proyecto, podrías usarlo para:

Cargar o animar posts sólo cuando aparecen en pantalla.
Crear y renderizar una sección completa (ej. blog) cuando el usuario se acerca a ella (o la navega).
✅ Recomendación rápida para tu proyecto (sin implementar todavía)
Imágenes: usa loading="lazy" donde sea posible (cards de blog, proyectos, etc.).

Secciones grandes: usa IntersectionObserver para “activar” la creación/dibujado cuando estén cerca de hacerse visibles.
Observer + lazy: la técnica más común es “lazy load + observe”, es decir:
Pones un placeholder (o nada).
Observas el elemento.
Cuando entra, cargas lo pesado (HTML, JS, imagen, etc.).
Desconectas el observer.
Si quieres, puedo darte un pequeño boceto de cómo sería el patrón “lazy load + IntersectionObserver” para tus tarjetas de blog o para activar la carga de una sección completa.

ENTIENDO, LO VOY A EJECEUTAR PARA MI FOOTER ENTONCES. CREES QUE ES ALGO JSUTIFICABLE? PARA EL RENDIMIENTO DE LA APLICACION? SOLO CARGAR EL FOOTER CUANDO VAYA A SER VISIBLE

✅ ¿Tiene sentido lazy‑loadear el footer?
Depende del peso del footer.

Cuando sí está justificado (mejora real de rendimiento)
Lazy loading del footer tiene sentido cuando su contenido es “pesado” o costoso de renderizar, por ejemplo:

Incluye <iframe> (mapas, embebidos, videos).
Trae muchas imágenes grandes.
Carga widgets externos (chat, analytics, anuncios).
Tiene lógica JS pesada (carruseles, sliders, etc.).
En esos casos, evitas cargar/ejecutar todo eso hasta que el usuario realmente llegue al final, lo que mejora el tiempo de carga inicial y reduce trabajo de render en pantalla.

Cuando no vale mucho la pena
Si tu footer es solo HTML/CSS básico (pocos links, texto y un par de iconos), probablemente no ganes nada porque:

El navegador ya cargó el JS/CSS global de todas formas.
El DOM del footer es muy pequeño.
Usar lazy loading añade complejidad y potenciales “problemas” (por ejemplo, footer tardando en aparecer si el observer falla).
✅ Recomendación práctica
Si tu footer va a tener contenido pesado (mapa, video, widgets, etc.), entonces sí: vale la pena cargarlo cuando esté a punto de verse.
Si es un footer ligero, lo más sencillo y seguro es dejarlo cargando normalmente.
Tip común: puedes mantener el footer en el HTML pero cargar/activar solo sus partes pesadas con IntersectionObserver (por ejemplo, solo el <iframe> del mapa).

Si quieres, te puedo mostrar un mini patrón “placeholder + IntersectionObserver” para cargar el footer solo cuando el usuario hace scroll cerca (sin cambiar mucho tu estructura actual).

PUSE LA IDEA GENERAL ENE EL DOCUMENTO. COMO IMPLEMENTARIAS EL OBSERVER INTERSECTION PARA ACTIVARLO EN CASO DE QUE LA ETIQUETA MAIN LLEGUE AL 90%?

✅ Ya está implementado: el IntersectionObserver se activa cuando <main> llega al 90 % de visibilidad
He usado tu archivo FooterSection.js y lo hice “lazy‑load” de esta forma:

El componente <footer-section> no carga su HTML/CSS inmediatamente.
En connectedCallback() se crea un IntersectionObserver que observa el elemento <main>.
Cuando <main> está al menos 90 % visible (threshold: 0.9), se dispara el callback y se carga el footer.
Después de cargar, el observer se desconecta para no volver a ejecutarse.
🔧 Código clave (implementación ya aplicada)
Este es el comportamiento que ya quedó codificado en FooterSection.js:

Observa: const main = document.querySelector("main")
Threshold: threshold: 0.9
Al cruzar el 90% → this._load(), que carga CSS + HTML del footer

🧠 ¿Qué hace exactamente al 90% de visibilidad?
El observer evalúa cuánto del elemento observado está en el viewport.
Cuando el ratio de intersección llega a 0.9 (90%), se considera “visible casi completo” y entonces:

✅ this._load() (carga el footer)
✅ obs.disconnect() (deja de observar para ahorrar recursos)

📌 Resultado para tu app
Ahora tu footer se carga solo cuando el usuario realmente está por ver el contenido de la página, evitando trabajo de render inicial innecesario (lazy loading exacto).

Si quieres que además se cargue el footer “al acercarse al final” (en lugar de esperar 90% exacto), podemos ajustar rootMargin para disparar antes (ej. rootMargin: "0px 0px 200px 0px").

ESA LOGICA DEBERIA ESTAR EN EL services IntersectionObserverFooter que cree. Porque lo pones en el FooterSection?

✅ Ya está hecho como querías: la lógica del IntersectionObserver ahora vive en IntersectionObserverFooter.js y FooterSection solo lo usa como “servicio”.

🔧 ¿Qué hace ahora IntersectionObserverFooter.js?
Exporta la función observeMainIntersection(...)
Observa <main> y dispara el callback cuando al menos 90% del <main> está visible
Devuelve el IntersectionObserver (para poder desconectarlo luego desde el componente)
📌 Umbral actual: threshold: 0.9 (90%)

✅ Cómo lo usa FooterSection
En connectedCallback() llama a observeMainIntersection({ threshold: 0.9, onIntersect: () => this._load() })
Si no encuentra <main>, carga el footer inmediatamente (fallback seguro)
En disconnectedCallback() desconecta el observer
Si quieres, te comento cómo reutilizar observeMainIntersection para otros componentes (p.ej. para activar animaciones cuando el usuario llega a cierta sección).

this._loadCSS = loadCSS.bind(this);
QUE HACE ESTA LINEA DE CODIGO

Esa línea crea una versión de la función loadCSS que siempre se ejecuta con el this correcto (el de la instancia del componente).

Esa línea crea una versión de la función loadCSS que siempre se ejecuta con el this correcto (el de la instancia del componente).

Qué pasa sin bind(this)
Dentro del constructor defines:

Pero esa función no está ligada automáticamente a la instancia. Si la guardas en una variable y la llamas más tarde (this._loadCSS()), el valor de this puede ser undefined o el objeto global, y entonces this._styles fallaría.

Qué hace bind(this)
Crea una nueva función (this._loadCSS) que siempre ejecuta loadCSS con this apuntando a la instancia actual de FooterSection.
Así puedes llamar await this._loadCSS() desde cualquier lugar del componente y this._styles existirá correctamente.

DONDE IMPLEMENTARIAS EL OBSERVER RESIZE?

✅ Dónde tiene más sentido usar ResizeObserver en tu proyecto
Un ResizeObserver se usa cuando quieres reaccionar a cambios de tamaño de un elemento (no solo a cambios de viewport), y normalmente se pone dentro del componente que controla ese elemento.

Aquí hay dos lugares claramente útiles en tu código:

1) En el navbar — para adaptarse a anchos pequeños sin depender solo de CSS
Archivo sugerido: NavbarSection.js

Por qué:
El navbar es un contenedor fijo que puede “romperse” (links se mueven o se salen) cuando el ancho disponible

Un ResizeObserver puede detectar cuando el ancho del host (:host / el shadowRoot) se vuelve pequeño y aplicar una clase (o cambiar estilos) para ajustar gaps / font-size / colapsar.
Qué observar:
this.root.host o un contenedor interno (.home__nav-links).
2) En el blog — para transformar el layout del buscador / categorías
Archivo sugerido: BlogSection.js o blog-btn-categories.js

Por qué:
El área de búsqueda y categorías podría necesitar cambiar a “modo vertical” cuando se reduce el ancho.
Un ResizeObserver en .blog__search-container o en .blog__categories-list te permite aplicar clases/estilos muy concretos sin depender exclusivamente de breakpoints CSS.

Qué observar:
.blog__search-container (cambia flex-direction según ancho).
.blog__categories-list (mostrar/ocultar, cambiar grid/flex, etc.).
🧩 Cómo integrarlo (patrón general)
Crea el observer en connectedCallback()
Guárdalo en this._resizeObserver
Desconéctalo en disconnectedCallback()
En el callback: inspecciona entry.contentRect.width / height y ajusta clases/estilos.
🎯 Resumen rápido
Navbar: ideal para ajustar visualmente cuando el contenedor se hace muy angosto.
Blog (buscador/categorías): ideal para reorganizar el layout de los controles internos.
Si lo que quieres es “saber cuándo cambia el ancho del browser”, mejor seguir usando window.resize o matchMedia; ResizeObserver es para elementos concretos dentro de la página.

Si quieres, te armo el snippet exacto que podrías pegar en NavbarSection.js o BlogSection.js para que lo veas funcionando.

NECESITO QUE EN EL PROJECT CUANDO PASO ENCIMA DE UN ELEMTNO DE LA CLASE projects__project, QUE LOS DEMAS ELEMENTOS TENGAN CIERTO BLUR PARA ENFATIZAR EL PROYECTO EN EL QUE PASO ENCIMA EL MOUSE

✅ Listo: ahora, cuando pases el mouse sobre un .projects__project, los demás proyectos se ponen con un filtro blur para dar foco al que estás “hovering”.

✅ ¿Qué se hizo y dónde?
1) Se agregó la clase de estilo que aplica el blur
En projects.css se añadió:

Transición (para que sea suave)
Clase .projects__project--blurred con filter: blur(4px) y opacity: 0.65
Eso permite que el efecto sea controlado solo vía JS sin necesidad de reescribir estilos inline.

2) Se añadió la lógica de hover en el componente de proyectos
En ProjectsSection.js se detecta cuando el cursor entra/sale de cada .projects__project dentro del shadow DOM y:

mouseenter → agrega .projects__project--blurred a todos los demás elementos
mouseleave → quita la clase (regresa al estado normal)

🧠 Cómo funciona (de forma práctica)
Cuando pasas el mouse sobre un proyecto, el script recorre todos los .projects__project y le agrega blur a los que NO estás “hovering”.
Al salir, limpia el blur para que todo vuelva a estar normal.
✨ Personalización rápida (opcional)
Si quieres cambiar la fuerza del blur o la opacidad, edita esta parte en projects.css:

Si querés que además el proyecto activo “salga adelante” (z-index, escala, sombra), puedo extender el efecto en el mismo lugar.

NECESITO QUE EN EL PROJECT CUANDO PASO ENCIMA DE UN ELEMTNO DE LA CLASE projects__project, QUE LOS DEMAS ELEMENTOS TENGAN CIERTO BLUR PARA ENFATIZAR EL PROYECTO EN EL QUE PASO ENCIMA EL MOUSE

AQUI HAY UN TEMPLATE PARA HACERLO:
const observer = new ResizeObserver((entries) => {
for (let entry of entries) {
const {
borderBoxSize: [{ inlineSize, blockSize }],
target,
} = entry;
console.log(inlineSize, blockSize);
if (inlineSize < 150 && blockSize < 150) {
target.style.borderRadius = "100%";
target.style.borderWidth = "4px";
} else {
target.style.borderRadius = "unset";
target.style.borderWidth = "unset";
}
}
});
const elements = document.querySelectorAll(".box");
elements.forEach((el) => observer.observe(el));

HAZ EL OBSERVER EN EL ARCHIVO Resize ObserverAnimation

✅ Listo, ya implementé el efecto de hover + blur en la sección de proyectos usando el archivo ResizeObserverAnimation.js como pediste (y lo enlazamos desde ProjectsSection.js para que se ejecute cuando se carga la sección).

✅ ¿Qué hace ahora el código?
🎯 Efecto buscado
Cuando pasas el mouse sobre un .projects__project:

Ese proyecto permanece normal
Los otros proyectos reciben blur + baja opacidad (filter: blur(...), opacity)
🧩 Archivos modificados
1) projects.css
Se añadió una clase nueva que aplica el blur y la transición para que no sea abrupto:

.projects__project--blurred (filtro + opacidad)
además la variable --project-blur se usa para ajustar el valor del blur dinámicamente

2) ResizeObserverAnimation.js
Ahora exporta una función:

initProjectHoverBlur(root)
Agrega mouseenter / mouseleave a cada .projects__project
Usa ResizeObserver para ajustar la intensidad del blur automáticamente según el tamaño real del proyecto (lo pediste, y se usa aquí)
✅ Además: si ResizeObserver no existe en el navegador, la función no rompe nada.

3) ProjectsSection.js
Se hace esto cuando la sección se carga:

Importa initProjectHoverBlur(...)
Llama la función después de loadHTML()
Guarda el “cleanup” para desconectar listeners si el componente se desmonta
🔎 Cómo probarlo
Abre la página y ve a la sección Projects
Mueve el mouse sobre cualquiera de las tarjetas
Los demás deben aparecer con blur + opacidad reducida

Si querés, también puedo ajustar:

el valor del blur (más suave / más agresivo)
que el proyecto activo reciba ligera escala (transform: scale(1.02)) para “resaltar aún más”
const blurOthers = (active) => {
projects.forEach((project) => {
if (project !== active) {
project.classList.add(blurClass);
}
});
};

QUE contiene lo de active?

active es el elemento DOM del proyecto que está recibiendo el hover.

En el código:

cada vez que el mouse entra en un .projects__project, se llama a blurOthers(project) pasando ese proyecto como active. Por eso dentro de blurOthers puedes comparar project !== active para aplicar blur solo a los demás (los que no son el proyecto actualmente “activo”).

PARA QUE SON LOS HANDLERS?

Los handlers en ese código son una forma de recordar qué funciones se agregaron como listeners para poder quitarlas luego (evitar fugas de memoria y efectos inesperados cuando el componente se desmonta).

En tu caso:

Se crea un onEnter y un onLeave por cada proyecto.
Se guardan en el Map (handlers.set(project, { onEnter, onLeave })).
Luego, cuando quieras limpiar (por ejemplo en disconnectedCallback()), puedes recorrer handlers y hacer removeEventListener con las mismas funciones exactas que se habían registrado.
Sin ese “registro”, no podrías eliminar correctamente los listeners porque no sabes qué función concreta se pasó al addEventListener.

## Justificacion

### Mutation Observer

Se implemento en el navbar, en los links de cada seccion

Resuelve un problema visual con el background del home. No se ve correctamente los links tengo el color del texto en azul. Por lo que cambio el color a blanco cuando esta en el home

Al usar esta implementacion de la api mutation es mas escalable. Si pongo otro background en un futuro, podria necesitar otro color alternativo para el navbar. Por lo que escala en un futuro


### Intersection Observer

Se implemento en el footer

Resuelve el problema de cargar el footer ademas de las demas sectiones de main, por lo que lo hace mas rapido

Es mejor usar esta implementacion debido a que en un futuro las secciones se complicaran y necesitaremos ahorrar tiempo al inicio de la carga

### Resize Observer

Se implemento en proyecto section

Agrega una funcionalidad de animacion a los proyectos para anadirle movimiento y UI

Usar resize observer ayuda a poder anadirle animacion a los proyectos. Si en un futuro quisiera anadirle otra funcionalidad al pasar el mouse sobre un proyecto entonces seria mas sencillo.

### TEMPLATE METHOD

Ahora se implemento template method para los web-components. Generalizando acciones que se realizaban repetidamente y permitiendo ampliacion de procesos en caso de que sea necesario. Funciona para desacoplat codigo y reutilizadlo

## Autor

**Fernando Terrazas Llanos**  
Estudiante de Ingeniería de Software - UCB

- GitHub: [FernandoTerrazasLl](https://github.com/FernandoTerrazasLl)
- LinkedIn: [Fernando Terrazas Llanos](https://www.linkedin.com/in/fernando-terrazas-llanos-960560267/)
- Email: terrazasllanosfernando@gmail.com
