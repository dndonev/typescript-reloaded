export interface ICat {
    age: number;
}

export interface ICat {
    name: string;
}

export const c1: ICat = {
    name: 'Kitty',
    age: 15
};

export type SomeType = ICat | number |  ICat | number |  ICat | number;