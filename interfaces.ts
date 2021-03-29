export {};

interface Rect {
  readonly id: string;
  color?: string; // optional
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "123",
  size: {
    width: 20,
    height: 30,
  },
  color: "#ccc",
};

const rect2: Rect = {
  id: "456",
  size: {
    width: 40,
    height: 60,
  },
};

// rect2.color = "black";

const rect3 = {} as Rect;

// ==================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect4: RectWithArea = {
  id: "678",
  size: {
    width: 40,
    height: 60,
  },
  getArea(): number {
    return this.size.width + this.size.height;
  },
};

// =================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// ================

interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid black",
  marginTop: "2px",
};
