# Introducción al testing con JS

## 📁/api

### Ingresar a api

```sh
cd api
```

### Scripts del proyecto

```sh
# Iniciar en servidor en: http://localhost:3000/
npm run start

# Ejecutar las pruebas unitarias
npm run test

# Ejecutar las pruebas end to end (punto a punto)
npm run test:e2e
```

### Docker Compose

```sh
# Iniciar todos los servicios
docker-compose up -d

# Iniciar un servicio individual
docker-compose up -d mongo

docker-compose up -d mongo-e2e

# Apagar los servicios
docker-compose down
```

### Rutas (endpoints):

- [http://localhost:3000](http://localhost:3000)
- [http://localhost:3000/api/v1/books](http://localhost:3000/api/v1/books)

---

## 📁/demos

Proyecto para realizar pruebas unitarias a funciones

### Ingresar a demos

```sh
cd demos
```

### Pruebas unitarias - Jest

```sh
# Ejecutar los tests
npm run test

# Ejecutar un test específico
npm run test -- 06-person

# Ejecutar todos los tests y generar un informe de cobertura
npm run test -- --coverage
```

### Pruebas estáticas - EsLint

```sh
# Inicializar la configuración de ESLint en el proyecto.
npx eslint --init

# Ejecuta una herramienta de linting para analizar el código y encontrar posibles errores o problemas de estilo
npm run lint

# Este script también ejecuta la herramienta de linting, pero además intenta corregir automáticamente los problemas encontrados
npm run lint:fix
```

## 📁/webapp

### UI tests

Son pruebas automatizadas que verifican el correcto funcionamiento de la interfaz de usuario de una aplicación, simulando las acciones de un usuario y comprobando que los elementos de la interfaz respondan correctamente.

Se pueden realizar UI Tests con [Playwright](https://playwright.dev/)

### Ingresar a webapp

```sh
cd webapp
```

### Instalar e inicializar Playwright

```sh
npm init playwright@latest
```

### Scripts

```sh
# Ejecutar los tests
npx playwright test

# Mostrar el reporte de los tests ejecutados
npx playwright show-report
```
