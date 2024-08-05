import { IPost, IUser } from "../utility/interfaces";

import axios from "axios";

export const getPosts = async (): Promise<IPost[]> => {
    const response = await axios.get<IPost[]>(
        "https://jsonplaceholder.typicode.com/posts"
    );
    return response.data;
};

export const getUsers = async (): Promise<IUser[]> => {
    const response = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
    );
    return response.data;
};
