const mySql = require("mysql2/promise");

const pool = mySql.createPool({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "college",
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

module.exports = pool;