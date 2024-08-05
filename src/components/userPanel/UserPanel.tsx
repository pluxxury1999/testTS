import "./userPanel.css";

import { IUser } from "../../utility/interfaces.ts";
import UserCard from "../userCard/UserCard.tsx";
import useFetch from "../../hooks/fetchData.ts";

const UserPanel = () => {
    const { data, loading, error } = useFetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <div className="wrapper">Loading...</div>;
    if (error) return <div className="wrapper">{error?.message}</div>;
    if (!data || data.length === 0)
        return <div className="wrapper">No users found</div>;

    const users = data.map((user: IUser) => <UserCard key={user.id} user={user} />);

    return (
        <div className="wrapper">
            <div className="usersContainer">{users}</div>
        </div>
    );
};

export default UserPanel;