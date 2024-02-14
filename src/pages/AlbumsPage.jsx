import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import Album from "../component/card/Album.jsx";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const AlbumsPage = () => {
    const albums = useSelector((state) => state.albums);
    const users = useSelector((state) => state.users);
    const photos = useSelector((state) => state.photos);
    const navigate = useNavigate()


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
            <div>
                <h1 className={"text-gray-200 font-bold text-3xl p-9 pb-0"}>LIST OF ARTICLES</h1>
            </div>
            <div className={"grid lg:grid-cols-4 gap-4 p-9 pt-3 md:grid-cols-4 sm:grid-cols-2"}>
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
