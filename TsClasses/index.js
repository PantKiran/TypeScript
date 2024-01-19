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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var Player = /** @class */ (function () {
    function Player(first, last) {
        this._score = 0;
        (this.first = first), (this.last = last);
    }
    Player.prototype.secretMethod = function () {
        console.log("secret method");
    };
    Object.defineProperty(Player.prototype, "fullName", {
        get: function () {
            return "".concat(this.first, " ").concat(this.last);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Player.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (newScore) {
            if (newScore < 0) {
                throw new Error("score can not be negative");
            }
            this._score = newScore;
        },
        enumerable: false,
        configurable: true
    });
    return Player;
}());
var SuperPlayer = /** @class */ (function (_super) {
    __extends(SuperPlayer, _super);
    function SuperPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isAdmin = true;
        return _this;
    }
    SuperPlayer.prototype.maxScore = function () {
        return (this._score = 10000);
    };
    return SuperPlayer;
}(Player));
var Ram = new Player("Ram", "Ram");
console.log(Ram.fullName);
console.log((Ram.score = 20));
var Bike = /** @class */ (function () {
    function Bike(color) {
        this.color = color;
    }
    return Bike;
}());
var Jacket = /** @class */ (function () {
    function Jacket(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    Jacket.prototype.print = function () {
        console.log("".concat(this.color, " ").concat(this.brand));
    };
    return Jacket;
}());
var bike1 = new Bike("Red");
var jacket1 = new Jacket("nike", "blue");
// abstract classes
var Employee = /** @class */ (function () {
    function Employee(first, last) {
        this.first = first;
        this.last = last;
    }
    Employee.prototype.greet = function () {
        console.log("Hey! ".concat(this.first, " ").concat(this.last));
    };
    return Employee;
}());
var FullTimeEmployee = /** @class */ (function (_super) {
    __extends(FullTimeEmployee, _super);
    function FullTimeEmployee(first, last, salary) {
        var _this = _super.call(this, first, last) || this;
        _this.first = first;
        _this.last = last;
        _this.salary = salary;
        return _this;
    }
    FullTimeEmployee.prototype.getPay = function () {
        return this.salary;
    };
    return FullTimeEmployee;
}(Employee));
var PartTimeEmployee = /** @class */ (function (_super) {
    __extends(PartTimeEmployee, _super);
    function PartTimeEmployee(first, last, hourlyRate, hourlyWorked) {
        var _this = _super.call(this, first, last) || this;
        _this.first = first;
        _this.last = last;
        _this.hourlyRate = hourlyRate;
        _this.hourlyWorked = hourlyWorked;
        return _this;
    }
    PartTimeEmployee.prototype.getPay = function () {
        return this.hourlyRate * this.hourlyWorked;
    };
    return PartTimeEmployee;
}(Employee));
var John = new FullTimeEmployee("John", "John", 500000);
var Harry = new PartTimeEmployee("Harry", "Harry", 20, 3000);
console.log(John.getPay());
console.log(Harry.getPay());
function identity(item) {
    return item;
}
identity({ name: "GermanShaperd", breed: "GermanShaperd", age: 8 });
function getRandomElement(item) {
    var randIndex = Math.floor(Math.random() * item.length);
    return item[randIndex];
}
console.log(getRandomElement(["he", "li", "fe"]));
console.log(getRandomElement([4, 5, 3, 2, 5]));
function MultipleTypes(first, second) {
    return __assign(__assign({}, first), second);
}
MultipleTypes({ first: [4, 5, 9] }, { second: ["one", "two"] });
function getDoubleLength(things) {
    return things.length * 2;
}
// default parameter
function makeEmptyList() {
    return [];
}
var nums = makeEmptyList();
var bools = makeEmptyList();
var PlayList = /** @class */ (function () {
    function PlayList() {
        this.queue = [];
    }
    PlayList.prototype.add = function (el) {
        this.queue.push(el);
    };
    return PlayList;
}());
var songs = new PlayList();
var videos = new PlayList();
songs.add({ title: "random song", artist: "random artist" });
console.log(songs.queue);
// type narrowing
function Triple(value) {
    if (typeof value === "string") {
        return console.log(value);
    }
    console.log(value * 3);
}
Triple("hi");
