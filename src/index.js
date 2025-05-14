const express = require("express");
const {PORT} = require('./config/serverconfig')
const setupAndStartServer= async () =>{

    const app =express();
    app.listen(PORT,() =>{
        console.log(`server started at ${PORT}`);
        console.log(process.env);
    });
}
setupAndStartServer();