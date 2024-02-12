import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getUserAction } from "../redux/slice";
const ProfilePage = () => {

    const { data, isLoading } = useSelector((state) => state.users);

    const { id } = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserAction(id));
    }, [id]);

    return (
        <div>
            {
                isLoading
                    ?
                    (<span>Loading...</span>)
                    :
                    data
                        ?
                        (<div>Hi, I m {data.name}</div>)
                        :
                        (<span>No user found!</span>)
            }
        </div>
    )
}
export default ProfilePage;
