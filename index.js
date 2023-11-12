const express = require('express')
const path = require('path');

const app = express();

const puerto = process.env.PORT || 8080;

// Define la ruta completa al archivo index.html en el directorio raiz
const indexPath = path.join(__dirname, 'index.html');

// Configura el middleware para servir archivos estaticos desde el directorio "public"
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function (req, res) {
    // Envia el archivo HTML
    res.sendFile(indexPath);
})

app.listen(puerto, function () {
    console.log(`La aplicación está escuchando en el puerto ${puerto}`);
});
