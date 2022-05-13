interface IPerson {
    firstName: string;
}

interface IPerson { // extends IAge
    lastName: string;
}

interface IAge {
    age: number;
}

const person: IPerson = {
    firstName: 'Dobrin',
    lastName: 'Donev'
}