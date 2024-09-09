"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformArrObjToArrStr = exports.transformObjToStr = exports.pickFields = exports.removeEmptyObject = void 0;
var removeEmptyObject = function (obj) {
    if (obj && typeof obj === "object" && !Array.isArray(obj)) {
        Object.keys(obj).forEach(function (key) {
            // Recursively remove empty fields from nested objects
            if (obj[key] && typeof obj[key] === "object" && !Array.isArray(obj[key])) {
                (0, exports.removeEmptyObject)(obj[key]);
            }
            // Remove the key if its value is null, undefined, or an empty object
            if (obj[key] === null || obj[key] === undefined || (typeof obj[key] === "object" && Object.keys(obj[key]).length === 0)) {
                delete obj[key];
            }
        });
    }
    return obj;
};
exports.removeEmptyObject = removeEmptyObject;
var pickFields = function (obj, fields) {
    var result = {};
    fields.forEach(function (field) {
        var keys = field.split(".");
        var current = obj;
        var currentResult = result;
        // Navigate through the keys to find or create the path
        keys.forEach(function (key, index) {
            if (current && current.hasOwnProperty(key)) {
                // If it's the last key, assign the value
                if (index === keys.length - 1) {
                    currentResult[key] = current[key];
                }
                else {
                    // If it's not the last key, ensure the path exists
                    currentResult[key] = currentResult[key] || {};
                    current = current[key];
                    currentResult = currentResult[key];
                }
            }
        });
    });
    return result;
};
exports.pickFields = pickFields;
var transformObjToStr = function (obj) {
    if (typeof obj === "object") {
        return obj === null || obj === void 0 ? void 0 : obj.value;
    }
    return obj;
};
exports.transformObjToStr = transformObjToStr;
var transformArrObjToArrStr = function (arr) {
    return arr === null || arr === void 0 ? void 0 : arr.map(function (i) {
        if (typeof i === "object") {
            return i === null || i === void 0 ? void 0 : i.value;
        }
        return i;
    });
};
exports.transformArrObjToArrStr = transformArrObjToArrStr;
