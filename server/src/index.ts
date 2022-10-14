const express = require('express');
const cors = require('cors');
const http = require('http');

const config = require('./config/server-config');
const router = require('./router/index');
const socketIo = require('./router/socket/socket-io');

const corsOptions = {
    origin: 'http://localhost:3000',
    optionSuccessStatus: 200
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(config.baseUrl, router)

const server = http.createServer(app);

server.listen(config.port, () => {
   console.log(`Listening on port ${server.address().port}`);
   socketIo.getIo(server);
});
