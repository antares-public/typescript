"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Typescript = /** @class */ (function () {
    function Typescript(version) {
        this.version = version;
    }
    Typescript.prototype.info = function (name) {
        return "[" + name + "]: Typescript version is " + this.version;
    };
    return Typescript;
}());
var typescript = new Typescript("1.2");
console.log(typescript.info("Name"));
// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;
//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }
var Car = /** @class */ (function () {
    function Car(model) {
        this.model = model;
        this.numberOfWheels = 4;
    }
    return Car;
}());
// =========
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = "";
        this.color = "black";
        this.go();
    }
    Animal.prototype.go = function () {
        console.log("voice");
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
cat.setVoice("meow");
cat.color = "white";
console.log(cat);
// ================
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var AddComponent = /** @class */ (function (_super) {
    __extends(AddComponent, _super);
    function AddComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddComponent.prototype.render = function () {
        console.log("Component on render");
    };
    AddComponent.prototype.info = function () {
        return "This is info";
    };
    return AddComponent;
}(Component));
