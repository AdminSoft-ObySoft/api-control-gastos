## En el package.json
Cambiamos de index.js a ts
``` 
"main": "index.ts",
``` 

## Iniciamos typescript
```
tsc --init 
``` 
## En el tsconfig.json
```
"outDir": "dist/"
```
## Para que se genere los archivos compilados de ts a js
```
tsc --w
```
## Dependencias a instalar
Recuerda que debes también instalar typescript, nodemon y las siguientes:
```
npm i cors express socket.io
```

## Express type
Para las ayudas de express
```
npm i --save-dev @types/express
```

