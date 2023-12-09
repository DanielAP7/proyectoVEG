const express = require('express');
const app = express();
const puerto = 80;


app.use(express.json());

const Personajecontrollers=require('./controllers/Personajecontrollers');
app.get('/personaje',Personajecontrollers.indexGet);
app.get('/personaje/:id([0-9]+)', Personajecontrollers.ItemGet);
app.post('/personaje', Personajecontrollers.indexPost);
app.put('/personaje/:id([0-9]+)', Personajecontrollers.itemPut);
app.patch('/personaje/:id([0-9]+)', Personajecontrollers.itemPatch);

const Decisionescontroller=require('./controllers/Decisionescontroller');
app.get('/Decisiones',Decisionescontroller.indexGet);
app.get('/Decisiones/:id([0-9]+)', Decisionescontroller.ItemGet);
app.post('/Decisiones', Decisionescontroller.indexPost);
app.put('/Decisiones/:id([0-9]+)', Decisionescontroller.itemPut);
app.patch('/Decisiones/:id([0-9]+)', Decisionescontroller.itemPatch);

const Escenascontroller=require('./controllers/Escenascontroller');
app.get('/Escenas',Escenascontroller.indexGet);
app.get('/Escenas/:id([0-9]+)', preguntastestController.ItemGet);
app.post('/Escenas', Escenascontroller.indexPost);
app.put('/Escenas/:id([0-9]+)', Escenascontroller.itemPut);
app.patch('/Escenas/:id([0-9]+)', Escenascontroller.itemPatch);

const ProgresoJugadorcontroller=require('./controllers/ProgresoJugadorcontroller');
app.get('/pro_jug',ProgresoJugadorcontroller.indexGet);
app.get('/pro_jug/:id([0-9]+)', ProgresoJugadorcontroller.ItemGet);
app.post('/pro_jug', ProgresoJugadorcontroller.indexPost);
app.put('/pro_jug/:id([0-9]+)', ProgresoJugadorcontroller.itemPut);
app.patch('/pro_jug/:id([0-9]+)', ProgresoJugadorcontroller.itemPatch);


app.get('/', function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.send('Funciono!');
});

app.listen(puerto, function() {
    console.log("Servidor iniciado");
});

/*

*/
//consultar categorias, productos y buscar individualmente el elemento que se especifica.
//Respuestas que deben devolver cada metodo POST,GET