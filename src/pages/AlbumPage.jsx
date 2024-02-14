import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Card from "../component/card/Card.jsx";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
const AlbumPage = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.albums);
    const users = useSelector((state) => state.users);
    const photos = useSelector((state) => state.photos);
    const navigate = useNavigate()


    useEffect(() => {

        dispatch({ type: 'FETCH_ALBUMS' });
        dispatch({ type: 'FETCH_USERS' });
        dispatch({ type: 'FETCH_PHOTOS' });
    }, [dispatch]);

    // const handleCardClick = (postId, post, users, navigate) => {
    //     navigate('/album', {
    //         state: {
    //             post: post,
    //             user: users.find(user => user.id === post.userId)
    //         }
    //     });
    //     window.scrollTo(0, 0);
    // };
    return (
        <div className={"bg-[rgba(31,41,55,1)] min-h-[100vh]"}>
            <div className={"grid lg:grid-cols-5 gap-4 p-9 md:grid-cols-4 sm:grid-cols-2"}>
                {albums.map((a) => (
                    <div key={a.id} className={"cursor-pointer bg-[rgba(239,246,255,0.1)] rounded-md hover:bg-[rgba(239,246,255,0.2)] p-2 duration-300"}>
                        <div className={" p-2"}>
                            <h2 className=" text-[18px] font-sans font-bold text-pink-600 flex domine-font">{
                                a.title.length > 18 ? a.title.charAt(0).toUpperCase() + a.title.substring(0, 18).slice(1) + "..."
                                    : a.title.charAt(0).toUpperCase() + a.title.slice(1)
                            }</h2>

                            <div className={"px-2 "}>
                                <img className={"rounded"} src={photos.find(photo => photo.albumId === a.id)?.url} alt=""/>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
export default AlbumPage;
