class Player {
  public readonly first: string;
  public readonly last: string;
  protected _score = 0;
  constructor(first: string, last: string) {
    (this.first = first), (this.last = last);
  }
  private secretMethod(): void {
    console.log("secret method");
  }
  get fullName(): string {
    return `${this.first} ${this.last}`;
  }
  get score() {
    return this._score;
  }
  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("score can not be negative");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;

  maxScore() {
    return (this._score = 10000);
  }
}

const Ram = new Player("Ram", "Ram");
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
