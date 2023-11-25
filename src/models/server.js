import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

import { router as usersRoutes } from '../routes/user.routes.js'
import { router as authRoutes } from '../routes/auth.routes.js';


dotenv.config()
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export class Server {
    

    constructor() {
        this.app = express()
        this.middleware()
        this.routing()
        //set
        this.app.set('views', path.join(__dirname, '..', 'views'));
        this.app.set('view engine', 'ejs')
        
    }



    middleware() {
        this.app.use(morgan('dev'))
        this.app.use(express.json())
        this.app.use(express.static('public'))
        this.app.use(express.urlencoded({extended: false}))
    }

    routing(){
        this.app.use('/', usersRoutes)
        this.app.use('/auth', authRoutes)
    }

    listening(){
        this.app.listen(process.env.PORT, ()=>{
            console.log(`Server listing on port ${process.env.PORT}`)
        })
    }

}