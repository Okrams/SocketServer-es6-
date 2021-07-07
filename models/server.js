import express from 'express';
import { createServer } from 'http';
import { Server as ServerIo } from 'socket.io';
import path from 'path';
import Sockets from './sockets.js';
import cors from 'cors'

class Server {

    constructor(){ 
        this.app = express();;
        this.port = process.env.PORT;

        // Http server
        this.server = createServer(this.app);

        // Configuraciones de socket
        this.io = new ServerIo(this.server, { /* configuraciones */});
    }

    middlewares(){
        // directorio publico
        this.app.use( express.static( path.resolve('./public') ) );
        // CORS
        this.app.use( cors() );
    }

    configuracionSockets() {
        new Sockets(this.io)
    }

    execute () {
        // inicializar middleware
        this.middlewares();

        // inicializar sokcets
        this.configuracionSockets();

        // inicializar server
        this.server.listen(this.port, () => {
            console.log(`Server corriendo en puerto : ${this.port}`);
        });
    }
}

export default Server;
