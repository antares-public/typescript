function strip(x) {
    if (typeof x === "number") {
        return x.toFixed(2);
    }
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.header = "response header";
        this.result = "response result";
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = "response header";
        this.result = "response message";
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + res.result
        };
    }
    else {
        return {
            info: res.header + res.result
        };
    }
}
function setAlertType(type) {
    // ...
}
setAlertType("success");
