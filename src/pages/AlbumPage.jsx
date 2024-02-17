import {useLocation, useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const AlbumPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const album = location?.state?.album;
    const user = location?.state?.user;
    const photos = useSelector((state) => state.photos).filter(p => p.albumId === album.id);

    const handleAuthorClick = () => {
        navigate('/author' , {state: {user:user}});
        window.scrollTo(0, 0);
    };
    return(
        <section className="p-[10vw] bg-[rgba(31,41,55,1)] pt-10 min-h-[100vh]">
            <div className={"bg-[rgba(239,246,255,0.1)] rounded-2xl p-10 "}>
                <div className=" pb-3">
                    <h1 className={"text-2xl text-pink-600 font-bold "}>{album.title.charAt(0).toUpperCase() + album.title.slice(1)}</h1>
                </div>
                <div className={""}>
                    <h1 className={"text-gray-400"}><span className={"text-gray-300"}>Author: </span>
                        <span onClick={handleAuthorClick} className={"hover:text-blue-700 cursor-pointer duration-300"}>{user.name}</span>
                    </h1>
                </div>
                <div className={"border my-5 border-gray-500"}></div>
                <div className={""}>
                    {/*<p className={"text-gray-200"}>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>*/}
                </div>
                <div className={"mt-5"}>
                    <h1 className={"text-2xl font-bold text-cyan-600"}>Photos</h1>
                </div>
                <div className={"grid xl:grid-cols-4 p-5 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"}>
                        {photos.map((image) =>(
                        <div
                            onClick={() => {
                                navigate("/photo", {state: {photo: image, user: user, album: album}});
                                window.scrollTo(0, 0);
                            }}
                            className={" cursor-pointer bg-[rgba(239,246,255,0.1)] rounded-md hover:bg-[rgba(239,246,255,0.2)] p-2 duration-300"} key={image.id}>
                            <h1 className={"text-gray-300 text-sm my-1 font-bold"}>{
                                image.title.length > 18 ? image.title.charAt(0).toUpperCase() + image.title.substring(0, 26).slice(1) + "..."
                                    : image.title.charAt(0).toUpperCase() + image.title.slice(1)
                            }</h1>
                            <img
                                className={"rounded"}
                                src={image.url}
                                alt={image.name}
                            />

                        </div>
                    ))}
                </div>
                {/*<button onClick={() => console.log(comments)}>lo</button>*/}
            </div>
        </section>
    )}
export default AlbumPage;
