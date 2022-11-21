require("dotenv").config();
const express = require('express');
const bodyParser = require("body-parser");
const app = express();

// Postgres Configuration
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT
});

// the pool will emit an error on behalf of any idle clients
// it contains if a backend error or network partition happens
pool.on('error', (err, client) => {
  console.error('Unexpected Error:', err);
  process.exit(-1);
});

//Base de datos
let user = [];
const rootUrl = '/api';

app.use(bodyParser.json());

//Usuarios (Prueba)
app.get(`${rootUrl}/usuario`, (req, res) => { 
    ;(async () => {
        const q = (`SELECT * FROM usuarios`);
        const { rows } = await pool.query(q);
        res.json(rows);
      })().catch(err => {
        res.json(err.stack)
    })
});

app.post(`${rootUrl}/usuario`, (req, res) => {
    const {nombre, contrasena} = req.body;
    ;(async () => {
        const q = (`INSERT INTO usuarios (nombre, contrasena) VALUES('${nombre}', '${contrasena}')`);
        await pool.query(q);
        res.json({status: "Usuario agregado"});
      })().catch(err => {
        res.json(err.stack)
    })
});

app.delete(`${rootUrl}/usuario/:id`, (req, res) => {
    const {id} = req.params;
    ;(async () => {
        const q = (`DELETE FROM usuarios WHERE nombre = '${id}'`);
        await pool.query(q);
        res.json({status: "Usuario eliminado"});
      })().catch(err => {
        res.json(err.stack)
    })
});

app.put(`${rootUrl}/usuario/:id`, (req, res) => {
    const {id} = req.params;
    const {nombre, contrasena} = req.body;
    ;(async () => {
        const q = (`UPDATE usuarios SET nombre = '${nombre}', contrasena = '${contrasena}' WHERE nombre = '${id}'`);
        await pool.query(q);
        res.json({status: "Usuario modificado"});
      })().catch(err => {
        res.json(err.stack)
    })
});


app.get('/api/status', (req, res) => {
  res.json({info: 'Node.js, Express, and Postgres API'});
});


//Servidor
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listen to the specified port, otherwise 3080
const PORT = process.env.PORT || 3080;
const server = app.listen(PORT, () => {
  console.log(`Server Running: http://localhost:${PORT}`);
});

/**
 * The SIGTERM signal is a generic signal used to cause program 
 * termination. Unlike SIGKILL , this signal can be blocked, 
 * handled, and ignored. It is the normal way to politely ask a 
 * program to terminate. The shell command kill generates 
 * SIGTERM by default.
 */
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server Close: Process Terminated!');
    });
});