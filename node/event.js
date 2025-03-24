const EventEmitter = require('events')
const event = new EventEmitter()

event.on("sayHello", () => {
    console.log("say hello to everyone");
})
event.emit('sayHello');

event.on("greet", (name) => {
    console.log(`Greetings, ${name}!`);
})
event.emit('greet', 'Anshika')


event.on('dataReceived', () => {
  console.log('Listener 1: Data has been received!');
});

// Register the second listener
event.on('dataReceived', () => {
  console.log('Listener 2: Processing the received data...');
});

// Register the third listener
event.on('dataReceived', () => {
  console.log('Listener 3: Data processing complete.');
});

// Emit the event
event.emit('dataReceived');
