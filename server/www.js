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
const rootUrl = '/api';

app.use(bodyParser.json());

//Login
app.get(`${rootUrl}/login`, (req, res) => { 
  ;(async () => {
      const q = (`SELECT * FROM login`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/login/:id`, (req, res) => {
  const {id} = req.params;
  const {usuario, contrasena} = req.body;
  ;(async () => {
      const q = (`UPDATE login SET usuario = '${usuario}', contrasena = '${contrasena}' WHERE id_login = ${id}`);
      await pool.query(q);
      res.json({status: "Login modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

//Residentes
app.get(`${rootUrl}/residentes`, (req, res) => { 
  ;(async () => {
      const q = (`SELECT * FROM residentes`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/residentesH/:habilitado`, (req, res) => { 
  const {habilitado} = req.params;
  ;(async () => {
      const q = (`SELECT * FROM residentes WHERE habilitado = ${habilitado}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/residentes/:id`, (req, res) => {
  const {id} = req.params;
  ;(async () => {
      const q = (`SELECT * FROM residentes WHERE id_res = ${id}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/residenteNom/:nombre`, (req, res) => {
  const {nombre} = req.params;
  ;(async () => {
      const q = (`SELECT * FROM residentes WHERE concat(LOWER(nombre), ' ', LOWER(apellido_p), ' ', LOWER(apellido_m))
      LIKE '%${nombre}%' AND habilitado = true`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/residenteNom2/:nombre`, (req, res) => {
  const {nombre} = req.params;
  ;(async () => {
      const q = (`SELECT * FROM residentes WHERE concat(LOWER(nombre), ' ', LOWER(apellido_p), ' ', LOWER(apellido_m))
      LIKE '%${nombre}%' AND habilitado = false`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/residentesC/:habilitado`, (req, res) => {
  const {habilitado} = req.params;
  ;(async () => {
      const q = (`SELECT COUNT(id_res) FROM residentes WHERE habilitado = ${habilitado}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.post(`${rootUrl}/residentes`, (req, res) => {
  const {
    nombre,
    apellido_p,
    apellido_m,
    sexo,
    fecha_nacimiento,
    edad,
    telefono,
    habilitado,
    id_casa
  } = req.body;
  ;(async () => {
      const q = (`INSERT INTO residentes VALUES 
      (DEFAULT, '${nombre}', '${apellido_p}', '${apellido_m}', '${sexo}', '${fecha_nacimiento}', 
      ${edad}, '${telefono}', ${habilitado}, ${id_casa});`);
      await pool.query(q);
      res.json({status: "Residente agregado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.delete(`${rootUrl}/residentes/:id`, (req, res) => {
  const {id} = req.params;
  ;(async () => {
      const q = (`DELETE FROM residentes WHERE id_res = ${id}`);
      await pool.query(q);
      res.json({status: "Residente eliminado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/residentes/:id`, (req, res) => {
  const {id} = req.params;
  const {
    nombre,
    apellido_p,
    apellido_m,
    sexo,
    fecha_nacimiento,
    edad,
    telefono,
    habilitado,
    id_casa
  } = req.body;

  ;(async () => {
      const q = (`UPDATE residentes SET 
      nombre ='${nombre}', apellido_p = '${apellido_p}', apellido_m ='${apellido_m}', sexo = '${sexo}', 
      fecha_nacimiento = '${fecha_nacimiento}', edad = ${edad}, telefono = '${telefono}',
      habilitado = ${habilitado}, id_casa = ${id_casa} WHERE id_res = ${id}`);
      await pool.query(q);
      res.json({status: "Residente modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/residentesH/:id`, (req, res) => {
  const {id} = req.params;
  const {habilitado} = req.body;

  ;(async () => {
      const q = (`UPDATE residentes SET habilitado = ${habilitado} WHERE id_res = ${id}`);
      await pool.query(q);
      res.json({status: "Residente modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

//Casas
app.get(`${rootUrl}/casas`, (req, res) => { 
  ;(async () => {
      const q = (`SELECT * FROM casas`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/casas/:id`, (req, res) => {
  const {id} = req.params; 
  ;(async () => {
      const q = (`SELECT * FROM casas WHERE id_casa = ${id}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.post(`${rootUrl}/casas`, (req, res) => {
  const {
    num_dom,
    vialidad_1,
    vialidad_2,
    referencias
  } = req.body;
  ;(async () => {
      const q = (`INSERT INTO casas VALUES 
      (DEFAULT, '${num_dom}', '${vialidad_1}', '${vialidad_2}', '${referencias}');`);
      await pool.query(q);
      res.json({status: "Casa agregada"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.post(`${rootUrl}/casasE`, (req, res) => {
  const {
    num_dom,
    vialidad_1,
    vialidad_2,
    referencias
  } = req.body;
  ;(async () => {
      const q = (`INSERT INTO casas VALUES 
      (DEFAULT, '${num_dom}', '${vialidad_1}', '${vialidad_2}', '${referencias}') RETURNING id_casa;`);
      const {rows} = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.delete(`${rootUrl}/casas/:id`, (req, res) => {
  const {id} = req.params;
  ;(async () => {
      const q = (`DELETE FROM casas WHERE id_casa = ${id}`);
      await pool.query(q);
      res.json({status: "Casa eliminado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/casas/:id`, (req, res) => {
  const {id} = req.params;
  const {
    num_dom,
    vialidad_1,
    vialidad_2,
    referencias
  } = req.body;
  ;(async () => {
      const q = (`UPDATE casas SET num_dom ='${num_dom}', vialidad_1 = '${vialidad_1}',
      vialidad_2 = '${vialidad_2}', referencias = '${referencias}' WHERE id_casa = ${id}`);
      await pool.query(q);
      res.json({status: "Casa modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

//Pagos
app.get(`${rootUrl}/pagos`, (req, res) => {
  ;(async () => {
      const q = (`SELECT * FROM pagos`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagos/:id`, (req, res) => { 
  ;(async () => {
    const {id} = req.params; 
      const q = (`SELECT * FROM pagos WHERE folio = ${id}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagosR/:id_res`, (req, res) => { 
  ;(async () => {
    const {id_res} = req.params; 
      const q = (`SELECT * FROM pagos WHERE id_res = ${id_res} AND habilitado = true`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/mesesR/:id_res/:ano`, (req, res) => { 
  ;(async () => {
    const {id_res, ano} = req.params; 
      const q = (`SELECT EXTRACT(MONTH FROM fecha_pago) as mes FROM pagos WHERE id_res = ${id_res} 
      AND EXTRACT(YEAR FROM fecha_pago) = ${ano} AND habilitado = true`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagosH/:habilitado`, (req, res) => { 
  const {habilitado} = req.params;
  ;(async () => {
      const q = (`SELECT * FROM pagos WHERE habilitado = ${habilitado}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagosDom/:habilitado`, (req, res) => { 
  const {habilitado} = req.params;
  ;(async () => {
      const q = (`SELECT pagos.folio, casas.num_dom, pagos.fecha_pago FROM pagos 
      INNER JOIN residentes ON residentes.id_res = pagos.id_res
      JOIN casas ON casas.id_casa = residentes.id_casa WHERE pagos.habilitado = ${habilitado}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagoDom/:folio`, (req, res) => { 
  const {folio} = req.params;
  ;(async () => {
      const q = (`SELECT pagos.folio, casas.num_dom, pagos.fecha_pago FROM pagos 
      INNER JOIN residentes ON residentes.id_res = pagos.id_res
      JOIN casas ON casas.id_casa = residentes.id_casa WHERE pagos.folio = ${folio}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagosC/:habilitado`, (req, res) => {
  const {habilitado} = req.params;
  ;(async () => {
      const q = (`SELECT COUNT(folio) FROM pagos WHERE habilitado = ${habilitado}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagosDomE/:domicilio`, (req, res) => {
  const {domicilio} = req.params;
  ;(async () => {
      const q = (`SELECT pagos.folio, casas.num_dom, pagos.fecha_pago FROM pagos 
      INNER JOIN residentes ON residentes.id_res = pagos.id_res
      JOIN casas ON casas.id_casa = residentes.id_casa
      where LOWER(casas.num_dom) LIKE '%${domicilio}%' AND pagos.habilitado = true
      `);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/pagosDomE2/:domicilio`, (req, res) => {
  const {domicilio} = req.params;
  ;(async () => {
      const q = (`SELECT pagos.folio, casas.num_dom, pagos.fecha_pago FROM pagos 
      INNER JOIN residentes ON residentes.id_res = pagos.id_res
      JOIN casas ON casas.id_casa = residentes.id_casa
      where LOWER(casas.num_dom) LIKE '%${domicilio}%' AND pagos.habilitado = false
      `);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.post(`${rootUrl}/pagos`, (req, res) => {
  const {
    fecha_pago,
    hora_pago,
    nombre_pag,
    apellido_p_pag,
    apellido_m_pag,
    concepto,
    cantidad_pagar,
    tipo_pago,
    habilitado,
    id_res
  } = req.body;
  ;(async () => {
      const q = (`INSERT INTO pagos VALUES
      (DEFAULT, '${fecha_pago}', '${hora_pago}', '${nombre_pag}', '${apellido_p_pag}', 
      '${apellido_m_pag}', '${concepto}', ${cantidad_pagar}, '${tipo_pago}', ${habilitado}, ${id_res});`);
      await pool.query(q);
      res.json({status: "Pago agregado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.delete(`${rootUrl}/pagos/:id`, (req, res) => {
  const {id} = req.params;
  ;(async () => {
      const q = (`DELETE FROM pagos WHERE folio = ${id}`);
      await pool.query(q);
      res.json({status: "Pago eliminado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.delete(`${rootUrl}/pagosR/:id`, (req, res) => {
  const {id} = req.params;
  ;(async () => {
      const q = (`DELETE FROM pagos WHERE id_res = ${id}`);
      await pool.query(q);
      res.json({status: "Pago eliminado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/pagos/:id`, (req, res) => {
  const {id} = req.params;
  const {
    fecha_pago,
    hora_pago,
    nombre_pag,
    apellido_p_pag,
    apellido_m_pag,
    concepto,
    cantidad_pagar,
    tipo_pago,
    habilitado,
    id_res
  } = req.body;
  ;(async () => {
      const q = (`UPDATE pagos SET fecha_pago = '${fecha_pago}',hora_pago = '${hora_pago}', nombre_pag = '${nombre_pag}', 
      apellido_p_pag = '${apellido_p_pag}',apellido_m_pag = '${apellido_m_pag}',concepto = '${concepto}', 
      cantidad_pagar = ${cantidad_pagar}, tipo_pago = '${tipo_pago}', habilitado = ${habilitado}, 
      id_res = ${id_res} WHERE folio = ${id}`);
      await pool.query(q);
      res.json({status: "Pago modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/pagosH/:id`, (req, res) => {
  const {id} = req.params;
  const {habilitado} = req.body;

  ;(async () => {
      const q = (`UPDATE pagos SET habilitado = ${habilitado} WHERE folio = ${id}`);
      await pool.query(q);
      res.json({status: "Pago modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});

//Facturas
app.get(`${rootUrl}/facturas`, (req, res) => {
  ;(async () => {
      const q = (`SELECT * FROM facturas`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/factura/:id`, (req, res) => { 
  ;(async () => {
    const {id} = req.params; 
      const q = (`SELECT * FROM facturas WHERE folio = ${id}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.get(`${rootUrl}/facturaP/:folio`, (req, res) => { 
  ;(async () => {
    const {folio} = req.params; 
      const q = (`SELECT * FROM facturas WHERE folio_p = ${folio}`);
      const { rows } = await pool.query(q);
      res.json(rows);
    })().catch(err => {
      res.json(err.stack)
  })
});

app.post(`${rootUrl}/facturas`, (req, res) => {
  const {
    rfc,
    fecha,
    hora,
    importe_total,
    concepto,
    metodo_pago,
    folio_p
  } = req.body;
  ;(async () => {
      const q = (`INSERT INTO facturas VALUES
      (DEFAULT, '${rfc}' '${fecha}', '${hora}', ${importe_total}, '${concepto}', 
      '${metodo_pago}', ${folio_p});`);
      await pool.query(q);
      res.json({status: "Factura agregada"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.delete(`${rootUrl}/factura/:id`, (req, res) => {
  const {id} = req.params;
  ;(async () => {
      const q = (`DELETE FROM facturas WHERE folio = ${id}`);
      await pool.query(q);
      res.json({status: "Factura eliminada"});
    })().catch(err => {
      res.json(err.stack)
  })
});

app.put(`${rootUrl}/facturas/:id`, (req, res) => {
  const {id} = req.params;
  const {
    rfc,
    fecha,
    hora,
    importe_total,
    concepto,
    metodo_pago,
    folio_p
  } = req.body;
  ;(async () => {
      const q = (`UPDATE pagos SET rfc = '${rfc}', fecha = '${fecha}' hora = '${hora}', importe_toral = ${importe_total},
      concepto = '${concepto}', metodo_pago = '${metodo_pago}', folio_p = ${folio_p},  WHERE folio = ${id}`);
      await pool.query(q);
      res.json({status: "Pago modificado"});
    })().catch(err => {
      res.json(err.stack)
  })
});




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