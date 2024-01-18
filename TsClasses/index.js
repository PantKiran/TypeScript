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
var Ram = new Player("Ram", "Ram");
console.log(Ram.fullName);
console.log((Ram.score = 20));
// console.log(Ram.score);
// shorthand
// class Player {
//   constructor(public first: string, public last: string, private score = 0) {}
//   private secretMethod(): void {
//     console.log("secret method");
//   }
// }
// const Ram = new Player("Ram", "Ram");
