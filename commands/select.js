async function QuerySelect() {
    const db = require("../db");
    const conn = await db.connect();

    const [rows] = await conn.query('SELECT * FROM Usuario');
    return rows;
}
module.exports = {QuerySelect}