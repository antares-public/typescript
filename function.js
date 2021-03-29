"use strict";
exports.__esModule = true;
function position(a, b) {
    if (!a && !b) {
        return { x: undefined, y: undefined };
    }
    if (a && !b) {
        return { x: a, y: undefined, "default": a.toString() };
    }
    return { x: a, y: b };
}
console.log("Empty", position());
console.log("One param", position(42));
console.log("Twi params", position(12, 12));
