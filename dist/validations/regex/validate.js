"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePhoneNumber = exports.validateEmail = exports.validateRegex = void 0;
var validateRegex = function (value, regex) { return regex.test(value); };
exports.validateRegex = validateRegex;
var validateEmail = function (email, regex) {
    if (regex === void 0) { regex = /\S+@\S+\.\S+/; }
    return (0, exports.validateRegex)(email, regex);
};
exports.validateEmail = validateEmail;
var validatePhoneNumber = function (phoneNumber, regex) {
    if (regex === void 0) { regex = /^[0-9!@#$%^&*()_+{}[\]:;<>,.?~\\|/-]+$/g; }
    return (0, exports.validateRegex)(phoneNumber, regex);
};
exports.validatePhoneNumber = validatePhoneNumber;
