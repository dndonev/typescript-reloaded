type TPart1 = {
    serialNumber: 'ASD-FDSA'
}


type TPart<T> = {
    serialNumber: T;
}

type TNumberSerialPart = TPart<number>;
type TStringSerialPart = TPart<string>;
