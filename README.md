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
