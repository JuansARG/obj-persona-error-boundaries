# Implementacion rapida y sencila sobre como manjear errores inesperados en tu proyecto React con un Class Component

Primero instalamos dependencias y corremos el proyecto en local

- npm run install
- npm run dev

## Modo de uso

Luego de instalar y correr esta demo vamos a poder visualizar 4 botones

- Mostrar lista vacia (ROMPER) / Mostrar lista vacia
- Obtener usuarios
- Modificar URL (ROMPER)
- Reiniciar

### Mostrar lista vacia

Este boton nos va a servir para renderizar una lista, en terminos tecnicos vamos a mapear un array en la medida que el valor exista para renderizar un elemento li por cada item

### Obtener usuarios

Este boton nos va a servir para hacer el fetching a una API publica para obtener los usuarios y luego poder renderizar la lista antes mencionada

### Modificar

Este boton nos va a servir para modificar la URL a la que vamos a apuntar para obtener los usuarios, modificacion que va a ocasionar un error

### Reiniciar

Por ultimo tenemos el boton reiniciar que como su nombre lo indica va a reiniciar todo el estado de la aplicacion, la URL y el array que contiene a los usuarios anteriormente obtenidos

### A ROMPER

Para poder ver el manejador de errores en accion podemos hacer lo siguiente:

  1. Renderizar la lista vacia
  2. Romper la url para que haga una peticion y falle

Una vez renderizado el componente que se devuelve cuando tenemos un error podremos reiniciar el estado de la aplicación para comenzar de nuevo

## Ventajas de manejar los errores

  1. Mas amigable de cara al usuario de la app, es decir no es lo mismo tener una call stack que tener un mensaje ameno indicandote los pasos a seguir en caso de no funcionar segun lo esperado
  2. Podemos registrar los errores desde esta capa de forma global
