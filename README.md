# Authentication API

Una aplicación de ejemplo que demuestra cómo implementar la autenticación de usuarios con Node.js, Express, MongoDB y tokens JWT.

## Funcionalidades

- Registro de usuarios.
- Inicio de sesión de usuarios.
- Cierre de sesión de usuarios.

## Requisitos

- Node.js
- MongoDB

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/authentication-api.git
   cd authentication-api
   ```
   ```
   npm install
   ```
2. Clona este repositorio:
   Configura tu base de datos MongoDB en `app.js.`
3. Inicia el servidor:
   ```
   node app.js
   ```
4. La aplicación estará en funcionamiento en http://localhost:3000 o en el puerto que hayas especificado.

## Uso

Puedes interactuar con la API utilizando solicitudes HTTP (por ejemplo, con herramientas como Postman o CURL). A continuación, se describen las rutas disponibles:

- Registro de usuario:
  - Método: POST
  - URL: `http://localhost:3000/register`
  - Cuerpo de la solicitud (en formato JSON):

    ```json
    {
      "username": "nombre_de_usuario",
      "password": "contraseña_segura"
    }
    ```

- Inicio de sesión:
  - Método: POST
  - URL: `http://localhost:3000/login`
  - Cuerpo de la solicitud (en formato JSON):

    ```json
    {
      "username": "nombre_de_usuario",
      "password": "contraseña_segura"
    }
    ```

- Cierre de sesión:
  - Método: POST
  - URL: `http://localhost:3000/logout`

## Pruebas

La aplicación incluye pruebas para verificar la funcionalidad de registro, inicio de sesión y cierre de sesión. Para ejecutar las pruebas, utiliza el siguiente comando:
  ```
    npx mocha test.js
  ```