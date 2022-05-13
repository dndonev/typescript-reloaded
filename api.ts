export interface IUser {
    nickname: string;
    password: string;
}

const response = JSON.stringify([{nickname: 'ddd'}]);

export const API = (() => {

    function getUsers(): unknown {
        return JSON.parse(response);
    }

    return {
        getUsers
    }
})();