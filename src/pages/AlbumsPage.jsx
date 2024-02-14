import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Album from "../component/card/Album.jsx";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */
const AlbumsPage = () => {
    const dispatch = useDispatch();
    const albums = useSelector((state) => state.albums);
    const users = useSelector((state) => state.users);
    const photos = useSelector((state) => state.photos);
    const navigate = useNavigate()

    //
    // useEffect(() => {
    //
    //     dispatch({ type: 'FETCH_ALBUMS' });
    //     dispatch({ type: 'FETCH_USERS' });
    //     dispatch({ type: 'FETCH_PHOTOS' });
    // }, [dispatch]);

    const handleCardClick = (album) => {
        navigate('/album', {
            state: {
                album: album,
                user: users.find(user => user.id === album.userId)
            }
        });
        window.scrollTo(0, 0);
    };
    return (
        <div className={"bg-[rgba(31,41,55,1)] min-h-[100vh]"}>
            <div className={"grid lg:grid-cols-4 gap-4 p-9 md:grid-cols-4 sm:grid-cols-2"}>
                {albums.map((a) => (
                    <Album
                        key={a.id}
                        title={a.title}
                        photos = {
                            photos
                                .filter(photo => photo.albumId === a.id)
                                .slice(0, 6).map((photo) => (photo))
                                }
                        handleEvent={() => handleCardClick(a)}
                    />
                ))}
            </div>
        </div>
    );
}
export default AlbumsPage;
