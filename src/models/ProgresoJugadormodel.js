const { connectToMysql } = require('../dbconnection');

class ProgresoJugadorModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('progreso_jugador');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('progreso_jugador').where('id_progreso', id);
    }

    static async insertar(progresoJugador) {
        let db = await connectToMysql();
        const result = await db('progreso_jugador').insert(progresoJugador).returning('id_progreso');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('progreso_jugador').where('id_progreso', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_progreso'] = id;
        await db('progreso_jugador').where('id_progreso', id).del();
        await db.insert(newData).into('progreso_jugador');
        return id;
    }
}

module.exports = ProgresoJugadorModel;
