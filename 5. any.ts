const p3: IPerson = {
    firstName: 'Dobrin'
}

const myAPI: () => any = () => {
    return JSON.parse(JSON.stringify(p3));
};

const p4 = myAPI()

console.log(p4.lastName);