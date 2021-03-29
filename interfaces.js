"use strict";
exports.__esModule = true;
var rect1 = {
    id: "123",
    size: {
        width: 20,
        height: 30
    },
    color: "#ccc"
};
var rect2 = {
    id: "456",
    size: {
        width: 40,
        height: 60
    }
};
// rect2.color = "black";
var rect3 = {};
var rect4 = {
    id: "678",
    size: {
        width: 40,
        height: 60
    },
    getArea: function () {
        return this.size.width + this.size.height;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: "1px solid black",
    marginTop: "2px"
};
