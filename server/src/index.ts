import express from 'express';
import cors from 'cors';
import http from 'http';

import config from './config/server-config';
import router from './router/index';
import socketIo from './router/socket/socket-io';

const corsOptions = {
	origin: 'http://localhost:3000',
	optionSuccessStatus: 200,
};

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(config.baseUrl, router);

const server = http.createServer(app);

server.listen(config.port, () => {
	if (server != null) {
		// @ts-ignore
		console.log(`Listening on port ${server.address().port}`);
		socketIo.getIo(server);
	}
});
