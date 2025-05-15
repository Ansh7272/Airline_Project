const express = require("express");
const {PORT} = require('./config/serverConfig')
const setupAndStartServer= async () =>{

    const PORT = process.env.PORT
    const app =express();
    app.listen(PORT,() =>{
        console.log(`server started at ${PORT}`);
        // console.log(process.env.NAME)
        // console.log(process.env);
    });
}
setupAndStartServer();