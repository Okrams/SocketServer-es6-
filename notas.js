


import { Server } from 'socket.io';

const io = new Server(server);

// directorio publico
app.use( express.static( './public') );

// io es el socket para emitir a todos los que esten conectados (en el namespace)

io.on('connection', ( socket ) => { //socket es el cliente que se conecto 
    // socket.id retorna un id unico este cambia cada que se recargue
    // socket es el cliente conectado

    // socket.emit('mensaje-bienvenida', {
    //     msg: 'Bienvenido al server',
    //     date: new Date()
    // } ) 

    // socket.on('mensaje-cliente', ( data ) => {
    //     console.log(data);
    // })

    socket.on('mensaje-to-server', (data) => {
        console.log(data);

        io.emit('mensaje-from-server', data );
    })

    console.log( socket.id );
});

server.listen(8000, () => {
    console.log(" server corriendo en puerto : 8000");
});