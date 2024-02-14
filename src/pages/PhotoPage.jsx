import {useLocation, useNavigate} from "react-router-dom";

/**
 * author : Sudeera Madushan
 * date : 2/14/2024
 * project : bigzkoop-test-front-end
 */

const PhotoPage = () => {

    const navigate = useNavigate();
    const location = useLocation()
    const album = location?.state?.album;
    const user = location?.state?.user;
    const photo = location?.state?.photo;
    const handleAuthorClick = () => {
        navigate('/author' , {state: {user:user}});
        window.scrollTo(0, 0);
    };
  return(
      <section className="p-[10vw] bg-[rgba(31,41,55,1)] pt-10 min-h-[100vh]">
          <div className={"bg-[rgba(239,246,255,0.1)] rounded-2xl p-10 "}>
              <div className=" pb-3">
                  <h1 className={"text-2xl text-pink-600 font-bold "}>{photo.title.charAt(0).toUpperCase() + photo.title.slice(1)}</h1>
              </div>
              <div className={""}>
                  <h1 className={"text-gray-400"}><span className={"text-gray-300"}>Author: </span>
                      <span onClick={handleAuthorClick} className={"hover:text-blue-700 cursor-pointer duration-300"}>{user.name}</span>
                  </h1>
              </div>
              <div className={""}>
                  <h1 className={"text-gray-400"}><span className={"text-gray-300"}>Album: </span>
                      <span onClick={() => {
                          navigate('/album' , {state: {user:user, album:album}});
                          window.scrollTo(0, 0);
                      }} className={"hover:text-blue-700 cursor-pointer duration-300"}>{album.title}</span>
                  </h1>
              </div>
              <div className={"border my-5 border-gray-500"}></div>
              <div className={""}>
                  {/*<p className={"text-gray-200"}>{post.body.charAt(0).toUpperCase() + post.body.slice(1)}</p>*/}
              </div>
              <div className={"mt-5"}>
                  {/*<h1 className={"text-2xl font-bold text-cyan-600"}>PhotoPage</h1>*/}
                  <div className={"p-5"}>
                  <img
                      className={"w-full rounded"}
                      src={photo.url} alt=""/>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default PhotoPage;
