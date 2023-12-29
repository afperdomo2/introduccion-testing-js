# Api

```sh
# Inicia en servidor en: http://localhost:3000/
npm run start

npm run test
```

```sh
docker-compose up -d mongo

docker-compose down
```

### Rutas:

[http://localhost:3000/api/v1/books](http://localhost:3000/api/v1/books)

# Demos

Ingresar a demos

```sh
cd demos
```

## 1. Pruebas unitarias - Jest

```sh
# Ejecutar los test
npm run test

# Ejecutar un test específico
npm run test -- 06-person

# Ejecuta los tests y genera un informe de cobertura
npm run test -- --coverage
```

## 2. Pruebas estáticas - EsLint

```sh
# Inicializa la configuración de ESLint en el proyecto.
npx eslint --init

# Ejecuta una herramienta de linting para analizar el código y encontrar posibles errores o problemas de estilo
npm run lint

# Este script también ejecuta la herramienta de linting, pero además intenta corregir automáticamente los problemas encontrados
npm run lint:fix
```
