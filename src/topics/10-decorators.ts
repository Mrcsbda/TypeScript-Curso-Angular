function classDecorator<T extends {new(...args: any[]): {}}>(constructor: T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}
@classDecorator
export class superClass {
    public myProperty: string;
    print() {
        console.log("Hello World")
    }
}

const myClass = new superClass();

console.log(superClass)
console.log(myClass)