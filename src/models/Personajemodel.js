const { connectToMysql } = require('../dbconnection');

class PersonajesModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('personajes');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('personajes').where('id_personaje', id);
    }

    static async insertar(personaje) {
        let db = await connectToMysql();
        const result = await db('personajes').insert(personaje).returning('id_personaje');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('personajes').where('id_personaje', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_personaje'] = id;
        await db('personajes').where('id_personaje', id).del();
        await db.insert(newData).into('personajes');
        return id;
    }
}

module.exports = PersonajesModel;
