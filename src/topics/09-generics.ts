export const whatsMyType = <T>(argument: T): T => {
    return argument
}
// function whatsMyType2<T>(argument: T): T {
//     return argument
// }

let amIString = whatsMyType<string>('Hello Mundo')
let amINumber = whatsMyType<number>(100)
let amIArray = whatsMyType<number[]>([1,2,3,4,5])

console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join("-"))