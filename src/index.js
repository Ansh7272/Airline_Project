const express = require("express");
const {PORT} = require('./config/serverConfig')
const setupAndStartServer= async () =>{

    const app =express();

    // Parse JSON data
    app.use(bodyParser.json());

    // Parse URL-encoded form data
    app.use(bodyParser.urlencoded({ extended: true }));

    app.listen(PORT,() =>{
        console.log(`server started at ${PORT}`);
        // console.log(process.env.NAME)
        // console.log(process.env);
    });
}
setupAndStartServer();