# Uso del Repositorio

Para establecer un estándar en el uso del repositorio, se utilizarán las siguientes prácticas:

## Flujo de trabajo

Toda rama de desarrollo deberá partir de la rama **develop**, siguiendo su respectivo formato de nombramiento de ramas. La rama **master** únicamente recibirá merge de develop una vez que se hayan ejecutado pruebas y verificado su estabilidad, ya que la rama master realiza un deploy automático al hacer merge.

> Para hacer merge de una rama de desarrollo a la rama **develop**, se deberá hacer mediante pull request, y requerirá el review y aprove de 2 miembros del equipo.

## Nombramiento de ramas

Por el momento, para mantener sencillo el nombramiento, se seguirá el siguiente formato:

> < tipo >/nombre

Los tipos se dividirán en las siguientes opciones (si crees que hay alguna que debería estar, sugierela al equipo, esto no está hecho en piedra):

- **core:** trabajo en algún fundamento del proyecto (configuración de conexión a bd, librerías de ui, versiones de plugins, etc.)
- **api:** trabajo en desarrollo de alguna API (puede ser db, storage, auth, etc.).
- **view:** trabajo en alguna vista del sistema o algún aspecto visual.
- **feature:** trabajo en algún feature del sistema (registrar un movimiento, registro de un cliente, etc.)
- **fix-[id del bug(opcional)]:** corrección de algún aspecto existente del sistema, y en caso de ser un bug registrado, agregar el id al nombramiento de la rama.

## Nombramiento de commits

Por el momento, intentaremos confiar en el equipo, y los commits serán nombrados a juicio del desarrollador, confiando en que serán nombres decriptivos y claros respecto a lo que se está haciendo. En caso de notar falta en este aspecto, se considerará establecer un formato de nombramiento de commits.
