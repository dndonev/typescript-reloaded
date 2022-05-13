const p: IPerson = {
    firstName: 'Dobrin',
    lastName: 'Donev'
};


// type TFirstNamePerson = Partial<IPerson>;
// type TRequiredFirstNamePerson = Required<TFirstNamePerson>;

type T0 = NonNullable<string | number | undefined>;
type T1 = NonNullable<undefined | null>; // hehe

const fp: IPerson = {
    firstName: 'Dobrin',
    lastName: 'Donev'
}