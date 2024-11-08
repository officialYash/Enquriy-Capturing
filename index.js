import express from 'express'
import appConfig from './config/config.js'
import router from './router/router.js'

const {PORT}=appConfig
 const app = express()

 app.use(express.json())

 app.use("/",router)
 app.listen(PORT,()=>{
    console.info(`Server is running on Port ${PORT}`);
    
 })