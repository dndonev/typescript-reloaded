const p1: { firstName: string } = {
    firstName: 'Dobrin'
};

interface IPerson {
    firstName: string;
    lastName?: string;
}

class Person {
    firstName = 'Dobrin'
}

const p2: IPerson = {
    firstName: 'Donev'
}

type TPerson = {
    firstName: string;
}

type TNumberPerson = number;

enum EPerson {
    GoodPerson = 'G',
    BadPerson = 'B'
}