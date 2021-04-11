import express from "express";
import morgan from "morgan";
import pkg from "../package.json";




require('dotenv').config()



const app = express()

/* Cors son para que n o se bloqueen las solicitudes */
const cors = require('cors');
var corsOption = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOption));
/* EndCors */

global.__basedir = __dirname;

app.set('pkg', pkg);
app.use(express.json());

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({
        nombreproyecto: app.get('pkg').name,
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    })
})




export default app;