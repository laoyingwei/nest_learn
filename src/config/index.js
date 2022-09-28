"use strict";
exports.__esModule = true;
var development_1 = require("./dev/development");
var staging_1 = require("./staging/staging");
var production_1 = require("./prod/production");
var configs = {
    development: development_1["default"],
    test: staging_1["default"],
    production: production_1["default"]
};
var env = process.env.NODE_ENV || 'development';
exports["default"] = (function () { return configs[env]; });
