"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRule = void 0;
var regex_1 = require("../regex");
var VALIDATOR = {
    email: { handle: regex_1.validateEmail, message: "Please enter a valid email address!" },
    phoneNumber: { handle: regex_1.validatePhoneNumber, message: "Please enter a valid phone number!" },
};
var validateRule = function (name, message) {
    if (name === void 0) { name = "email"; }
    var validate = VALIDATOR[name];
    return {
        validator: function (_, value) {
            if (value && !validate.handle(value)) {
                return Promise.reject(message !== null && message !== void 0 ? message : validate.message);
            }
            else {
                return Promise.resolve();
            }
        },
    };
};
exports.validateRule = validateRule;
