module.exports = app => {
    const user = require("..");
    var router = require("express").Router();
    
    console.log("route")
    router.post("/", user.create);

    router.get("/", user.findAll);


    app.use('/api/user', router);

}