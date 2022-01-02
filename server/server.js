const app = require('./app');
const http = require('http');

const server = http.createServer(app);

const start = () => {
  try {
    server.listen(8000, () => console.log(`Server is listening on ${8000}`));
  } catch (error) {
    console.error(error);
  }
};

start();
