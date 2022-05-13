class Person {
    constructor(public firstName: string, public age: number) {
        
    }
}

interface IPerson {
    firstName: string;
    lastName: string;
}

enum EPerson {
    GoodPerson = '0',
    BadPerson = '1'
}

type TPerson = {
    firstName: string;
    lastName: string;
}
