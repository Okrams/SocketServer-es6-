import Server  from "./models/server.js";
import {config} from 'dotenv';
config();

const server = new Server();

server.execute();