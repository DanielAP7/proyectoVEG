const { connectToMysql } = require('../dbconnection');

class DecisionesModel {
    static async consultar() {
        let db = await connectToMysql();
        let query = db('decisiones');
        return await query;
    }

    static async consultarPorId(id) {
        let db = await connectToMysql();
        return await db('decisiones').where('id_decision', id);
    }

    static async insertar(decision) {
        let db = await connectToMysql();
        const result = await db('decisiones').insert(decision).returning('id_decision');
        return result[0];
    }

    static async actualizar(id, campos) {
        let db = await connectToMysql();
        return await db('decisiones').where('id_decision', id).update(campos);
    }

    static async reemplazar(id, newData) {
        let db = await connectToMysql();
        newData['id_decision'] = id;
        await db('decisiones').where('id_decision', id).del();
        await db.insert(newData).into('decisiones');
        return id;
    }
}

module.exports = DecisionesModel;
