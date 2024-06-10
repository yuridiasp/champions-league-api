import express from "express";
import cors from 'cors';

import routes from './routes/routes';

export default function createApp() {
    const app = express();

    app.use(express.json());

    app.use(cors());
    
    app.use("/api", routes);

    return app;
};