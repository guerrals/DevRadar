import socketio from 'socket.io-client';

const socket = socketio('http://192.168.0.53:3334', {
  autoConnect: false,
});

function subscribeToNewDevs(subscribeFunction) {
  socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs) {
  socket.io.opts.query = { 
    latitude,
    longitude,
    techs,
   };

  socket.connect();

  socket.on('message', text => {
    
  })
}

function disconnect() {
  if(socket.connected){
    socket.disconnect();
  }
}

export {
  connect,
  disconnect,
  subscribeToNewDevs
};