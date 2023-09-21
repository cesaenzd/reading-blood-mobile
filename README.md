# Reading Blood - Aplicación Móvil

Powered by [Ionic Angular](https://ionicframework.com/docs/angular/overview).

## Funcionamineto

El flujo del funcionamiento de la app consta en lo siguientes pasos:

1. Tomar o importar una imagen por medio de la camara del dispositivo.
  - Se ejecuta la funcion takePicture().
  - Se convierte la imagen a una cadena con Base64.

2. Se manda la imagen al servidor que realizara el conteo de las células por IA.
  - La imagen en Base64 se envia en formato JSON con el parametro "image".

3. Se reciben los resultados del conteo de las células y la imagen procesada en Base64.
  - Los parametros que se esperan en la respuesta son en formato JSON:
    + picture: Imagen procesada en Base64.
    + all: Conteo total de células.
    + red: Conteo de eritrocitos (glóbulos rojos).
    + white: Conteo de leucocitos (glóbulos blancos).

  - Los parametros del JSON actualizan las variables para mostrar la información en la GUI.

## Ejecutar la aplicación

> Asumiendo que se tiene node y angular instalados, instalar Ionic si no se tiene previamente: `npm install -g @ionic/cli`.

1. Clonar el repositorio.
2. Ir a la ruta del repositorio en la consola: `cd reading-blood-mobile`.
3. Instalar los paquetes de la aplicación: `npm install`.
4. Correr el servicio: `ionic serve`.
