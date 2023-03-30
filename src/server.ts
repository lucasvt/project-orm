import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { AppDataSource } from './database/data-source';

const app = express();

app.use(cors());

app.use(express.json());

AppDataSource.initialize().then(async () => {
    console.log('Database ok');
    app.listen(3333, () => {
        console.log('server started on port 3333');
    })
})