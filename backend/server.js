const express = require('express');
const app = express();
const port = 3000;

// Middleware para permitir CORS
const cors = require('cors');
app.use(cors());
app.use(express.json()); // Para poder parsear JSON en el cuerpo de las peticiones

// Ruta para obtener productos
app.get('/api/productos', (req, res) => {
  res.json([
    { id: 1, nombre: 'Producto 1', precio: 100 },
    { id: 2, nombre: 'Producto 2', precio: 200 }
  ]);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});
