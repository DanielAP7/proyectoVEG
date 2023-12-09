const personajesModel = require('../models/personajesModel');

class PersonajesController {
    static async indexGet(req, res) {
        let data = await personajesModel.consultar();
        res.send(data);
    }

    static async itemGet(req, res) {
        let id = req.params.id;
        let data = await personajesModel.consultarPorId(id);
        if (data.length > 0) {
            res.send(data[0]);
            return;
        }
        res.status(404).send({ error: 'Not found' });
    }

    static async indexPost(req, res) {
        try {
            const newData = req.body;

            const insertedId = await personajesModel.insertar(newData);

            res.status(201)
                .header('Location', `/personajes/${insertedId}`)
                .send({ status: 201, message: 'Created' });
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemPut(req, res) {
        try {
            const id = req.params.id;
            const updatedData = req.body;

            const result = await personajesModel.reemplazar(id, updatedData);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Updated successfully' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }

    static async itemPatch(req, res) {
        try {
            const id = req.params.id;
            const updatedFields = req.body;

            const result = await personajesModel.actualizar(id, updatedFields);

            if (result === 0) {
                res.status(404).send({ errno: 404, error: 'Not found' });
            } else {
                res.send({ message: 'Successfull partial update' });
            }
        } catch (error) {
            console.error(error);
            res.status(400).send({ errno: 400, error: 'Bad Request' });
        }
    }
}

module.exports = PersonajesController;
