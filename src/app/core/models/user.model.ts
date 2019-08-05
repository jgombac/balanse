export interface User {
    username: string;
    password: string;
    token: string;
}

export class ILogin implements User {
    username: string;
    password: string;
    token: string;
}
