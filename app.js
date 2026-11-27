const express = require('express');

//appel de la fonction express pour créer une application express
// la variable app represente notre serveur web
const app = express();
//sur qu'elle port le serveur va écouter les requêtes client
const port = 3000;

app.get('/', (req, res) => {
    // le corps de la fonction
    res.send('Hello, express!');
});

// le serveur écoute les requêtes sur le port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});