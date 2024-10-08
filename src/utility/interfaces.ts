export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
};

export interface IUserExtended extends IUser {
    address: object,
    phone: string,
    website: string,
    company: object
}