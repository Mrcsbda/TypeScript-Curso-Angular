import { Product, taxCalculation } from "./06-function-destructuring";

const shoppingCart: Product[] = [
    {
        description: "Nokia A1",
        price: 100
    },
    {
        description: "iPad Air",
        price: 150
    }
];

const [total, taxTotal] = taxCalculation({ products: shoppingCart, tax: 0.15 });
console.log("Total:", total)
console.log("Tax:", taxTotal)