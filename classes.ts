export {};

class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string) {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

// class Car {
//   readonly model: string;
//   readonly numberOfWheels: number = 4;

//   constructor(theModel: string) {
//     this.model = theModel;
//   }
// }

class Car {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

// =========
//modification
class Animal {
  protected voice: string = "";
  public color: string = "black";

  private go() {
    console.log("go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
// cat.voice
