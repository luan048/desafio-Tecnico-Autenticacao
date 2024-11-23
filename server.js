import express from 'express'

import {routers} from './routes/Routes.js'

const server = express();
const port = 8001;

server.use(express.json())
server.use(routers)

server.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
})