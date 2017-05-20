// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {

        getAll: function(cb) {
            orm.getAll("burgers", function(res) {
                cb(res);
            });
        },

        create: function(cols, vals, cb) {
            orm.create("burgers", cols, vals, function(res) {
                cb(res);
            })
        },

        update: function(objColVals, condition, cb) {
            orm.update("burgers", objColVals, condition, function(res) {
                    cb(res);
                })
            }

        }

        module.exports = burgers;
