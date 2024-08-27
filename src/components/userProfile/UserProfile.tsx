import { IUserExtended } from "../../utility/interfaces";
import cover from "../../../public/assets/img/photo-cover.svg";
import style from "./userProfile.module.css";
import useFetch from "../../hooks/fetchData";
import { useParams } from "react-router-dom";

const UserProfile = () => {
    const { id } = useParams();

    const { data, loading, error } = useFetch<IUserExtended>(
        `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (loading) return <div className={style.wrapper}>Loading...</div>;
    if (error) return <div className={style.wrapper}>{error?.message}</div>;

    return (
        <div className={style.wrapper}>
            <div className={style.profileBody}>
                <img className="avatar" src={cover} alt={`${data?.name} avatar`} />
                <div className="userData">
                    <div>{data?.username}</div>
                    <div>{data?.name}</div>
                    <div>{data?.phone.split(" ")[0]}</div>
                    <div>{data?.email}</div>
                    <a href={`https://${data?.website}`} target="_blank">
                        Click
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
