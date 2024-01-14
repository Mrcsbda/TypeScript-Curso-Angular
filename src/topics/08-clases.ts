export class Person {
    // public name?: string;
    // public address:string;

    constructor(
        public name: string,
        public address: string,
        public lastName: string
        ) {
        // this.name = name;
        // this.address = address;
    }
}

// export class Hero extends Person {
//     constructor(
//         public realName: string,
//         public age: string,
//         public alterEgo: string
//     ) {
//         super(realName, "New York")
//     }
// }

export class Hero {
    // public person: Person;
    constructor(
        public realName: string,
        public age: string,
        public alterEgo: string,
        public person: Person
    ) {
        // this.person = new Person(realName, "New York");
    }
}

const tony = new Person("Tony", "New York", "Stark");
const ironman = new Hero("Tony Stark", "45", "Tony", tony);

console.log(ironman)
