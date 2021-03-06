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

const typescript = new Typescript("1.2");
console.log(typescript.info("Name"));

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

class Animal {
  protected voice: string = "";
  public color: string = "black";

  constructor() {
    this.go();
  }

  private go() {
    console.log("voice");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();

cat.setVoice("meow");

cat.color = "white";
console.log(cat);

// ================

abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AddComponent extends Component {
  render(): void {
    console.log("Component on render");
  }

  info(): string {
    return "This is info";
  }
}
