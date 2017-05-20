var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js")

var a = {
    b: "x"
}

router.get("/", function(req, res) {
    console.log("Loading main page");
    burger.getAll(function(data) {
        var hbsObject = {
            burgers: data
        }
        res.render("index", hbsObject);

    });

});


router.post("/", function(req, res) {

    console.log("Creating burger :", req.body.burger);
    burger.create(["burger_name", "devoured"], [req.body.burger, false],
        function() {
            res.redirect("/")
        }

    );
});



router.put("/:id", function(req, res) {

    console.log("Devouring it :", req.params.id);
    var condition = "id = " + req.params.id;
    burger.update({
        devoured: req.params.id
    }, condition, function() {
        res.redirect("/");
    })


    // burger.create(["burger_name", "devoured"], [req.body.burger, false],
    //     function() {
    //         res.redirect("/")
    //     }
    //
    // );
});



// Export routes for server.js to use.
module.exports = router;
