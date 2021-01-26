const socketIO = require('socket.io');

let socket;

const connection = server => {
    // const io = socketIO.listen(server);
    const io = socketIO(server);

    /** Handle events */
    io.on("connection", (newSocket) => {
        socket = newSocket;
        // console.log("Socket ID: ",newSocket.id);
    });
};

const getSocket = () => socket;

module.exports = {
    connection,
    getSocket
};
