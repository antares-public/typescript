interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // name | age

let key: PersonKeys = "name";
key = "age";

type User = {
  _id: number;
  name: string;
  email: string;
  createAt: Date;
};

type UserKeyNoMeta = Exclude<keyof User, "_id" | "createdAt">;
// type UserKeyNoMeta = Pick<User, "name" | "email">;

let u: UserKeyNoMeta = "name";
