export interface IDog {
    fullName: string;
    nickname: string | undefined;
}

type TMyDog = Partial<IDog>;
type TMyOtherDog = Pick<IDog, 'nickname'>;
type TMyCousinsDog = Omit<IDog, 'fullName'>;
type TMyOtherCousinsDog = NonNullable<IDog>;
