import express from "express"

import { AddressInfo } from "net"

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3033, () => {
    if(server) {
        const address = server.address() as AddressInfo;
        console.log(`Server está online em http://localhost:${address.port}`)
    }
    else {
        console.error(`Falha ao iniciar Servidor.`);
    }
})

export default app