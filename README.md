# App Superheroes

Aplicación para visualizar y votar por super heroes hecha con PHP (Laravel) y Javascript (React)

## Requerimientos del ambiente

Para poder instalar y ejecutar este proyecto, el ambiente donde se ponga debe cumpliar las siguientes condiciones:

- PHP >= 7.2.5
- BCMath PHP Extension
- Ctype PHP Extension
- Fileinfo PHP extension
- JSON PHP Extension
- Mbstring PHP Extension
- OpenSSL PHP Extension
- PDO PHP Extension
- Tokenizer PHP Extension
- XML PHP Extension
- MySQL Server 5.7
- Git
- Composer
- NodeJs
- NPM
- Node >= 13

## Instalación del servicio backend

Se debe seguir la siguiente secuencia de comandos y acciones (Terminal de comandos Linux, Unix o CMD) para tener una correcta ejecución del proyecto.

```bash
git clone https://github.com/dsalazar93/superheroes_test
cd backend_service
composer install
php artisan migrate
php artisan db:seed
```
- En una instancia de MySQL Server crear una bd con el nombre superheroes_test

- Copiar y pegar el archivo **.env** entregado

- Luego se deben cambiar los siguientes valores dentro del archivo **.env**:

```env
DB_USERNAME=
DB_PASSWORD=
```
Los valores **DB_USERNAME** y **DB_PASSWORD** deben ser definido de acuerdo a sus acceso de MySQL Server.

Generar clave de la aplicación y ejecutar servidor
```bash
php artisan key:generate
php artisan serve
```


Con estos pasos realizados el servicio API REST queda expuesto en **http://localhost:8000/api/v1/**

## Instalación de la app frontend

Estando desde la raíz del proyecto ejecutar los siguientes comandos en terminal:

```bash
cd frontend_app
npm install
npm start
```

Con estos pasos realizados la aplicación se puede visualizar en navegador a través de la url **http://localhost:3000**



## Observaciones sobre la construcción del proyecto

- El diseño frontend de la aplicación esta muy vinculado al uso de clases de la libreria Bootstrap y CSS.
- El servicio web cuenta con los siguientes endpoints:
- http://localhost:8000/api/v1/allsuperheroes (Carga la data de todos los superheroes)
- http://localhost:8000/api/v1/superhero/{superhero_id} (Carga la data de un superheroe trayendolo por el id)
- http://localhost:8000/api/v1/superheroes/{superheroes_ids} (Carga la data de unos superheroes específicos, sirviendo este endpoint para el ranking)
- http://localhost:8000/api/v1/getToken (Genera un nuevo token por si se desea cambiar en el consumo que se hace desde el frontend)

**Nota: Todos los endpoints que cargan información de superheores, obligatoriamente deben tener en el query params el token.**
- Proyecto realizado por [dsalazar93](https://github.com/dsalazar93)