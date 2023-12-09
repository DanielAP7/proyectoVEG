const { connectToMysql } = require('../dbconnection');

class EscenasModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('escenas');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('escenas').where('id_escena', id);
    }

    static async insertar(escena) {
        let db = await connectToMysql();
        const result = await db('escenas').insert(escena).returning('id_escena');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('escenas').where('id_escena', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_escena'] = id;
        await db('escenas').where('id_escena', id).del();
        await db.insert(newData).into('escenas');
        return id;
    }
}

module.exports = EscenasModel;
