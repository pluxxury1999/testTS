import { IUser } from "../../utility/interfaces";
import cover from "../../../public/assets/img/photo-cover.svg";
import style from "./userCard.module.css";
import { useNavigate } from "react-router-dom";

interface IUserCard {
    user: IUser;
}

const UserCard: React.FC<IUserCard> = ({ user }) => {

    const navigate = useNavigate();

    const clickHandler = (): void => {
        navigate(`/profile/${user.id}`)
    }

    return (
        <div key={user.id} className={style.cardWrapper} onClick={clickHandler}>
            <img className={style.avatar} src={cover} alt={user.name} />
            <p>@{user.username}</p>
            <p>{user.name}</p>
            <a className={style.mail} href={"mailto:" + user.email}>
                {user.email}
            </a>
        </div>
    );
};

export default UserCard;
