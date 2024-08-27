import { IUser } from "../../utility/interfaces.ts";
import UserCard from "../userCard/UserCard.tsx";
import style from "./userPanel.module.css";
import useFetch from "../../hooks/fetchData.ts";

const UserPanel = () => {
    const { data, loading, error } = useFetch<IUser[]>(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <div className={style.wrapper}>Loading...</div>;
    if (error) return <div className={style.wrapper}>{error?.message}</div>;
    if (!data || data.length === 0)
        return <div className={style.wrapper}>No users found</div>;

    const users = data.map((user: IUser) => <UserCard key={user.id} user={user} />);

    return (
        <div className={style.wrapper}>
            <div className={style.usersContainer}>{users}</div>
        </div>
    );
};

export default UserPanel;