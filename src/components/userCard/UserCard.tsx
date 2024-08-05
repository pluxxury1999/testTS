import "./userCard.css"

import { IUser } from "../../utility/interfaces";
import cover from "../../../public/assets/img/photo-cover.svg";

interface IUserCard {
    user: IUser;
}

const UserCard: React.FC<IUserCard> = ({ user }) => {
    return (
        <div key={user.id} className="cardWrapper">
            <img className="avatar" src={cover} alt={user.name} />
            <p>@{user.username}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default UserCard;
