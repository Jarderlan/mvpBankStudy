import './util/module-alias';
import express from "express";

const app = express();
const port = process.env.PORT ?? 8000;

const server = app.listen(port, () => {
    console.log('Server is running');
})

export default server