export interface Passenger {
    name: string,
    children?: string[]
}

const passenger1: Passenger = {
    name: "Mariana"
}

const passenger2: Passenger = {
    name: "Camila",
    children: ["Natalia", "Melissa"]
}

const returnChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0
    // const howManyChildren = passenger.children!.length
    return howManyChildren
}

returnChildren(passenger1)